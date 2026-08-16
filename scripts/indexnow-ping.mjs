// Ping IndexNow (Bing/Yandex/Naver) avec toutes les URLs du sitemap après build.
// Ne s'exécute qu'en production Netlify (CONTEXT=production) pour éviter les pings locaux/preview.
import { readFileSync } from 'node:fs';

const KEY = '25d0629461a94d8eb2ae38ee0e7039e7';
const HOST = 'tonyandson.be';

if (process.env.CONTEXT !== 'production') {
  console.log(`[indexnow] skip (CONTEXT=${process.env.CONTEXT ?? 'local'})`);
  process.exit(0);
}

let urls;
try {
  const xml = readFileSync(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} catch (e) {
  console.warn('[indexnow] sitemap introuvable, ping ignoré:', e.message);
  process.exit(0);
}

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
  });
  console.log(`[indexnow] ${urls.length} URLs soumises — HTTP ${res.status}`);
} catch (e) {
  console.warn('[indexnow] ping échoué (non bloquant):', e.message);
}
