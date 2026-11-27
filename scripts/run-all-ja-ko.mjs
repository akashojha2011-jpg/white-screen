// scripts/run-all-ja-ko.mjs
import { execSync } from 'child_process';

const steps = [
  'node scripts/generate-slugs-ja-ko.mjs',
  'node scripts/generate-colors-ja-ko.mjs',
  'node scripts/generate-themes-ja-ko.mjs',
  'node scripts/generate-wallpapers-ja-ko.mjs',
  'node scripts/generate-legal-ja-ko.mjs',
  'node scripts/generate-tools-ja-ko.mjs',
  'node scripts/build-guides-ja-ko.mjs',
];

for (const cmd of steps) {
  console.log(`\n▶ Running: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

console.log('\n✅ All Japanese (ja) and Korean (ko) expansion steps completed successfully!');
