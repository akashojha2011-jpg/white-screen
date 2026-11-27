// scripts/generate-guides-it-nl.mjs
import fs from 'fs';
import path from 'path';

// Load existing guides to reference their topics and IDs
import { ALL_GUIDES } from '../dist/content/guides.js'; // wait, or load directly from TS or define clean data

console.log('Writing guides for Italian and Dutch...');
