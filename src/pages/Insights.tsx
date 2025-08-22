import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag, ArrowRight, Coffee, TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-contact.jpg";
import coffeeCherry from "@/assets/coffee-cherries.jpg";
import coffeeDrying from "@/assets/coffee-drying.jpg";
import qualityControl from "@/assets/quality-control.jpg";

const categories = [
  { name: "Origins & Regions", count: 12, color: "bg-kenyan-green" },
  { name: "Market & Trade", count: 8, color: "bg-coffee-brown" },
  { name: "Quality & Process", count: 15, color: "bg-accent-gold" },
  { name: "Sustainability", count: 6, color: "bg-neutral-600" }
];

const featuredArticles = [
  {
    title: "Understanding Kenya's Coffee Grading System: AA, AB, and PB Explained",
    excerpt: "A comprehensive guide to Kenya's unique coffee grading system and what each grade means for flavor profiles and export quality.",
    image: qualityControl,
    category: "Quality & Process",
    readTime: "8 min read",
    publishedAt: "2024-01-15",
    featured: true
  },
  {
    title: "The Nyeri Advantage: Why This Region Produces Kenya's Most Sought-After Coffee",
    excerpt: "Exploring the unique terroir, altitude, and processing methods that make Nyeri coffee a favorite among specialty roasters worldwide.",
    image: coffeeDrying,
    category: "Origins & Regions",
    readTime: "6 min read",
    publishedAt: "2024-01-10",
    featured: true
  },
  {
    title: "Sustainable Sourcing: How Direct Trade Relationships Benefit Kenyan Farmers",
    excerpt: "An in-depth look at how direct trade partnerships create value for both farmers and international buyers in the coffee supply chain.",
    image: coffeeCherry,
    category: "Sustainability",
    readTime: "10 min read",
    publishedAt: "2024-01-05",
    featured: true
  }
];

const recentArticles = [
  {
    title: "2024 Harvest Report: Quality Outlook from Kenya's Coffee Regions",
    excerpt: "Early assessments from this year's harvest seasons across Nyeri, Kirinyaga, and other key growing regions.",
    category: "Market & Trade",
    readTime: "5 min read",
    publishedAt: "2024-01-20"
  },
  {
    title: "Processing Innovations: How Kenyan Cooperatives Are Improving Quality",
    excerpt: "New fermentation and drying techniques being adopted by forward-thinking cooperatives.",
    category: "Quality & Process",
    readTime: "7 min read",
    publishedAt: "2024-01-18"
  },
  {
    title: "Climate Adaptation in Kenyan Coffee Farming",
    excerpt: "Strategies being implemented to help farmers cope with changing weather patterns and maintain quality.",
    category: "Sustainability",
    readTime: "9 min read",
    publishedAt: "2024-01-12"
  },
  {
    title: "Export Documentation Guide: Navigating Kenya's Coffee Export Requirements",
    excerpt: "A step-by-step guide to the documentation required for coffee exports from Kenya.",
    category: "Market & Trade",
    readTime: "6 min read",
    publishedAt: "2024-01-08"
  },
  {
    title: "Meru Coffee: The Hidden Gem of Mount Kenya's Eastern Slopes",
    excerpt: "Discovering the unique characteristics of coffee grown in the lesser-known Meru region.",
    category: "Origins & Regions",
    readTime: "8 min read",
    publishedAt: "2024-01-03"
  },
  {
    title: "Understanding SL28 and SL34: Kenya's Signature Coffee Varietals",
    excerpt: "The history and characteristics of the varietals that define Kenyan coffee's unique flavor profile.",
    category: "Quality & Process",
    readTime: "7 min read",
    publishedAt: "2023-12-28"
  }
];

export default function Insights() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero text-warm-cream overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow-warm">
            Coffee Insights
            <span className="block text-accent-gold">& Industry Knowledge</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest insights on Kenyan coffee, market trends, 
            processing innovations, and industry best practices.
          </p>
          <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green">
            Subscribe to Updates
          </Button>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-coffee-brown mb-2">{category.name}</h3>
                  <p className="text-neutral-600">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              In-depth analysis and insights on the topics that matter most to coffee professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-kenyan-green text-white">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-coffee-brown mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Button variant="ghost" size="sm" className="text-kenyan-green hover:text-kenyan-green/80">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
                Recent Articles
              </h2>
              <p className="text-lg text-neutral-600">
                Stay up to date with the latest industry insights and developments
              </p>
            </div>
            <Button variant="outline" className="hidden md:block">
              View All Articles
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-kenyan-green text-kenyan-green">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-coffee-brown mb-3 group-hover:text-kenyan-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-kenyan-green transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Button variant="outline">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-kenyan-green text-warm-cream">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-warm-cream/90 mb-8">
            Subscribe to our newsletter for the latest coffee insights, market updates, 
            and industry analysis delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-gold"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-warm-cream/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-warm-cream">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Need Specific Information?
          </h2>
          <p className="text-xl text-warm-cream/90 mb-8">
            Can't find what you're looking for? Our coffee experts are here to help 
            with your specific questions about Kenyan coffee, export processes, or market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-charcoal" asChild>
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/request-samples">Request Market Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}