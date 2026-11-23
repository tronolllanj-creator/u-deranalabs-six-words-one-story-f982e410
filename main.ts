// u-deranalabs-six-words-one-story-f982e410
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`${dir}/entry.txt`, 'The old lighthouse was finally dark.', 'utf-8');
