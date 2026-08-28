import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const targetSitemapPath = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemap0Path)) {
  let content = fs.readFileSync(sitemap0Path, 'utf8');

  // Inject XSL stylesheet reference right after XML declaration
  const stylesheetHeader = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  
  if (!content.includes('xml-stylesheet')) {
    content = content.replace('<?xml version="1.0" encoding="UTF-8"?>', `<?xml version="1.0" encoding="UTF-8"?>\n${stylesheetHeader}`);
  }

  // Write formatted XML with stylesheet reference to both sitemap.xml and sitemap-0.xml
  fs.writeFileSync(targetSitemapPath, content, 'utf8');
  fs.writeFileSync(sitemap0Path, content, 'utf8');
  console.log('Successfully formatted sitemap.xml with XSL stylesheet!');
} else {
  console.error('sitemap-0.xml not found in dist/');
}
