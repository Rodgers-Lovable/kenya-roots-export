import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Mountain, Coffee, Users, Droplets, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@/assets/hero-kenya-coffee.jpg";
import coffeeCherry from "@/assets/coffee-cherries.jpg";
import coffeeDrying from "@/assets/coffee-drying.jpg";
import qualityControl from "@/assets/quality-control.jpg";

const regions = [
  {
    name: "Nyeri",
    slug: "nyeri",
    image: coffeeDrying,
    description: "Renowned for bright acidity and wine-like characteristics",
    longDescription: "Nyeri is one of Kenya's most prestigious coffee-growing regions, located on the southern slopes of Mount Kenya. The region's high altitude, rich volcanic soils, and distinct wet and dry seasons create ideal conditions for producing some of the world's finest Arabica coffee. Nyeri coffees are famous for their intense wine-like acidity, complex flavor profiles, and distinctive blackcurrant notes that have made them legendary among coffee connoisseurs worldwide.",
    altitude: "1,200-2,000m",
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed", "Natural"],
    cupProfile: "Bright, wine-like with blackcurrant and citrus notes, exceptional acidity",
    cooperatives: 15,
    featured: true,
    soilType: "Rich volcanic soil with excellent drainage",
    rainfall: "900-1,200mm annually",
    temperature: "15-25°C average",
    farmingSeason: "Two distinct seasons: main crop (October-December) and fly crop (June-August)"
  },
  {
    name: "Kirinyaga",
    slug: "kirinyaga", 
    image: coffeeCherry,
    description: "High altitude coffees from Mount Kenya's slopes with complex fruit flavors",
    longDescription: "Kirinyaga County, situated on the eastern slopes of Mount Kenya, is renowned for producing some of Kenya's most exceptional specialty coffees. The region benefits from high altitudes, volcanic soils, and a favorable climate that creates unique microclimates perfect for coffee cultivation. Kirinyaga coffees are characterized by their complex fruit flavors, wine-like acidity, and vibrant citrus undertones. The region's commitment to quality processing and sustainable farming practices has earned it recognition among specialty coffee buyers worldwide.",
    altitude: "1,300-1,900m",
    mainHarvest: "Oct-Jan",
    flyHarvest: "Jun-Aug", 
    varietals: ["SL28", "SL34", "Batian"],
    processing: ["Washed", "Honey"],
    cupProfile: "Complex, fruity with wine-like acidity and vibrant citrus undertones",
    cooperatives: 12,
    featured: true,
    soilType: "Deep volcanic soils rich in organic matter",
    rainfall: "1,000-1,400mm annually",
    temperature: "13-23°C average",
    farmingSeason: "Main season peaks October-January, fly crop June-August"
  },
  {
    name: "Kisii",
    slug: "kisii",
    image: qualityControl,
    description: "High altitude region producing full-bodied coffees with rich chocolate notes",
    longDescription: "Kisii County, located in the southwestern highlands of Kenya, represents one of the country's emerging specialty coffee regions. The area's high altitude, consistent rainfall, and rich soils create excellent conditions for coffee cultivation. Kisii coffees are distinguished by their full body, rich chocolate and caramel notes, and sweet lingering finish. The region has invested heavily in quality improvement initiatives, modern processing equipment, and farmer training programs, resulting in consistently high-quality specialty lots.",
    altitude: "1,500-2,000m",
    mainHarvest: "Apr-Jul",
    flyHarvest: "Oct-Dec",
    varietals: ["SL28", "SL34", "Ruiru 11", "Batian"],
    processing: ["Washed", "Natural"],
    cupProfile: "Full body with chocolate and caramel hints, sweet lingering finish",
    cooperatives: 8,
    featured: true,
    soilType: "Fertile highland soils with good water retention",
    rainfall: "1,200-1,800mm annually",
    temperature: "16-24°C average",
    farmingSeason: "Main harvest April-July, secondary harvest October-December"
  },
  {
    name: "Bungoma",
    slug: "bungoma",
    image: heroImage,
    description: "Western Kenya region with emerging specialty coffee characteristics",
    longDescription: "Bungoma County, located in western Kenya near the Ugandan border, is an emerging specialty coffee region with tremendous potential. The area's moderate altitude, consistent climate, and fertile soils provide favorable conditions for coffee cultivation. While traditionally known for commercial grade coffee, recent investments in processing infrastructure and farmer training have resulted in improved quality and the emergence of specialty lots. Bungoma coffees are characterized by their well-balanced profile, good body, mild acidity, and clean finish.",
    altitude: "1,400-1,800m",
    mainHarvest: "Oct-Jan",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed"],
    cupProfile: "Well-balanced with good body, mild acidity, and clean finish",
    cooperatives: 6,
    featured: false,
    soilType: "Well-drained loamy soils",
    rainfall: "1,100-1,500mm annually",
    temperature: "18-26°C average",
    farmingSeason: "Primary harvest October-January, secondary crop June-August"
  },
  {
    name: "Murang'a",
    slug: "muranga",
    image: coffeeCherry,
    description: "Traditional coffee region with fertile soils and consistent quality production",
    longDescription: "Murang'a County, one of Kenya's traditional coffee-growing regions, is located in the central highlands south of Mount Kenya. The region has a long history of coffee cultivation dating back to the colonial era and continues to be a significant producer of quality Kenyan coffee. Murang'a's fertile soils, favorable climate, and experienced farmers contribute to the consistent production of clean, bright coffees with good acidity and medium body. The region is known for its traditional washed processing methods and strong cooperative system.",
    altitude: "1,200-1,700m", 
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34"],
    processing: ["Washed"],
    cupProfile: "Clean, bright with good acidity, medium body, and floral notes",
    cooperatives: 10,
    featured: false,
    soilType: "Red volcanic soils with good fertility",
    rainfall: "900-1,300mm annually",
    temperature: "16-24°C average",
    farmingSeason: "Main crop October-December, fly crop June-August"
  },
  {
    name: "Meru",
    slug: "meru",
    image: coffeeDrying,
    description: "Premium coffees from Mount Kenya's eastern slopes, known as the champagne region",
    longDescription: "Meru County, often referred to as Kenya's 'champagne region' for coffee, is located on the northeastern slopes of Mount Kenya. The region's unique microclimate, high altitude, and volcanic soils create exceptional conditions for producing premium specialty coffee. Meru coffees are renowned for their bright acidity, complex floral notes, wine-like character, and exceptionally clean finish. The region has a strong tradition of quality processing and is home to some of Kenya's most respected coffee cooperatives and estates.",
    altitude: "1,300-1,800m",
    mainHarvest: "Oct-Dec", 
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed", "Natural"],
    cupProfile: "Bright acidity with complex floral notes, wine-like character, and clean finish",
    cooperatives: 9,
    featured: false,
    soilType: "Rich volcanic soils with excellent drainage",
    rainfall: "1,000-1,400mm annually",
    temperature: "14-22°C average",
    farmingSeason: "Primary harvest October-December, secondary harvest June-August"
  }
];

export default function OriginDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const region = regions.find(r => r.slug === slug);
  
  useEffect(() => {
    if (region) {
      document.title = `${region.name} Coffee Region - Jowam Coffee Traders`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Discover ${region.name} coffee region in Kenya. ${region.description}. Learn about altitude, harvest seasons, varietals, and unique cup profile characteristics.`);
      }
    }
  }, [region]);

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-6">
          <Mountain className="h-24 w-24 text-neutral-400 mx-auto mb-6" />
          <h1 className="text-3xl font-playfair font-bold text-coffee-brown mb-4">
            Origin Not Found
          </h1>
          <p className="text-neutral-600 mb-8">
            The coffee region you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => navigate('/origins')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Origins
            </Button>
            <Button asChild>
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero text-warm-cream overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${region.image})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-warm-cream hover:bg-warm-cream/10 hover:text-warm-cream"
              onClick={() => navigate('/origins')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Origins
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-shadow-warm">
                {region.name}
              </h1>
              {region.featured && (
                <Badge className="bg-accent-gold text-coffee-brown font-semibold px-4 py-2 text-lg">
                  Featured Region
                </Badge>
              )}
            </div>
            <p className="text-xl md:text-2xl text-warm-cream/90 mb-6">
              {region.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Mountain className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm text-warm-cream/80">Altitude</div>
                <div className="font-semibold">{region.altitude}</div>
              </div>
              <div>
                <Calendar className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm text-warm-cream/80">Main Harvest</div>
                <div className="font-semibold">{region.mainHarvest}</div>
              </div>
              <div>
                <Coffee className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm text-warm-cream/80">Varietals</div>
                <div className="font-semibold">{region.varietals.length}+</div>
              </div>
              <div>
                <Users className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm text-warm-cream/80">Cooperatives</div>
                <div className="font-semibold">{region.cooperatives}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Region Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={region.image} 
                alt={`${region.name} coffee region landscape`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Region Description */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-6">
                About {region.name} Region
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {region.longDescription}
              </p>
              
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-4">Quick Facts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Soil Type:</span>
                    <span className="font-medium text-coffee-brown text-right">{region.soilType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Annual Rainfall:</span>
                    <span className="font-medium text-coffee-brown">{region.rainfall}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Temperature:</span>
                    <span className="font-medium text-coffee-brown">{region.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Farming Season:</span>
                    <span className="font-medium text-coffee-brown text-right">{region.farmingSeason}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coffee Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Varietals */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Coffee className="h-6 w-6 text-kenyan-green mr-3" />
                  <h3 className="text-xl font-semibold text-coffee-brown">Coffee Varietals</h3>
                </div>
                <div className="space-y-2">
                  {region.varietals.map((varietal, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {varietal}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Processing Methods */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-kenyan-green mr-3" />
                  <h3 className="text-xl font-semibold text-coffee-brown">Processing Methods</h3>
                </div>
                <div className="space-y-2">
                  {region.processing.map((method, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {method}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Harvest Seasons */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-kenyan-green mr-3" />
                  <h3 className="text-xl font-semibold text-coffee-brown">Harvest Seasons</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-neutral-500">Main Harvest</div>
                    <div className="font-medium text-coffee-brown">{region.mainHarvest}</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Fly Crop</div>
                    <div className="font-medium text-coffee-brown">{region.flyHarvest}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cup Profile */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-4">
                Cup Profile & Tasting Notes
              </h3>
              <p className="text-lg text-neutral-600 italic leading-relaxed">
                "{region.cupProfile}"
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-kenyan-green rounded-lg p-12">
            <h3 className="text-3xl font-playfair font-bold text-warm-cream mb-4">
              Interested in {region.name} Coffee?
            </h3>
            <p className="text-xl text-warm-cream/90 mb-8 max-w-2xl mx-auto">
              Experience the unique characteristics of {region.name} coffee through our sample program 
              or discuss custom sourcing options for your roastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green"
                asChild
              >
                <Link to="/request-samples">Request Samples</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}