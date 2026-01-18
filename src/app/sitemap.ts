import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.coderschain.com';

  const routes = [
    '',
    '/about-us',
    '/contact',
    '/mentorship',
    '/services',
    '/services/custom-website-development',
    '/services/mobile-app-development',
    '/services/ui-ux-design',
    '/services/mvp-development',
    '/services/full-stack-development',
    '/services/ar-vr-development',
    '/services/ai-agent-development',
    '/services/landing-page-development',
    '/showcase',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}