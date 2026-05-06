import type { MetadataRoute } from 'next'
import { createSupabaseServerClient } from '@/integrations/supabase/server'
import { regions } from '@/data/origins'

const BASE_URL = 'https://jowamcoffee.co.ke'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/our-coffee`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/origins`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/sustainability`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/catalog`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/request-samples`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const originRoutes: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${BASE_URL}/origins/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  let articleRoutes: MetadataRoute.Sitemap = []
  try {
    const supabase = await createSupabaseServerClient()
    const { data: articles } = await supabase
      .from('articles')
      .select('slug, updated_at')
      .eq('status', 'published')

    if (articles) {
      articleRoutes = (articles as { slug: string; updated_at: string | null }[]).map((article) => ({
        url: `${BASE_URL}/insights/${article.slug}`,
        lastModified: new Date(article.updated_at ?? new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch {
    // Supabase unavailable at build time — article URLs omitted
  }

  return [...staticRoutes, ...originRoutes, ...articleRoutes]
}
