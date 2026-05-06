import type { Metadata } from 'next'
import { createSupabaseServerClient } from '@/integrations/supabase/server'
import ArticleDetail from '@/views/ArticleDetail'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createSupabaseServerClient()

  const { data } = await supabase
    .from('articles')
    .select('title, excerpt')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (!data) {
    return { title: 'Article Not Found - Jowam Coffee Traders' }
  }

  const article = data as { title: string; excerpt: string | null }

  return {
    title: `${article.title} | Jowam Coffee Insights`,
    description: article.excerpt || article.title,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: `${article.title} | Jowam Coffee Insights`,
      description: article.excerpt || article.title,
    },
  }
}

export default ArticleDetail
