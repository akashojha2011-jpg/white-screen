// scripts/generate-slugs-ja-ko.mjs
import fs from 'fs';
import path from 'path';
import { SLUG_ADDITIONS_JA_KO } from './generate-ja-ko.mjs';

const slugsPath = path.resolve('src/i18n/slugs.ts');
let content = fs.readFileSync(slugsPath, 'utf-8');

let updatedCount = 0;
for (const [id, slugs] of Object.entries(SLUG_ADDITIONS_JA_KO)) {
  const targetPattern = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?tr:\\s*['"][^'"]*['"],\\n\\s*\\})`, 'g');
  
  content = content.replace(targetPattern, (match) => {
    if (!match.includes('ja:')) {
      updatedCount++;
      return match.replace(/tr:\s*['"][^'"]*['"],\n\s*\}/, (trLine) => {
        return `${trLine.slice(0, -1)}  ja: '${slugs.ja}',\n      ko: '${slugs.ko}',\n    }`;
      });
    }
    return match;
  });
}

fs.writeFileSync(slugsPath, content, 'utf-8');
console.log(`✓ src/i18n/slugs.ts updated (${updatedCount} slug mappings updated with ja and ko)`);
