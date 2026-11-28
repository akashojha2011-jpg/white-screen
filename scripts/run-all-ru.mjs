// scripts/run-all-ru.mjs
import { execSync } from 'child_process';

console.log('🚀 Running Russian expansion generator pipeline...');

const steps = [
  'node scripts/generate-slugs-ru.mjs',
  'node scripts/generate-colors-ru.mjs',
  'node scripts/generate-themes-ru.mjs',
  'node scripts/generate-wallpapers-ru.mjs',
  'node scripts/generate-legal-ru.mjs',
  'node scripts/generate-tools-ru.mjs',
  'node scripts/build-guides-ru.mjs',
];

for (const step of steps) {
  console.log(`\n> ${step}`);
  execSync(step, { stdio: 'inherit' });
}

console.log('\n🎉 Russian expansion pipeline executed successfully!');
