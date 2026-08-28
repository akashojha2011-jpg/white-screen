import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
const targetSitemapPath = path.join(distDir, 'sitemap.xml');

const stylesheetHeader = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';

function injectStylesheet(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('xml-stylesheet')) {
      content = content.replace('<?xml version="1.0" encoding="UTF-8"?>', `<?xml version="1.0" encoding="UTF-8"?>\n${stylesheetHeader}`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

injectStylesheet(sitemap0Path);
injectStylesheet(sitemapIndexPath);

if (fs.existsSync(sitemap0Path)) {
  fs.copyFileSync(sitemap0Path, targetSitemapPath);
  console.log('Successfully created styled sitemap.xml!');
}
