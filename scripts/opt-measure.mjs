import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function main() {
  const cases = [
    ['uipng-1', 'static/UI-designs/uipng-1.png', 1200],
    ['uipng-5', 'static/UI-designs/uipng-5.png', 1200],
    ['pro4', 'static/Projects/pro4.png', 720],
    ['work1', 'static/work/work1.jpg', 1100],
    ['community', 'static/community/community.jpg', 800],
    ['profile', 'static/profile.png', 600],
    ['logo11', 'static/logo (11).png', 320],
  ];
  for (const [name, rel, width] of cases) {
    const src = path.join(root, rel);
    const buf = await sharp(src).resize({ width, fit: 'inside' })
      .webp({ quality: 72 }).toBuffer();
    console.log(`${name} @${width} WebP q72:`, (buf.length / 1024).toFixed(1), 'KB');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
