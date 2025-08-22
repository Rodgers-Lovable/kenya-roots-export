import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Coffee, Droplets, Mountain, Thermometer, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import qualityControl from "@/assets/quality-control.jpg";
import coffeeCherry from "@/assets/coffee-cherries.jpg";
import coffeeDrying from "@/assets/coffee-drying.jpg";
import heroOurCoffee from "@/assets/hero-our-coffee.jpg";

const grades = [
  {
    grade: "AA",
    screen: "Screen 18+",
    size: "7.2mm+",
    characteristics: [
      "Largest bean size with uniform appearance",
      "Bright acidity with complex flavor profiles", 
      "Wine-like qualities with fruity undertones",
      "Ideal for light to medium roasts"
    ],
    cupProfile: "Bright, complex, wine-like with blackcurrant and citrus notes",
    image: qualityControl
  },
  {
    grade: "AB",
    screen: "Screen 16-17",
    size: "6.8-7.2mm",
    characteristics: [
      "Balanced cup with excellent body",
      "Consistent quality and flavor",
      "Good acidity with smooth finish",
      "Versatile for various roast profiles"
    ],
    cupProfile: "Well-balanced with good body, moderate acidity, and clean finish",
    image: coffeeCherry
  },
  {
    grade: "PB",
    screen: "Peaberry",
    size: "Round beans",
    characteristics: [
      "Concentrated flavors in round beans",
      "Unique roasting characteristics",
      "Limited availability - specialty grade",
      "Prized by roasters for distinctive qualities"
    ],
    cupProfile: "Concentrated, full-bodied with unique flavor intensity",
    image: coffeeDrying
  }
];

const processingMethods = [
  {
    method: "Washed Process",
    percentage: "85%",
    icon: Droplets,
    description: "Our primary processing method producing clean, bright coffees with pronounced acidity",
    steps: [
      "Fresh cherry selection and sorting",
      "Pulping to remove outer fruit",
      "12-24 hour fermentation",
      "Clean water washing",
      "Sun drying on raised beds"
    ]
  },
  {
    method: "Natural Process", 
    percentage: "10%",
    icon: Coffee,
    description: "Limited seasonal offerings with enhanced sweetness and body",
    steps: [
      "Careful cherry selection",
      "Direct sun drying with fruit intact",
      "Regular turning for even drying",
      "Extended drying period (2-3 weeks)",
      "Final hulling to remove dried fruit"
    ]
  },
  {
    method: "Honey Process",
    percentage: "5%",
    icon: Star,
    description: "Specialty micro-lots combining characteristics of washed and natural",
    steps: [
      "Cherry pulping with mucilage retained",
      "Controlled fermentation",
      "Careful monitoring during drying",
      "Gradual moisture reduction",
      "Quality sorting and classification"
    ]
  }
];

const availabilityData = [
  {
    region: "Nyeri",
    mainHarvest: "October - December",
    flyHarvest: "June - August",
    peakAvailability: "January - April"
  },
  {
    region: "Kirinyaga", 
    mainHarvest: "October - January",
    flyHarvest: "June - August",
    peakAvailability: "February - May"
  },
  {
    region: "Kisii",
    mainHarvest: "April - July",
    flyHarvest: "October - December",
    peakAvailability: "August - November"
  }
];

export default function OurCoffee() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 text-warm-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroOurCoffee} 
            alt="Coffee quality control and grading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow-warm">
            Export-Grade Kenyan Coffee
            <span className="block text-accent-gold">From Our Soil to Your Roastery</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
            Premium arabica coffee in AA, AB, and Peaberry grades, processed to international 
            standards and ready for export to specialty roasters worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/request-samples">Request Samples</Link>
            </Button>
            <Button size="lg" variant="hero" asChild>
              <Link to="/catalog">Download Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coffee Grades Detail */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Kenya Coffee Grades Explained
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Understanding the classification system that has made Kenyan coffee world-renowned for quality
            </p>
          </div>
          
          <div className="space-y-16">
            {grades.map((grade, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-6">
                    <Badge variant="outline" className="border-accent-gold text-accent-gold font-bold text-2xl px-4 py-2 mr-4">
                      {grade.grade}
                    </Badge>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-coffee-brown">{grade.screen}</h3>
                      <p className="text-neutral-600">Bean size: {grade.size}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-coffee-brown mb-3">Characteristics:</h4>
                    <ul className="space-y-2">
                      {grade.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-start">
                          <Coffee className="h-4 w-4 text-kenyan-green mt-1 mr-2 flex-shrink-0" />
                          <span className="text-neutral-600">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-coffee-brown mb-2 flex items-center">
                      <Star className="h-5 w-5 text-accent-gold mr-2" />
                      Cup Profile
                    </h4>
                    <p className="text-neutral-600 italic">{grade.cupProfile}</p>
                  </div>
                  
                  <Button variant="outline" asChild>
                    <Link to={`/request-samples?grade=${grade.grade}`}>
                      Request {grade.grade} Samples
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img 
                    src={grade.image} 
                    alt={`Grade ${grade.grade} coffee beans`}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Methods */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Processing Methods
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Different processing methods create distinct flavor profiles while maintaining Kenya's signature quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processingMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <method.icon className="h-12 w-12 text-kenyan-green" />
                    <Badge variant="secondary" className="text-lg font-bold">
                      {method.percentage}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-coffee-brown mb-3">
                    {method.method}
                  </h3>
                  <p className="text-neutral-600 mb-6">{method.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-coffee-brown mb-3">Process Steps:</h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="bg-kenyan-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-neutral-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Availability */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Harvest Calendar & Availability
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Kenya's dual harvest seasons ensure year-round availability of fresh crop coffee
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availabilityData.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Mountain className="h-8 w-8 text-kenyan-green mr-3" />
                    <h3 className="text-xl font-playfair font-bold text-coffee-brown">{region.region}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-coffee-brown text-sm mb-1">Main Harvest</h4>
                      <p className="text-neutral-600">{region.mainHarvest}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-brown text-sm mb-1">Fly Crop</h4>
                      <p className="text-neutral-600">{region.flyHarvest}</p>
                    </div>
                    <div className="bg-kenyan-green/10 p-3 rounded">
                      <h4 className="font-semibold text-kenyan-green text-sm mb-1">Peak Availability</h4>
                      <p className="text-kenyan-green font-medium">{region.peakAvailability}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6">
              Want to learn more about our current lot availability and shipping schedules?
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Our Trade Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-charcoal text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
                Rigorous Quality Control
              </h2>
              <p className="text-lg text-warm-cream/80 mb-8">
                Every lot undergoes comprehensive testing and evaluation before export to ensure 
                consistency and quality that meets international specialty coffee standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-cream mb-1">Professional Cupping</h4>
                    <p className="text-warm-cream/70">Licensed Q Graders evaluate each lot using SCAA protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Thermometer className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-cream mb-1">Moisture & Density Testing</h4>
                    <p className="text-warm-cream/70">Ensuring optimal moisture levels (10-12%) for safe shipping</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Coffee className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-cream mb-1">Screen Size Analysis</h4>
                    <p className="text-warm-cream/70">Precise grading ensuring uniformity within each grade classification</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={qualityControl} 
                alt="Coffee quality control and cupping"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-gold text-charcoal p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-charcoal" />
                  <span className="font-bold">85+ Cup Score</span>
                </div>
                <p className="text-sm font-medium">Specialty grade standard for all exports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-kenyan-green">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
            Ready to Experience Kenya's Finest Coffee?
          </h2>
          <p className="text-xl text-warm-cream/90 mb-8">
            Sample our premium grades and discover why leading specialty roasters 
            choose Jowam Coffee Traders for their Kenyan coffee needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green" asChild>
              <Link to="/request-samples">Request Samples</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/origins">Explore Our Origins</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}