// scripts/generate-slugs-pl-tr.mjs
import fs from 'fs';
import path from 'path';
import { SLUG_ADDITIONS_PL_TR } from './generate-pl-tr.mjs';

const slugsPath = path.resolve('src/i18n/slugs.ts');
let content = fs.readFileSync(slugsPath, 'utf-8');

let updatedCount = 0;
for (const [id, slugs] of Object.entries(SLUG_ADDITIONS_PL_TR)) {
  const targetPattern = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?nl:\\s*['"][^'"]*['"],\\n\\s*\\})`, 'g');
  
  content = content.replace(targetPattern, (match) => {
    if (!match.includes('pl:')) {
      updatedCount++;
      return match.replace(/nl:\s*['"][^'"]*['"],\n\s*\}/, (nlLine) => {
        return `${nlLine.slice(0, -1)}  pl: '${slugs.pl}',\n      tr: '${slugs.tr}',\n    }`;
      });
    }
    return match;
  });
}

fs.writeFileSync(slugsPath, content, 'utf-8');
console.log(`✓ src/i18n/slugs.ts updated (${updatedCount} slug mappings updated with pl and tr)`);
