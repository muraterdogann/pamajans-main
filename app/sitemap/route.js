// app/sitemap.xml/route.js
import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import { NextResponse } from 'next/server';

const BASE_URL = 'https://pamajans.com';

function getAllRoutes(dir = 'app', basePath = '') {
  const entries = fs.readdirSync(path.join(process.cwd(), dir), { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...getAllRoutes(fullPath, `${basePath}/${entry.name}`));
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      routes.push(basePath);
    }
  }

  return routes;
}

// Statik rotaları tanımlayın
const staticRoutes = [
  { loc: '/', lastmod: '2024-11-02T00:47:31+00:00', priority: 1.0 },
  { loc: '/hakkimizda', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/meta-reklam-yonetimi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/google-reklam-yonetimi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/seo-yonetimi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/e-ticaret-web-site-kurulumu', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/kurumsal-web-site-kurulumu', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/e-ihracat-danismanlik', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/erp-crm-kurulumu', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/pazaryeri-giris-destegi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/hizmetlerimiz/e-ticaret-ve-reklam-egitimi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/blog', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/iletisim', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/kvkk', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.8 },
  { loc: '/blog/dijital-pazarlama-sozlugu-en-cok-kullanilan-terimler', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/performans-pazarlama-nedir-ve-neden-onemlidir', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/e-ticaret-danismanligi-nedir-neden-gereklidir', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/eticaret-web-sitesi-kurulumu', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/reklam-hesabim-kapatildi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/tiktok-reklam-ajansi', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/dijital-pazarlama-nedir', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
  { loc: '/blog/shopify-nedir', lastmod: '2024-11-02T00:47:31+00:00', priority: 0.64 },
];

export async function GET() {
  const dynamicRoutes = getAllRoutes().map((route) => ({
    loc: route,
    lastmod: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    priority: 0.7,
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map((page) => {
        return `
          <url>
            <loc>${BASE_URL}${page.loc}</loc>
            <lastmod>${page.lastmod}</lastmod>
            <changefreq>daily</changefreq>
            <priority>${page.priority}</priority>
          </url>
        `;
      })
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
