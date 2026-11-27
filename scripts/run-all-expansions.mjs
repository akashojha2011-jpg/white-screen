// scripts/run-all-expansions.mjs
import { execSync } from 'child_process';

const steps = [
  'node scripts/apply-languages.mjs',
  'node scripts/generate-ui-it-nl.mjs',
  'node scripts/generate-slugs-it-nl.mjs',
  'node scripts/generate-colors-it-nl.mjs',
  'node scripts/generate-themes-it-nl.mjs',
  'node scripts/generate-wallpapers-it-nl.mjs',
  'node scripts/generate-legal-it-nl.mjs',
  'node scripts/generate-tools-it-nl.mjs',
  'node scripts/build-guides-data.mjs'
];

for (const step of steps) {
  console.log(`\n▶ Running: ${step}`);
  execSync(step, { stdio: 'inherit' });
}

console.log('\n✅ All language expansion scripts completed successfully!');
