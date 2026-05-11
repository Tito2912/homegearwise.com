/* eslint-disable no-console */
'use strict';

/**
 * Patches <html lang="en"> in Next.js static export output.
 * Replaces the bash+perl postbuild.sh script — works on all platforms (Windows, macOS, Linux).
 */

const fs = require('node:fs');
const path = require('node:path');

const OUT_DIR = path.resolve(__dirname, '..', 'out');

function patchLang(filePath) {
  const rel = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  let lang = 'en';
  if (rel.startsWith('fr/') || rel === 'fr') lang = 'fr';
  else if (rel.startsWith('es/') || rel === 'es') lang = 'es';
  else if (rel.startsWith('de/') || rel === 'de') lang = 'de';

  if (lang === 'en') return; // already correct

  const content = fs.readFileSync(filePath, 'utf8');
  const patched = content.replace(/(<html\b[^>]*\blang=")[^"]*(")/i, `$1${lang}$2`);
  if (patched !== content) fs.writeFileSync(filePath, patched, 'utf8');
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) patchLang(full);
  }
}

walk(OUT_DIR);
console.log('postbuild: patched <html lang> in exported HTML');
