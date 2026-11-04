import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const SITE_ORIGIN = 'https://www.thewhitescreen.org';

if (!fs.existsSync(DIST_DIR)) {
  console.error(`Error: dist directory does not exist at ${DIST_DIR}. Run "npm run build" first.`);
  process.exit(1);
}

console.log('🔍 Starting comprehensive Build-Time SEO Audit for TheWhiteScreen.org...\n');

// Find all HTML files in dist/
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(DIST_DIR);
console.log(`Found ${htmlFiles.length} rendered HTML pages in dist/ to audit.`);

let errors = [];
let warnings = [];

const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
const hreflangRegistry = new Map(); // canonical -> [{ lang, href }]
const internalLinks = [];

// Suspicious English phrases that must never appear in non-English body HTML
const ENGLISH_LEAKAGE_STRINGS = [
  'Choose Format',
  'Choose Resolution',
  'How to Use This Screen Tool',
  'Frequently Asked Questions (FAQ)',
  'Return to Home',
  'All rights reserved. Free online display tool.',
  'Instant pure bright white screen tool',
];

for (const filePath of htmlFiles) {
  const relativePath = path.relative(DIST_DIR, filePath);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip 404 page for certain checks
  const is404 = relativePath === '404.html';

  // Determine language based on path
  let lang = 'en';
  const pathParts = relativePath.split(path.sep);
  if (['es', 'fr', 'de', 'pt', 'id'].includes(pathParts[0])) {
    lang = pathParts[0];
  }

  // 1. Canonical Check
  const canonicalMatch = content.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                         content.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (!canonicalMatch) {
    errors.push(`[Canonical Missing] ${relativePath}: No canonical tag found.`);
  } else {
    const canonical = canonicalMatch[1];

    if (!canonical.startsWith(SITE_ORIGIN)) {
      errors.push(`[Canonical Origin] ${relativePath}: Canonical does not start with ${SITE_ORIGIN}. Got: "${canonical}"`);
    }

    if (!canonical.endsWith('/')) {
      errors.push(`[Canonical Trailing Slash] ${relativePath}: Canonical must end with trailing slash. Got: "${canonical}"`);
    }

    if (canonical.includes('//', 8)) {
      errors.push(`[Canonical Double Slash] ${relativePath}: Canonical has double slashes: "${canonical}"`);
    }

    if (!is404) {
      if (canonicals.has(canonical)) {
        errors.push(`[Canonical Duplicate] Duplicate canonical "${canonical}" found in ${relativePath} and ${canonicals.get(canonical)}`);
      } else {
        canonicals.set(canonical, relativePath);
      }
    }
  }

  // 2. Single H1 Tag Check
  const h1Matches = [...content.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gis)];
  if (h1Matches.length === 0) {
    errors.push(`[H1 Missing] ${relativePath}: No <h1> tag found.`);
  } else if (h1Matches.length > 1) {
    errors.push(`[Multiple H1] ${relativePath}: Found ${h1Matches.length} <h1> tags. Expected exactly 1.`);
  } else {
    const h1Text = h1Matches[0][1].replace(/<[^>]+>/g, '').trim();
    if (!h1Text) {
      errors.push(`[Empty H1] ${relativePath}: <h1> is empty.`);
    }
  }

  // 3. Title Check
  const titleMatch = content.match(/<title\b[^>]*>(.*?)<\/title>/is);
  if (!titleMatch || !titleMatch[1].trim()) {
    errors.push(`[Title Missing] ${relativePath}: No valid <title> found.`);
  } else {
    const titleText = titleMatch[1].trim();
    if (!is404) {
      if (titles.has(titleText)) {
        warnings.push(`[Title Duplicate] Duplicate title "${titleText}" in ${relativePath} and ${titles.get(titleText)}`);
      } else {
        titles.set(titleText, relativePath);
      }
    }
  }

  // 4. Meta Description Check
  const metaDescMatch = content.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    errors.push(`[Meta Description Missing] ${relativePath}: No meta description found.`);
  } else {
    const descText = metaDescMatch[1].trim();
    if (!is404) {
      if (descriptions.has(descText)) {
        warnings.push(`[Meta Desc Duplicate] Duplicate meta description in ${relativePath} and ${descriptions.get(descText)}`);
      } else {
        descriptions.set(descText, relativePath);
      }
    }
  }

  // 5. Reciprocal Hreflang Tags Check
  if (!is404 && canonicalMatch) {
    const canonical = canonicalMatch[1];
    const hreflangMatches = [...content.matchAll(/<link\s+[^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)];
    const alternateMap = new Map();
    for (const match of hreflangMatches) {
      alternateMap.set(match[1], match[2]);
    }

    hreflangRegistry.set(canonical, alternateMap);

    // Ensure x-default exists
    if (!alternateMap.has('x-default')) {
      errors.push(`[Hreflang x-default Missing] ${relativePath}: Missing x-default hreflang tag.`);
    }

    // Ensure self-referencing hreflang exists
    if (!alternateMap.has(lang)) {
      errors.push(`[Hreflang Self Missing] ${relativePath}: Missing self-referencing hreflang tag for "${lang}".`);
    } else if (alternateMap.get(lang) !== canonical) {
      errors.push(`[Hreflang Self Mismatch] ${relativePath}: Self hreflang (${alternateMap.get(lang)}) does not match canonical (${canonical}).`);
    }
  }

  // 6. English Leakage on Non-English Pages Check
  if (lang !== 'en' && !is404) {
    // Check main body content for un-translated UI text
    for (const phrase of ENGLISH_LEAKAGE_STRINGS) {
      if (content.includes(phrase)) {
        errors.push(`[English Leakage] ${relativePath}: Contains forbidden English string "${phrase}"`);
      }
    }
  }

  // 7. Internal Links Audit
  const linkMatches = [...content.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)];
  for (const m of linkMatches) {
    const href = m[1];
    // We only validate site internal links
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/#')) {
      internalLinks.push({ source: relativePath, href });
    }
  }
}

// Reciprocal Hreflang Validation across pages
console.log('\nValidating reciprocal hreflangs...');
for (const [canonical, alternates] of hreflangRegistry.entries()) {
  for (const [targetLang, targetUrl] of alternates.entries()) {
    if (targetLang === 'x-default') continue;

    const targetAlternates = hreflangRegistry.get(targetUrl);
    if (!targetAlternates) {
      errors.push(`[Hreflang Target Missing] ${canonical} references ${targetUrl} (${targetLang}), but target page was not found in build.`);
    } else {
      // Find reciprocal entry
      let hasReciprocal = false;
      for (const [recipLang, recipUrl] of targetAlternates.entries()) {
        if (recipUrl === canonical) {
          hasReciprocal = true;
          break;
        }
      }
      if (!hasReciprocal) {
        errors.push(`[Hreflang Non-Reciprocal] ${canonical} links to ${targetUrl}, but ${targetUrl} does not link back to ${canonical}.`);
      }
    }
  }
}

// Internal Links Validation
console.log('Validating internal links format and destinations...');
for (const { source, href } of internalLinks) {
  // Strip hash and query
  const cleanHref = href.split('#')[0].split('?')[0];
  if (!cleanHref || cleanHref === '/') continue;

  const isAsset = /\.(xml|txt|png|svg|ico|jpg|jpeg|webp|webmanifest|json|css|js)$/i.test(cleanHref);

  if (!isAsset) {
    if (!cleanHref.endsWith('/')) {
      errors.push(`[Internal Link Missing Trailing Slash] In ${source}: Link "${href}" must end with a trailing slash.`);
    }

    // Check if target directory/file exists in dist
    const expectedDir = path.join(DIST_DIR, cleanHref.replace(/^\//, ''));
    const expectedFile = path.join(expectedDir, 'index.html');
    if (!fs.existsSync(expectedFile)) {
      errors.push(`[Broken Internal Link] In ${source}: Link "${href}" points to nonexistent page "${expectedFile}".`);
    }
  } else {
    const expectedAsset = path.join(DIST_DIR, cleanHref.replace(/^\//, ''));
    if (!fs.existsSync(expectedAsset)) {
      errors.push(`[Broken Internal Asset] In ${source}: Asset "${href}" does not exist in dist.`);
    }
  }
}

// 8. Sitemap Coverage Validation
console.log('Validating sitemap coverage and structure...');
const sitemapIndexPath = path.join(DIST_DIR, 'sitemap-index.xml');
if (!fs.existsSync(sitemapIndexPath)) {
  errors.push(`[Sitemap Index Missing] dist/sitemap-index.xml does not exist.`);
} else {
  const indexContent = fs.readFileSync(sitemapIndexPath, 'utf-8');
  const sitemapLocs = [...indexContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  console.log(`sitemap-index.xml references ${sitemapLocs.length} individual sitemaps.`);

  const sitemapPages = new Set();

  for (const sitemapUrl of sitemapLocs) {
    const sitemapFilename = path.basename(new URL(sitemapUrl).pathname);
    const sitemapPath = path.join(DIST_DIR, sitemapFilename);

    if (!fs.existsSync(sitemapPath)) {
      errors.push(`[Referenced Sitemap Missing] sitemap-index.xml references "${sitemapUrl}", but ${sitemapPath} was not generated.`);
    } else {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      const pageLocs = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

      for (const loc of pageLocs) {
        if (!loc.endsWith('/')) {
          errors.push(`[Sitemap URL Trailing Slash] In ${sitemapFilename}: URL "${loc}" missing trailing slash.`);
        }
        sitemapPages.add(loc);
      }
    }
  }

  // Check that every indexable HTML page is covered in the sitemaps
  for (const [canonical, pagePath] of canonicals.entries()) {
    if (!sitemapPages.has(canonical)) {
      errors.push(`[Sitemap Coverage Missing] Page "${canonical}" (${pagePath}) is missing from sitemaps.`);
    }
  }
}

// Summary Report
console.log('\n========================================');
console.log(`SEO Audit Complete: ${htmlFiles.length} pages tested.`);
console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}`);
console.log('========================================\n');

if (warnings.length > 0) {
  console.log('⚠️ WARNINGS:');
  warnings.slice(0, 15).forEach(w => console.log('  ' + w));
  if (warnings.length > 15) {
    console.log(`  ... and ${warnings.length - 15} more warnings.`);
  }
  console.log('');
}

if (errors.length > 0) {
  console.error('❌ CRITICAL FAILURES:');
  errors.slice(0, 30).forEach(e => console.error('  ' + e));
  if (errors.length > 30) {
    console.error(`  ... and ${errors.length - 30} more errors.`);
  }
  console.error(`\nBuild SEO Check Failed with ${errors.length} errors.`);
  process.exit(1);
} else {
  console.log('✅ ALL SEO AUDIT CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
