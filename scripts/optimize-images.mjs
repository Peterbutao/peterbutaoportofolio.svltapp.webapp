import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const targets = [
  // UI designs (displayed ~340px cards, carousel up to ~800px wide, detail full width)
  { src: 'static/UI-designs/uipng-1.png', width: 1200 },
  { src: 'static/UI-designs/uipng-2.png', width: 1200 },
  { src: 'static/UI-designs/uipng-3.png', width: 1200 },
  { src: 'static/UI-designs/uipng-4.png', width: 1200 },
  { src: 'static/UI-designs/uipng-5.png', width: 1200 },
  { src: 'static/UI-designs/uipng-6.png', width: 1200 },
  // Project thumbnails (16:9 cards ~360px)
  { src: 'static/Projects/pro.png', width: 720 },
  { src: 'static/Projects/pro1.png', width: 720 },
  { src: 'static/Projects/pro2.png', width: 720 },
  { src: 'static/Projects/pro3.png', width: 720 },
  { src: 'static/Projects/pro4.png', width: 720 },
  { src: 'static/Projects/pro5.png', width: 720 },
  { src: 'static/Projects/pro6.png', width: 720 },
  { src: 'static/Projects/pro7.png', width: 720 },
  { src: 'static/Projects/pro8.png', width: 720 },
  { src: 'static/Projects/pro9.png', width: 720 },
  // Work experience images (180px tall in half-width cards)
  { src: 'static/work/work1.jpg', width: 1100 },
  { src: 'static/work/work2.jpg', width: 1100 },
  // Community image (full-width card, 160px tall)
  { src: 'static/community/community.jpg', width: 800 },
  // Hero profile (300px circle)
  { src: 'static/profile.png', width: 600 },
  // Organisation logos (80x52 tiles) + consultant marquee logos
  { src: 'static/logo.png', width: 240 },
  { src: 'static/logo (1).png', width: 240 },
  { src: 'static/logo (2).png', width: 240 },
  { src: 'static/logo (3).png', width: 240 },
  { src: 'static/logo (4).png', width: 240 },
  { src: 'static/logo (5).png', width: 240 },
  { src: 'static/logo (6).png', width: 240 },
  { src: 'static/logo (7).png', width: 240 },
  { src: 'static/logo (8).png', width: 240 },
  { src: 'static/logo (9).png', width: 240 },
  { src: 'static/logo (10).png', width: 240 },
  { src: 'static/logo (11).png', width: 240 },
  { src: 'static/logo (12).png', width: 240 },
];

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  const kept = [];

  for (const t of targets) {
    const srcPath = path.join(root, t.src);
    if (!fs.existsSync(srcPath)) {
      console.log(`SKIP (missing): ${t.src}`);
      continue;
    }
    const before = fs.statSync(srcPath).size;
    const outPath = srcPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const out = await sharp(srcPath)
      .resize({ width: t.width, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 72, alphaQuality: 90 })
      .toBuffer();
    fs.writeFileSync(outPath, out);
    const after = out.length;
    totalBefore += before;
    totalAfter += after;
    kept.push(outPath.replace(root + path.sep, ''));
    console.log(
      `${t.src.padEnd(34)} ${(before / 1024).toFixed(0).padStart(6)}KB -> ${(after / 1024).toFixed(0).padStart(5)}KB  (${(100 - (after / before) * 100).toFixed(0)}% saved)`
    );
  }

  console.log('\nTotal:', (totalBefore / 1024).toFixed(0) + 'KB', '->', (totalAfter / 1024).toFixed(0) + 'KB', `(${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% saved)`);
  console.log('\nGenerated .webp files (delete originals manually once verified):');
  for (const k of kept) console.log(' ', k);
}

main().catch((e) => { console.error(e); process.exit(1); });
