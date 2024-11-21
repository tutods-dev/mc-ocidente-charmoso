import type { APIEvent } from '@solidjs/start/server';

export function GET({ request }: APIEvent) {
  const baseUrl = new URL(request.url).origin;

  const txtParts = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${baseUrl}/sitemap.xml`,
    '# Certain social media sites are whitelisted to allow crawlers to access page markup when links to /images are shared.',
    'User-agent: Twitterbot',
    'Allow: /',
    'User-agent: facebookexternalhit',
    'Allow: /',
  ];

  return new Response(txtParts.join('\n').trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
