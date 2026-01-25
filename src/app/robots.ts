import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/profile/',
        '/auth/',
        '/login/',
        '/actions/',
        '/bookmarks/',
      ],
    },
    sitemap: 'https://www.coderschain.com/sitemap.xml',
  }
}