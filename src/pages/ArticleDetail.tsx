import React, { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Clock, ArrowLeft, Share2, User } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client"

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string
  category: string
  tags: string[]
  author: string
  published_at: string
  created_at: string
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (slug) {
      fetchArticle(slug)
    }
  }, [slug])

  const fetchArticle = async (articleSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', articleSlug)
        .eq('status', 'published')
        .maybeSingle()

      if (error) throw error

      if (!data) {
        setNotFound(true)
      } else {
        setArticle(data)
        // Update page title and meta description for SEO
        document.title = `${data.title} | Jowam Coffee Insights`
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', data.excerpt || data.title)
        } else {
          const meta = document.createElement('meta')
          meta.name = 'description'
          meta.content = data.excerpt || data.title
          document.head.appendChild(meta)
        }
      }
    } catch (error) {
      console.error('Error fetching article:', error)
      setNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content?.split(' ').length || 0
    return Math.ceil(wordCount / wordsPerMinute)
  }

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const formatContent = (content: string) => {
    // Convert basic markdown-like formatting to HTML
    return content
      .replace(/## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="h-64 w-full mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !article) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/insights">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Insights
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Cover Image */}
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={article.cover_image || '/api/placeholder/800/450'} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Badge className="mb-2">{article.category}</Badge>
            {article.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="mb-2">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>
          
          {article.excerpt && (
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.excerpt}
            </p>
          )}
          
          <div className="flex items-center gap-6 text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.published_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{calculateReadTime(article.content)} min read</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: `<p class="mb-4">${formatContent(article.content)}</p>` 
            }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.tags?.map(tag => (
                <Badge key={tag} variant="secondary">#{tag}</Badge>
              ))}
            </div>
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>
        </footer>
      </article>

      {/* Related Articles CTA */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Explore More Insights</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover more articles about Kenya's coffee industry
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/insights">
                <Button size="lg">
                  View All Articles
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}