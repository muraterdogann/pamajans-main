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
    if (entry.isDirectory()) {
      routes.push(...getAllRoutes(path.join(dir, entry.name), `${basePath}/${entry.name}`));
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      routes.push(basePath);
    }
  }

  return routes;
}

export async function GET() {
  const routes = getAllRoutes();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        const lastmod = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        return `
          <url>
            <loc>${BASE_URL}${route}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
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
