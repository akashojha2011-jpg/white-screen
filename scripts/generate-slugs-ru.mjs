// scripts/generate-slugs-ru.mjs
import fs from 'fs';
import path from 'path';
import { SLUG_ADDITIONS_RU } from './generate-ru.mjs';

const slugsPath = path.resolve('src/i18n/slugs.ts');
let content = fs.readFileSync(slugsPath, 'utf-8');

let updatedCount = 0;
for (const [id, slugs] of Object.entries(SLUG_ADDITIONS_RU)) {
  const targetPattern = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?ko:\\s*['"][^'"]*['"],\\n\\s*\\})`, 'g');
  
  content = content.replace(targetPattern, (match) => {
    if (!match.includes('ru:')) {
      updatedCount++;
      return match.replace(/ko:\s*['"][^'"]*['"],\n\s*\}/, (koLine) => {
        return `${koLine.slice(0, -1)}  ru: '${slugs.ru}',\n    }`;
      });
    }
    return match;
  });
}

fs.writeFileSync(slugsPath, content, 'utf-8');
console.log(`✓ src/i18n/slugs.ts updated (${updatedCount} slug mappings updated with ru)`);
