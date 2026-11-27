// scripts/generate-slugs-it-nl.mjs
import fs from 'fs';
import path from 'path';

const slugsPath = path.resolve('src/i18n/slugs.ts');
let content = fs.readFileSync(slugsPath, 'utf-8');

import { SLUG_ADDITIONS } from './generate-it-nl.mjs';

// Iterate through SLUG_REGISTRY entries and inject `it` and `nl`
let updatedCount = 0;
for (const [id, slugs] of Object.entries(SLUG_ADDITIONS)) {
  const targetPattern = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?id:\\s*['"][^'"]*['"],\\n\\s*\\})`, 'g');
  
  content = content.replace(targetPattern, (match) => {
    if (!match.includes('it:')) {
      updatedCount++;
      return match.replace(/id:\s*['"][^'"]*['"],\n\s*\}/, (idLine) => {
        return `${idLine.slice(0, -1)}  it: '${slugs.it}',\n      nl: '${slugs.nl}',\n    }`;
      });
    }
    return match;
  });
}

fs.writeFileSync(slugsPath, content, 'utf-8');
console.log(`✓ src/i18n/slugs.ts updated (${updatedCount} slug mappings updated with it and nl)`);
