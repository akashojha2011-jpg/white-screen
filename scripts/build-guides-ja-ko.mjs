// scripts/build-guides-ja-ko.mjs
import fs from 'fs';
import path from 'path';
import { guidesJa } from './data/guides-ja.mjs';
import { guidesKo } from './data/guides-ko.mjs';

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
  if (!guidesJa[id]) throw new Error(`Missing JA guide: ${id}`);
  if (!guidesKo[id]) throw new Error(`Missing KO guide: ${id}`);
}

// Write src/content/guides_ja.ts
fs.writeFileSync(
  path.resolve('src/content/guides_ja.ts'),
  `import type { LocalizedGuideContent } from './guides';\n\nexport const GUIDES_JA: Record<string, LocalizedGuideContent> = ${JSON.stringify(guidesJa, null, 2)};\n`,
  'utf-8'
);
console.log('✓ src/content/guides_ja.ts written with all 20 guides');

// Write src/content/guides_ko.ts
fs.writeFileSync(
  path.resolve('src/content/guides_ko.ts'),
  `import type { LocalizedGuideContent } from './guides';\n\nexport const GUIDES_KO: Record<string, LocalizedGuideContent> = ${JSON.stringify(guidesKo, null, 2)};\n`,
  'utf-8'
);
console.log('✓ src/content/guides_ko.ts written with all 20 guides');

// Update src/content/guides.ts
const guidesPath = path.resolve('src/content/guides.ts');
let guidesContent = fs.readFileSync(guidesPath, 'utf-8');

if (!guidesContent.includes("import { GUIDES_JA }")) {
  guidesContent = `import { GUIDES_JA } from './guides_ja';\nimport { GUIDES_KO } from './guides_ko';\n` + guidesContent;

  guidesContent = guidesContent.replace(
    'tr: GUIDES_TR[id] || (item.content as any).tr,\n',
    `tr: GUIDES_TR[id] || (item.content as any).tr,\n      ja: GUIDES_JA[id] || (item.content as any).ja,\n      ko: GUIDES_KO[id] || (item.content as any).ko,\n`
  );

  fs.writeFileSync(guidesPath, guidesContent, 'utf-8');
  console.log('✓ src/content/guides.ts updated with GUIDES_JA and GUIDES_KO integration');
}
