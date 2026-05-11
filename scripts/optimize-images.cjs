// @ts-check
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const CACHE_FILE = path.join(__dirname, '..', '.image-cache.json');
const WEBP_QUALITY = 75;

function sha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex').slice(0, 16);
}

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.warn('[optimize-images] sharp not installed — skipping image optimization');
    return;
  }

  const cache = fs.existsSync(CACHE_FILE)
    ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'))
    : {};

  const jpegFiles = fs.readdirSync(IMAGES_DIR)
    .filter((f) => /\.(jpg|jpeg)$/i.test(f))
    .map((f) => path.join(IMAGES_DIR, f));

  let generatedCount = 0;
  const newCache = {};

  for (const file of jpegFiles) {
    const name = path.basename(file);
    const buf = fs.readFileSync(file);
    const hash = sha256(buf);

    const webpName = name.replace(/\.(jpg|jpeg)$/i, '.webp');
    const webpFile = path.join(IMAGES_DIR, webpName);

    // Skip if source unchanged and WebP already exists
    if (cache[name] === hash && fs.existsSync(webpFile)) {
      newCache[name] = hash;
      continue;
    }

    const beforeKb = Math.round(buf.length / 1024);
    const webpBuf = await sharp(buf).webp({ quality: WEBP_QUALITY }).toBuffer();
    const afterKb = Math.round(webpBuf.length / 1024);

    fs.writeFileSync(webpFile, webpBuf);
    newCache[name] = hash;
    generatedCount++;
    console.log(`  ✓ ${webpName}: ${beforeKb}KB → ${afterKb}KB (-${Math.round((1 - webpBuf.length / buf.length) * 100)}%)`);
  }

  fs.writeFileSync(CACHE_FILE, JSON.stringify(newCache, null, 2));

  if (generatedCount > 0) {
    console.log(`\n[optimize-images] Generated ${generatedCount} WebP file(s)`);
  } else {
    console.log('[optimize-images] All WebP files up to date — nothing to do');
  }
}

main().catch((err) => {
  console.error('[optimize-images] Error:', err.message);
  process.exit(1);
});
