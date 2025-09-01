import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Filter, Download, MapPin, Leaf, Award, Mountain, Coffee, Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client"
import heroImage from "@/assets/coffee-bags.jpeg"

interface CatalogItem {
  id: string
  name: string
  slug: string
  region: string
  variety: string
  processing_method: string
  grade: string
  flavor_notes: string[]
  description: string
  image_url?: string
  altitude: string
  farm_details?: string
  is_microlot: boolean
  availability_status: string
  seasonal_notes?: string
}

export default function Catalog() {
  const [items, setItems] = useState<CatalogItem[]>([])
  const [filteredItems, setFilteredItems] = useState<CatalogItem[]>([])
  const [regions, setRegions] = useState<string[]>([])
  const [grades, setGrades] = useState<string[]>([])
  const [processingMethods, setProcessingMethods] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string>('all')
  const [selectedGrade, setSelectedGrade] = useState<string>('all')
  const [selectedProcessing, setSelectedProcessing] = useState<string>('all')

  useEffect(() => {
    fetchCatalogItems()
  }, [])

  useEffect(() => {
    filterItems()
  }, [items, searchTerm, selectedRegion, selectedGrade, selectedProcessing])

  const fetchCatalogItems = async () => {
    try {
      const { data, error } = await supabase
        .from('catalog_items')
        .select('*')
        .eq('availability_status', 'available')
        .order('is_microlot', { ascending: false })
        .order('grade', { ascending: true })

      if (error) throw error

      setItems(data || [])
      
      // Extract unique filter options
      const uniqueRegions = [...new Set(data?.map(item => item.region).filter(Boolean) || [])]
      const uniqueGrades = [...new Set(data?.map(item => item.grade).filter(Boolean) || [])]
      const uniqueProcessing = [...new Set(data?.map(item => item.processing_method).filter(Boolean) || [])]
      
      setRegions(uniqueRegions)
      setGrades(uniqueGrades)
      setProcessingMethods(uniqueProcessing)
    } catch (error) {
      console.error('Error fetching catalog items:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterItems = () => {
    let filtered = items

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.flavor_notes.some(note => note.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.grade.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by region
    if (selectedRegion && selectedRegion !== 'all') {
      filtered = filtered.filter(item => item.region === selectedRegion)
    }

    // Filter by grade
    if (selectedGrade && selectedGrade !== 'all') {
      filtered = filtered.filter(item => item.grade === selectedGrade)
    }

    // Filter by processing method
    if (selectedProcessing && selectedProcessing !== 'all') {
      filtered = filtered.filter(item => item.processing_method === selectedProcessing)
    }

    setFilteredItems(filtered)
  }

  const microlots = filteredItems.filter(item => item.is_microlot)
  const regularItems = filteredItems.filter(item => !item.is_microlot)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Skeleton className="h-16 w-96 mx-auto mb-6" />
              <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video" />
                  <CardHeader>
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-20" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-charcoal/70"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-warm-cream">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Coffee <span className="text-coffee-gold">Catalog</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore Kenya's finest green coffees, available by grade, variety, and region
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Jowam Coffee Traders LTD curates premium Kenyan coffee directly from source. 
              Our catalog provides detailed information on varieties, processing methods, grades, 
              and seasonal availability to help you make informed purchasing decisions.
            </p>
            <Link to="/request-samples">
              <Button size="lg" className="mr-4">
                Request Samples
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Full Catalog (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search by name, flavor..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Grade</label>
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Grades" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Grades</SelectItem>
                    {grades.map(grade => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Processing</label>
                <Select value={selectedProcessing} onValueChange={setSelectedProcessing}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Methods" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Methods</SelectItem>
                    {processingMethods.map(method => (
                      <SelectItem key={method} value={method}>{method}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">
                  {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Microlots Section */}
      {microlots.length > 0 && (
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Sparkles className="h-8 w-8 text-coffee-gold" />
                  Specialty Microlots
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Rare microlots and seasonal lots from single estates, carefully selected 
                  for exceptional cup quality and unique terroir expression.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {microlots.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group border-coffee-gold/20">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-coffee-gold/20 to-primary/20 flex items-center justify-center">
                      <Coffee className="h-16 w-16 text-coffee-gold" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant="secondary" className="bg-coffee-gold text-charcoal">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Microlot
                        </Badge>
                        <Badge variant="outline">{item.grade}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.region}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mountain className="h-3 w-3" />
                            {item.altitude}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium">Variety: </span>
                          <span className="text-sm text-muted-foreground">{item.variety}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Processing: </span>
                          <span className="text-sm text-muted-foreground">{item.processing_method}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Flavor Notes: </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.flavor_notes.slice(0, 3).map((note) => (
                              <Badge key={note} variant="outline" className="text-xs">
                                {note}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {item.seasonal_notes && (
                          <div className="text-xs text-muted-foreground">
                            <strong>Availability:</strong> {item.seasonal_notes}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Available in limited quantities - Pre-order recommended
                </p>
                <Link to="/contact">
                  <Button>Contact Us for Microlots</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Coffee Offerings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Coffee Offerings
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <Coffee className="h-16 w-16 text-primary" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="secondary">{item.grade}</Badge>
                      <Badge variant="outline">{item.processing_method}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mountain className="h-3 w-3" />
                          {item.altitude}
                        </span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium">Variety: </span>
                        <span className="text-sm text-muted-foreground">{item.variety}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Flavor Notes: </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.flavor_notes.slice(0, 3).map((note) => (
                            <Badge key={note} variant="outline" className="text-xs">
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {item.seasonal_notes && (
                        <div className="text-xs text-muted-foreground">
                          <strong>Availability:</strong> {item.seasonal_notes}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No items found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedRegion('all')
                    setSelectedGrade('all')
                    setSelectedProcessing('all')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Place an Order?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our team for pricing, availability, and to request samples of any coffee in our catalog
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-samples">
                <Button size="lg">
                  Request Samples
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales Team
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Catalog PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}