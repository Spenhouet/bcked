// https://www.sitemaps.org/protocol.html
import { base } from '$app/paths';
import { compareDates } from '$lib/utils/string-formatting';
import { readAssets } from '../(api)/assets.json/+server';

export const prerender = true;

export async function GET() {
  const assets = readAssets()
  const sortedAssets = Object.entries(assets)
    .map(([id, asset]) => ({ ...asset, path: `${base}/assets/${id}` }))
    .sort((assetA, assetB) => compareDates(assetA.backing[0].timestamp, assetB.backing[0].timestamp))

  const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${base}</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${sortedAssets[0].path}</loc>
        <lastmod>${sortedAssets[0].backing[0].timestamp}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      ${sortedAssets.map((asset) => `
      <url>
        <loc>${asset.path}</loc>
        <lastmod>${asset.backing[0].timestamp}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      `).join('')}
    </urlset>
    `;

  return new Response(
    xml.trim(),
    {
      headers: {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml'
      }
    }
  );
}