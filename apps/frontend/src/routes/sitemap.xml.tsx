import type { APIEvent } from '@solidjs/start/server';
import { getPaginatedProjects } from '~/cms/services';
import { DEFAULT_PAGINATION_OFFSET } from '~/shared/constants';

export async function GET({ request }: APIEvent) {
  const baseUrl = new URL(request.url).origin;
  const projects = await getPaginatedProjects(1, 10000);

  const routes = [
    '/',
    '/sobre-nos',
    '/projetos',
    ...Array.from(
      { length: Math.ceil(projects.total / DEFAULT_PAGINATION_OFFSET) },
      (_, index) => index + 1,
    ).map((page) => `/projetos?page=${page}`),
    ...projects.data.map((project) => `/projetos/${project.slug}`),
    '/contactos',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    `,
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}