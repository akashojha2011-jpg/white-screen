// scripts/build-guides-ru.mjs
import fs from 'fs';
import path from 'path';
import { guidesRu } from './data/guides-ru.mjs';
import { guidesRuPart2 } from './data/guides-ru-part2.mjs';

const allGuidesRu = {
  ...guidesRu,
  ...guidesRuPart2,
};

// Verify all 20 guides are present
const expectedGuideIds = [
  'how-to-clean-laptop-screen-safely',
  'how-to-check-dead-pixels-iphone-monitor',
  'can-white-screen-work-as-ring-light',
  'oled-burn-in-causes-fixes-test',
  'backlight-bleed-vs-ips-glow',
  'turn-laptop-tablet-into-tracing-lightbox',
  'monitor-color-luminance-uniformity-test',
  'screen-flicker-pwm-eye-strain-test',
  'red-screen-night-vision-astronomy-guide',
  'green-screen-lighting-zoom-streaming',
  'black-screen-battery-savings-oled-amoled',
  'macro-product-photography-screen-lighting',
  'camera-white-balance-calibration-gray-screen',
  'dual-monitor-ergonomics-secondary-screen-light',
  'fix-stuck-pixels-rgb-screen-cycling',
  'screen-brightness-eye-comfort-day-night',
  'fullscreen-color-screens-deep-focus-pomodoro',
  'monitor-pixel-density-ppi-4k-8k-wallpapers',
  'how-to-test-laptop-displays-before-buying',
  'display-panel-types-oled-ips-va-tn-comparison',
];

for (const id of expectedGuideIds) {
  if (!allGuidesRu[id]) throw new Error(`Missing RU guide: ${id}`);
}

// Write src/content/guides_ru.ts
fs.writeFileSync(
  path.resolve('src/content/guides_ru.ts'),
  `import type { LocalizedGuideContent } from './guides';\n\nexport const GUIDES_RU: Record<string, LocalizedGuideContent> = ${JSON.stringify(allGuidesRu, null, 2)};\n`,
  'utf-8'
);
console.log('✓ src/content/guides_ru.ts written with all 20 guides');

// Update src/content/guides.ts
const guidesPath = path.resolve('src/content/guides.ts');
let guidesContent = fs.readFileSync(guidesPath, 'utf-8');

if (!guidesContent.includes("import { GUIDES_RU }")) {
  guidesContent = `import { GUIDES_RU } from './guides_ru';\n` + guidesContent;

  guidesContent = guidesContent.replace(
    'ko: GUIDES_KO[id] || (item.content as any).ko,\n',
    `ko: GUIDES_KO[id] || (item.content as any).ko,\n      ru: GUIDES_RU[id] || (item.content as any).ru,\n`
  );

  fs.writeFileSync(guidesPath, guidesContent, 'utf-8');
  console.log('✓ src/content/guides.ts updated with GUIDES_RU integration');
}
