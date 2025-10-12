import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/integrations/supabase/client"
import { FileText, Users, TrendingUp, Eye, Calendar, Coffee } from 'lucide-react'

interface DashboardStats {
  totalArticles: number
  publishedArticles: number
  draftArticles: number
  totalCategories: number
  recentArticles: Array<{
    id: string
    title: string
    status: string
    published_at: string
    category: string
  }>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    totalCategories: 0,
    recentArticles: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      // Fetch article stats
      const { data: articles, error } = await supabase
        .from('articles')
        .select('id, title, status, published_at, category')
        .order('created_at', { ascending: false })

      if (error) throw error

      const totalArticles = articles?.length || 0
      const publishedArticles = articles?.filter(a => a.status === 'published').length || 0
      const draftArticles = articles?.filter(a => a.status === 'draft').length || 0
      const categories = new Set(articles?.map(a => a.category).filter(Boolean))
      const totalCategories = categories.size

      setStats({
        totalArticles,
        publishedArticles,
        draftArticles,
        totalCategories,
        recentArticles: articles?.slice(0, 5) || []
      })
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 bg-muted rounded w-20 animate-pulse"></div>
                <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted rounded w-16 animate-pulse"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to the Jowam Coffee admin dashboard
          </p>
        </div>
        <Coffee className="h-8 w-8 text-primary" />
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalArticles}</div>
            <p className="text-xs text-muted-foreground">
              All articles in the system
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.publishedArticles}</div>
            <p className="text-xs text-muted-foreground">
              Live on the website
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.draftArticles}</div>
            <p className="text-xs text-muted-foreground">
              Unpublished articles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCategories}</div>
            <p className="text-xs text-muted-foreground">
              Unique categories
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Articles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Articles
          </CardTitle>
          <CardDescription>
            Your latest articles and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.recentArticles.map((article) => (
              <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-1">{article.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.published_at && (
                      <span className="text-xs text-muted-foreground">
                        {formatDate(article.published_at)}
                      </span>
                    )}
                  </div>
                </div>
                <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>
                  {article.status}
                </Badge>
              </div>
            ))}
            
            {stats.recentArticles.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No articles found. Create your first article to get started!
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}