import { MetadataRoute } from 'next'
import { createStaticClient } from '@/utils/supabase/server'
import { caseStudies } from '@/components/companySections/CaseStudy/data/caseStudies'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.coderschain.com';
  const supabase = await createStaticClient();

  // Fetch blogs
  const { data: blogs } = await supabase
    .from('posts')
    .select('slug, updated_at')
    .eq('published', true);

  const blogRoutes = (blogs || []).map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Fetch showcase projects
  const showcaseRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/showcase/${study.slug}`,
    lastModified: new Date(study.completionDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const staticRoutes = [
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
    '/blogs',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/services' || route === '/showcase' || route === '/blogs') ? 'daily' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...showcaseRoutes];
}