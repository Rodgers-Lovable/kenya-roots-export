import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, DollarSign, Sprout, Heart, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-process.jpg";
import coffeeDrying from "@/assets/coffee-drying.jpg";
import coffeeCherry from "@/assets/coffee-cherries.jpg";
import qualityControl from "@/assets/quality-control.jpg";

const sustainabilityPillars = [
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Ensuring farmers receive premium prices for their high-quality coffee",
    details: "We pay above-market rates and provide price premiums for quality improvements, ensuring farmers can invest in their families and farms."
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description: "Supporting cooperative development and farmer education",
    details: "Through our partnership programs, we help farmers form strong cooperatives and provide training on sustainable farming practices."
  },
  {
    icon: Sprout,
    title: "Climate Adaptation",
    description: "Promoting climate-resilient farming practices",
    details: "We work with farmers to implement shade-grown coffee systems and drought-resistant varietals to combat climate change effects."
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Protecting biodiversity and soil health in coffee regions",
    details: "Our sustainability programs focus on soil conservation, water management, and maintaining healthy ecosystems around coffee farms."
  }
];

const impactMetrics = [
  {
    icon: Users,
    number: "2,500+",
    label: "Farmers Supported",
    description: "Small-scale farmers across our sourcing regions"
  },
  {
    icon: Globe,
    number: "15",
    label: "Cooperatives",
    description: "Active partnerships with farmer cooperatives"
  },
  {
    icon: TrendingUp,
    number: "35%",
    label: "Income Increase",
    description: "Average farmer income improvement through our programs"
  },
  {
    icon: Leaf,
    number: "1,200",
    label: "Hectares Protected",
    description: "Forest conservation and sustainable farming land"
  }
];

const initiatives = [
  {
    title: "Coffee Quality Training",
    image: qualityControl,
    description: "Comprehensive training programs on post-harvest processing, quality control, and sustainable farming practices.",
    impact: "Improved coffee quality scores and increased farmer premiums"
  },
  {
    title: "Cooperative Development",
    image: coffeeDrying,
    description: "Supporting the formation and strengthening of farmer cooperatives to increase bargaining power and shared resources.",
    impact: "Enhanced market access and reduced operational costs"
  },
  {
    title: "Climate Resilience",
    image: coffeeCherry,
    description: "Introducing climate-adapted varietals and sustainable farming techniques to combat changing weather patterns.",
    impact: "Increased yield stability and reduced climate vulnerability"
  }
];

export default function Sustainability() {
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
            Sustainable Coffee
            <span className="block text-accent-gold">For a Better Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
            Building lasting partnerships with farmers while protecting the environment 
            and communities that make exceptional Kenyan coffee possible.
          </p>
          <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green">
            Our Impact Report
          </Button>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Our Sustainability Commitment
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We believe that great coffee comes from thriving communities and healthy ecosystems. 
              Our sustainability initiatives focus on creating positive impact across the entire value chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityPillars.map((pillar, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <pillar.icon className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-coffee-brown mb-3">{pillar.title}</h3>
                  <p className="text-neutral-600 mb-4">{pillar.description}</p>
                  <p className="text-sm text-neutral-500">{pillar.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-kenyan-green text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Measuring Our Impact
            </h2>
            <p className="text-xl text-warm-cream/90 max-w-2xl mx-auto">
              Transparency and accountability drive our sustainability efforts. 
              Here's how we're making a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                <div className="text-4xl font-playfair font-bold mb-2">{metric.number}</div>
                <div className="text-xl font-semibold mb-2">{metric.label}</div>
                <p className="text-warm-cream/80">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Our Key Initiatives
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Strategic programs designed to create lasting positive change in coffee communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-3">{initiative.title}</h3>
                  <p className="text-neutral-600 mb-4">{initiative.description}</p>
                  
                  <div className="pt-4 border-t border-neutral-200">
                    <Badge variant="secondary" className="bg-kenyan-green text-white mb-2">Impact</Badge>
                    <p className="text-sm text-neutral-600">{initiative.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Stories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Stories from the Field
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear directly from the farmers who are at the heart of our sustainability efforts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-kenyan-green rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <blockquote className="text-lg text-neutral-700 italic mb-4">
                    "Working with Jowam has transformed our cooperative. The training programs have 
                    helped us improve our coffee quality and earn better prices for our families."
                  </blockquote>
                  <div className="text-coffee-brown font-semibold">Mary Wanjiku</div>
                  <div className="text-neutral-500">Nyeri Farmers Cooperative Chair</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-kenyan-green rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <blockquote className="text-lg text-neutral-700 italic mb-4">
                    "The climate-resilient farming techniques have helped us maintain good harvests 
                    even during challenging weather seasons. Our farm is now more sustainable."
                  </blockquote>
                  <div className="text-coffee-brown font-semibold">Joseph Kiprotich</div>
                  <div className="text-neutral-500">Kisii Coffee Farmer</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 bg-charcoal text-warm-cream">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Our 2030 Sustainability Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-playfair font-bold text-accent-gold mb-2">50%</div>
              <p>Increase in farmer incomes across all sourcing regions</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-accent-gold mb-2">5,000</div>
              <p>Coffee farmers directly supported through our programs</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-accent-gold mb-2">100%</div>
              <p>Carbon-neutral operations and supply chain</p>
            </div>
          </div>
          <p className="text-xl text-warm-cream/90 mb-8">
            Together, we're building a more sustainable future for Kenyan coffee, 
            one farmer, one cooperative, and one cup at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-charcoal" asChild>
              <Link to="/contact">Partner with Us</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/request-samples">Request Sustainable Samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}