// scripts/fix-slugs-and-guides.mjs
import fs from 'fs';
import path from 'path';
import { SLUG_ADDITIONS_PL_TR } from './generate-pl-tr.mjs';

const slugsPath = path.resolve('src/i18n/slugs.ts');
let content = fs.readFileSync(slugsPath, 'utf-8');

// Fix the single missing it/nl in dual-monitor-ergonomics-secondary-screen-light
if (content.includes("id: 'dual-monitor-ergonomics-secondary-screen-light'") && !content.includes("it: 'ergonomia-doppio-monitor-luce-secondaria'")) {
  content = content.replace(
    /id: 'dual-monitor-ergonomics-secondary-screen-light'[\s\S]*?id: 'ergonomi-monitor-ganda-sebagai-sumber-cahaya',\n\s*\}/,
    (match) => `${match.slice(0, -1)}  it: 'ergonomia-doppio-monitor-luce-secondaria',\n      nl: 'dual-monitor-ergonomie-tweede-scherm-als-lichtbron',\n    }`
  );
}

// Now ensure ALL 94 pages have pl and tr
let updatedCount = 0;
for (const [id, slugs] of Object.entries(SLUG_ADDITIONS_PL_TR)) {
  const blockRegex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?slugs:\\s*\\{[\\s\\S]*?)(\\n\\s*\\})`, 'g');
  content = content.replace(blockRegex, (match, prefix, suffix) => {
    if (!match.includes('pl:')) {
      updatedCount++;
      return `${prefix}\n      pl: '${slugs.pl}',\n      tr: '${slugs.tr}',${suffix}`;
    }
    return match;
  });
}

fs.writeFileSync(slugsPath, content, 'utf-8');
console.log(`✓ src/i18n/slugs.ts verified: ${updatedCount} additional slugs updated with pl and tr`);
