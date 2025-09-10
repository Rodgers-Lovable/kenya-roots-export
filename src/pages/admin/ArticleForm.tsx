import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { supabase } from "@/integrations/supabase/client"
import { Save, ArrowLeft, Plus, X, Eye } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

interface ArticleFormData {
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string
  category: string
  tags: string[]
  author: string
  status: 'draft' | 'published'
}

export default function ArticleForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = !!id
  const { toast } = useToast()

  const [formData, setFormData] = useState<ArticleFormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    category: '',
    tags: [],
    author: '',
    status: 'draft'
  })
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(isEditing)
  const [newTag, setNewTag] = useState('')
  const [error, setError] = useState<string | null>(null)

  const categories = [
    'quality', 'processing', 'sustainability', 'education', 'market', 
    'climate', 'brewing', 'supply chain', 'social impact'
  ]

  useEffect(() => {
    if (isEditing) {
      fetchArticle()
    }
  }, [id, isEditing])

  useEffect(() => {
    if (formData.title && !isEditing) {
      generateSlug()
    }
  }, [formData.title])

  const fetchArticle = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      setFormData({
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        cover_image: data.cover_image || '',
        category: data.category || '',
        tags: data.tags || [],
        author: data.author || '',
        status: (data.status as 'draft' | 'published') || 'draft'
      })
    } catch (error) {
      console.error('Error fetching article:', error)
      toast({
        title: "Error",
        description: "Failed to fetch article",
        variant: "destructive",
      })
      navigate('/admin/articles')
    } finally {
      setInitialLoading(false)
    }
  }

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    setFormData(prev => ({ ...prev, slug }))
  }

  const handleInputChange = (field: keyof ArticleFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError(null)
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError('Title is required')
      return false
    }
    if (!formData.slug.trim()) {
      setError('Slug is required')
      return false
    }
    if (!formData.excerpt.trim()) {
      setError('Excerpt is required')
      return false
    }
    if (!formData.content.trim()) {
      setError('Content is required')
      return false
    }
    if (!formData.category) {
      setError('Category is required')
      return false
    }
    if (!formData.author.trim()) {
      setError('Author is required')
      return false
    }
    return true
  }

  const handleSave = async (status: 'draft' | 'published') => {
    if (!validateForm()) return

    setLoading(true)
    
    try {
      const articleData = {
        ...formData,
        status,
        published_at: status === 'published' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      }

      if (isEditing) {
        const { error } = await supabase
          .from('articles')
          .update(articleData)
          .eq('id', id)

        if (error) throw error

        toast({
          title: "Success",
          description: `Article ${status === 'published' ? 'published' : 'saved as draft'} successfully`,
        })
      } else {
        // Check if slug already exists
        const { data: existingArticle } = await supabase
          .from('articles')
          .select('id')
          .eq('slug', formData.slug)
          .single()

        if (existingArticle) {
          setError('An article with this slug already exists')
          setLoading(false)
          return
        }

        const { error } = await supabase
          .from('articles')
          .insert([{ ...articleData, created_at: new Date().toISOString() }])

        if (error) throw error

        toast({
          title: "Success",
          description: `Article ${status === 'published' ? 'published' : 'created as draft'} successfully`,
        })
      }

      navigate('/admin/articles')
    } catch (error) {
      console.error('Error saving article:', error)
      setError('Failed to save article. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (initialLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-8 bg-muted rounded w-8 animate-pulse"></div>
          <div className="h-8 bg-muted rounded w-48 animate-pulse"></div>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-muted rounded w-24 animate-pulse"></div>
                <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/admin/articles')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Edit Article' : 'Create New Article'}
          </h1>
          <p className="text-muted-foreground">
            {isEditing ? 'Update your article content' : 'Write a new coffee industry article'}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Article' : 'Article Details'}</CardTitle>
          <CardDescription>
            Fill in the article information and content below
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Enter article title..."
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              placeholder="article-url-slug"
              value={formData.slug}
              onChange={(e) => handleInputChange('slug', e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              URL: /insights/{formData.slug || 'your-slug-here'}
            </p>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea
              id="excerpt"
              placeholder="Brief description of the article..."
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              rows={3}
            />
            <p className="text-sm text-muted-foreground">
              {formData.excerpt.length}/200 characters
            </p>
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label htmlFor="cover_image">Cover Image URL</Label>
            <Input
              id="cover_image"
              placeholder="https://images.unsplash.com/..."
              value={formData.cover_image}
              onChange={(e) => handleInputChange('cover_image', e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Use high-quality images from Unsplash for best results
            </p>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category *</Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" variant="outline" onClick={addTag}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-destructive" 
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Author */}
          <div className="space-y-2">
            <Label htmlFor="author">Author *</Label>
            <Input
              id="author"
              placeholder="Author name..."
              value={formData.author}
              onChange={(e) => handleInputChange('author', e.target.value)}
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              placeholder="Write your article content in Markdown format..."
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              rows={20}
              className="font-mono"
            />
            <p className="text-sm text-muted-foreground">
              Supports Markdown formatting. Use # for headings, ** for bold, * for italic, etc.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-6 border-t">
            <div className="flex gap-2">
              {formData.slug && (
                <Button variant="outline" asChild>
                  <a href={`/insights/${formData.slug}`} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </a>
                </Button>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => handleSave('draft')}
                disabled={loading}
              >
                <Save className="h-4 w-4 mr-2" />
                Save as Draft
              </Button>
              <Button
                onClick={() => handleSave('published')}
                disabled={loading}
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? 'Publishing...' : 'Publish'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}