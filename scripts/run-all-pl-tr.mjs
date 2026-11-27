// scripts/run-all-pl-tr.mjs
import { execSync } from 'child_process';

const steps = [
  'node scripts/apply-languages-pl-tr.mjs',
  'node scripts/generate-ui-pl-tr.mjs',
  'node scripts/generate-slugs-pl-tr.mjs',
  'node scripts/generate-colors-pl-tr.mjs',
  'node scripts/generate-themes-pl-tr.mjs',
  'node scripts/generate-wallpapers-pl-tr.mjs',
  'node scripts/generate-legal-pl-tr.mjs',
  'node scripts/generate-tools-pl-tr.mjs',
  'node scripts/build-guides-pl-tr.mjs'
];

for (const step of steps) {
  console.log(`\n▶ Running: ${step}`);
  execSync(step, { stdio: 'inherit' });
}

console.log('\n✅ All Polish and Turkish expansion scripts completed successfully!');
