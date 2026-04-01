import type { Metadata } from 'next'
import { supabase } from '@/integrations/supabase/client'
import ArticleDetail from '@/pages/ArticleDetail'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const { data } = await supabase
    .from('articles')
    .select('title, excerpt')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (!data) {
    return { title: 'Article Not Found - Jowam Coffee Traders' }
  }

  return {
    title: `${data.title} | Jowam Coffee Insights`,
    description: data.excerpt || data.title,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: `${data.title} | Jowam Coffee Insights`,
      description: data.excerpt || data.title,
    },
  }
}

export default ArticleDetail
