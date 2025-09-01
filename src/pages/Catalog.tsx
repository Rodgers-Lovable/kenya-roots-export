import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { supabase } from "@/integrations/supabase/client"
import { Search, Filter, Download, Star, MapPin, Calendar, Coffee } from 'lucide-react'
import heroImage from "@/assets/jowam-bags-hero.jpg"
import coffeeBeansImage from "@/assets/coffee-bags.jpeg"
import cupping from "@/assets/cupping.jpeg"

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
  seasonal_notes: string
  price_per_kg?: number
  minimum_order_kg?: number
  created_at: string
  updated_at: string
}

export default function Catalog() {
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([])
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
  }, [catalogItems, searchTerm, selectedRegion, selectedGrade, selectedProcessing])

  const fetchCatalogItems = async () => {
    try {
      const { data, error } = await supabase
        .from('catalog_items')
        .select('*')
        .eq('availability_status', 'available')
        .order('is_microlot', { ascending: false })
        .order('grade', { ascending: true })

      if (error) throw error

      setCatalogItems(data || [])
      
      // Extract unique values for filters
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
    let filtered = catalogItems

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.flavor_notes?.some(note => note.toLowerCase().includes(searchTerm.toLowerCase())) ||
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
  const regularCoffees = filteredItems.filter(item => !item.is_microlot)

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
                    <Skeleton className="h-4 w-3/4" />
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-cream mb-6">
              Our Coffee <span className="text-coffee-gold">Catalog</span>
            </h1>
            <p className="text-xl text-warm-cream/90 mb-8 max-w-2xl mx-auto">
              Explore Kenya's finest green coffees, available by grade, variety, and region
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Jowam Coffee Traders LTD curates premium Kenyan coffee from the finest estates and cooperatives. 
              Our catalog provides detailed information on varieties, processing methods, grades, and seasonal 
              availability to help you find the perfect coffee for your roasting needs.
            </p>
            <Link to="/request-samples">
              <Button size="lg" className="bg-coffee-green hover:bg-coffee-green/90">
                Request Samples
              </Button>
            </Link>
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
                    placeholder="Search coffees..."
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
                    <SelectValue placeholder="All Processing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Processing</SelectItem>
                    {processingMethods.map(method => (
                      <SelectItem key={method} value={method}>{method}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">
                  {filteredItems.length} coffee{filteredItems.length !== 1 ? 's' : ''} found
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
                <h2 className="text-3xl font-bold mb-4">Specialty Microlots</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Exclusive, small-batch coffees from exceptional farms and cooperatives. 
                  These rare offerings showcase unique terroir and meticulous processing.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microlots.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-coffee-gold/20 hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={item.image_url || cupping} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-coffee-gold text-charcoal font-semibold">
                          <Star className="h-3 w-3 mr-1" />
                          Microlot
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="border-coffee-green text-coffee-green">
                          Grade {item.grade}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.region}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.variety} • {item.processing_method}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Flavor Notes</h4>
                          <div className="flex flex-wrap gap-1">
                            {item.flavor_notes?.slice(0, 3).map(note => (
                              <Badge key={note} variant="secondary" className="text-xs">
                                {note}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <Coffee className="h-3 w-3" />
                            Altitude: {item.altitude}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.seasonal_notes}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">Available in limited quantities</p>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us for Availability
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Coffee Offerings Grid */}
      {regularCoffees.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Coffee Offerings</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our core selection of premium Kenyan coffees, available in consistent quantities 
                  throughout the season.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularCoffees.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image_url || coffeeBeansImage} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="border-coffee-green text-coffee-green">
                          Grade {item.grade}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.region}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.variety} • {item.processing_method}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Flavor Notes</h4>
                          <div className="flex flex-wrap gap-1">
                            {item.flavor_notes?.slice(0, 3).map(note => (
                              <Badge key={note} variant="secondary" className="text-xs">
                                {note}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <Coffee className="h-3 w-3" />
                            Altitude: {item.altitude}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.seasonal_notes}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No coffees found</h3>
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
          </div>
        </section>
      )}

      {/* Download Catalog Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Download Our Complete Catalog</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get our comprehensive PDF catalog with detailed specifications, pricing, 
              and availability information for all our coffee offerings.
            </p>
            <Button size="lg" className="bg-coffee-green hover:bg-coffee-green/90">
              <Download className="h-5 w-5 mr-2" />
              Download Full Catalog (PDF)
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Updated monthly with seasonal availability and pricing
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Source Premium Kenyan Coffee?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our team to discuss your specific requirements and arrange sample shipments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-samples">
                <Button size="lg" className="bg-coffee-green hover:bg-coffee-green/90">
                  Request Samples
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}