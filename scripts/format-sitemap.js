import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const targetSitemapPath = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemap0Path)) {
  let content = fs.readFileSync(sitemap0Path, 'utf8');

  // Format XML with linebreaks so Chrome renders the interactive XML tree view
  content = content
    .replace(/></g, '>\n<')
    .replace(/<url>/g, '  <url>')
    .replace(/<\/url>/g, '  </url>')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<xhtml:link/g, '    <xhtml:link');

  fs.writeFileSync(targetSitemapPath, content, 'utf8');
  fs.writeFileSync(sitemap0Path, content, 'utf8');
  console.log('Successfully pretty-printed sitemap.xml with XML tree linebreaks!');
}
