import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mountain, Thermometer, Coffee, Droplets, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-kenya-coffee.jpg";
import coffeeCherry from "@/assets/coffee-cherries.jpg";
import coffeeDrying from "@/assets/coffee-drying.jpg";
import qualityControl from "@/assets/quality-control.jpg";

const regions = [
  {
    name: "Nyeri",
    slug: "nyeri",
    image: coffeeDrying,
    description: "Known for bright acidity and wine-like characteristics",
    altitude: "1,200-2,000m",
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed", "Natural"],
    cupProfile: "Bright, wine-like with blackcurrant and citrus notes",
    cooperatives: 15,
    featured: true
  },
  {
    name: "Kirinyaga",
    slug: "kirinyaga", 
    image: coffeeCherry,
    description: "High altitude coffees with complex fruit flavors",
    altitude: "1,300-1,900m",
    mainHarvest: "Oct-Jan",
    flyHarvest: "Jun-Aug", 
    varietals: ["SL28", "SL34", "Batian"],
    processing: ["Washed", "Honey"],
    cupProfile: "Complex, fruity with wine-like acidity and citrus undertones",
    cooperatives: 12,
    featured: true
  },
  {
    name: "Kisii",
    slug: "kisii",
    image: qualityControl,
    description: "Full-bodied coffees with chocolate and caramel notes",
    altitude: "1,500-2,000m",
    mainHarvest: "Apr-Jul",
    flyHarvest: "Oct-Dec",
    varietals: ["SL28", "SL34", "Ruiru 11", "Batian"],
    processing: ["Washed", "Natural"],
    cupProfile: "Full body with chocolate hints and sweet finish",
    cooperatives: 8,
    featured: true
  },
  {
    name: "Bungoma",
    slug: "bungoma",
    image: heroImage,
    description: "Emerging region with unique flavor characteristics",
    altitude: "1,400-1,800m",
    mainHarvest: "Oct-Jan",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed"],
    cupProfile: "Balanced with good body and mild acidity",
    cooperatives: 6,
    featured: false
  },
  {
    name: "Murang'a",
    slug: "muranga",
    image: coffeeCherry,
    description: "Traditional coffee region with consistent quality",
    altitude: "1,200-1,700m", 
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34"],
    processing: ["Washed"],
    cupProfile: "Clean, bright with good acidity and medium body",
    cooperatives: 10,
    featured: false
  },
  {
    name: "Embu",
    slug: "embu",
    image: coffeeDrying,
    description: "High quality coffees from the slopes of Mount Kenya",
    altitude: "1,300-1,800m",
    mainHarvest: "Oct-Dec", 
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed", "Natural"],
    cupProfile: "Bright acidity with floral notes and clean finish",
    cooperatives: 9,
    featured: false
  }
];

const whyOriginMatters = [
  {
    icon: Mountain,
    title: "Altitude & Climate",
    description: "Higher altitudes create denser beans with more complex flavors and pronounced acidity"
  },
  {
    icon: Thermometer,
    title: "Microclimate",
    description: "Unique combinations of temperature, rainfall, and humidity shape distinct flavor profiles"
  },
  {
    icon: Coffee,
    title: "Soil Composition",
    description: "Rich volcanic soils provide essential minerals that contribute to coffee's unique characteristics"
  },
  {
    icon: Droplets,
    title: "Processing Traditions",
    description: "Regional expertise in processing methods passed down through generations"
  }
];

export default function Origins() {
  const featuredRegions = regions.filter(region => region.featured);
  const otherRegions = regions.filter(region => !region.featured);

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
            From Soil to Cup
            <span className="block text-accent-gold">Kenya's Finest Coffee Regions</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
            Discover the diverse terroir that makes each Kenyan coffee region unique, 
            from the volcanic soils of Nyeri to the high altitudes of Kirinyaga.
          </p>
        </div>
      </section>

      {/* Why Origin Matters */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Why Origin Matters
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Each coffee region tells a unique story through its terroir, influencing every aspect 
              of the final cup from acidity to body to flavor notes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOriginMatters.map((factor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <factor.icon className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-coffee-brown mb-3">{factor.title}</h3>
                  <p className="text-neutral-600">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Kenya Coffee Regions Map
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore the geographical distribution of Kenya's premier coffee growing regions
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-neutral-100 rounded-lg p-16 mb-6">
              <Mountain className="h-24 w-24 text-kenyan-green mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-2">
                Interactive Map
              </h3>
              <p className="text-neutral-600">
                Detailed interactive map of Kenya's coffee regions coming soon. 
                For now, explore our featured regions below.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="#featured-regions">View Region Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section id="featured-regions" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Featured Coffee Regions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our primary sourcing regions known for exceptional quality and consistency
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredRegions.map((region, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={`${region.name} coffee region`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-playfair font-bold text-coffee-brown">{region.name}</h3>
                    <Badge variant="secondary" className="bg-kenyan-green text-white">Featured</Badge>
                  </div>
                  <p className="text-neutral-600 mb-4">{region.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Altitude:</span>
                      <span className="font-medium text-coffee-brown">{region.altitude}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Main Harvest:</span>
                      <span className="font-medium text-coffee-brown">{region.mainHarvest}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Cooperatives:</span>
                      <span className="font-medium text-coffee-brown">{region.cooperatives}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <h4 className="text-sm font-semibold text-coffee-brown mb-2">Cup Profile:</h4>
                    <p className="text-sm text-neutral-600 italic">{region.cupProfile}</p>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to={`/origins/${region.slug}`}>
                      Explore {region.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Regions */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Additional Sourcing Regions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Other quality coffee regions we work with for specialty lots and seasonal offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRegions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mountain className="h-6 w-6 text-kenyan-green" />
                    <h3 className="text-xl font-playfair font-bold text-coffee-brown">{region.name}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">{region.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-500 block">Altitude</span>
                      <span className="font-medium text-coffee-brown">{region.altitude}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Cooperatives</span>
                      <span className="font-medium text-coffee-brown">{region.cooperatives}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 text-kenyan-green hover:text-kenyan-green/80" asChild>
                    <Link to={`/origins/${region.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Region Comparison */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Quick Region Comparison
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Compare key characteristics across our featured coffee regions
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead className="bg-kenyan-green text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Region</th>
                  <th className="text-left p-4 font-semibold">Altitude</th>
                  <th className="text-left p-4 font-semibold">Main Harvest</th>
                  <th className="text-left p-4 font-semibold">Primary Varietals</th>
                  <th className="text-left p-4 font-semibold">Key Characteristics</th>
                </tr>
              </thead>
              <tbody>
                {featuredRegions.map((region, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-neutral-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-coffee-brown">{region.name}</td>
                    <td className="p-4 text-neutral-600">{region.altitude}</td>
                    <td className="p-4 text-neutral-600">{region.mainHarvest}</td>
                    <td className="p-4 text-neutral-600">{region.varietals.join(", ")}</td>
                    <td className="p-4 text-neutral-600">{region.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-kenyan-green">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
            Discover the Perfect Origin for Your Roastery
          </h2>
          <p className="text-xl text-warm-cream/90 mb-8">
            Each region offers unique characteristics. Let us help you find the perfect 
            Kenyan coffee to complement your roasting style and customer preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green" asChild>
              <Link to="/request-samples">Request Origin Samples</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
