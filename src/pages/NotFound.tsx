import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, ArrowRight, Home, Search, MapPin, Leaf } from "lucide-react";
import heroImage from "@/assets/coffee-cherries.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const coffeeTerms = [
    { term: "Cupping", definition: "The practice of observing the tastes and aromas of brewed coffee" },
    { term: "Terroir", definition: "The complete natural environment in which coffee is grown" },
    { term: "Peaberry", definition: "A rare coffee bean that develops alone in the cherry" },
    { term: "Washing Station", definition: "Where coffee cherries are processed after harvest" }
  ];

  const suggestions = [
    { icon: Home, text: "Return to Homepage", href: "/" },
    { icon: Coffee, text: "Explore Our Coffee", href: "/our-coffee" },
    { icon: MapPin, text: "Discover Origins", href: "/origins" },
    { icon: Leaf, text: "Learn Our Process", href: "/process" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Coffee Background */}
      <section className="relative py-32 bg-gradient-hero text-warm-cream overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Coffee className="h-24 w-24 text-accent-gold animate-pulse" />
              <div className="absolute -top-2 -right-2 bg-warm-cream text-coffee-brown rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold text-xl">
                404
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow-warm">
            Oops! This Blend
            <span className="block text-accent-gold">Wasn't Found</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-2xl mx-auto">
            It looks like the page you're looking for has been moved to a different warehouse, 
            or perhaps it's still drying on the raised beds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-kenyan-green" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Origin
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/our-coffee">
                <Search className="mr-2 h-5 w-5" />
                Browse Our Lots
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coffee Terms Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              While You're Here...
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Learn some coffee terminology from Kenya's finest coffee regions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeTerms.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-kenyan-green">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-coffee-brown mb-3">
                    {item.term}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.definition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-8">
            Let's Get You Back to the Good Stuff
          </h2>
          <p className="text-lg text-neutral-600 mb-12">
            Here are some popular destinations to continue your coffee journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <Link to={suggestion.href} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-kenyan-green rounded-lg flex items-center justify-center group-hover:bg-coffee-brown transition-colors">
                        <suggestion.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-coffee-brown group-hover:text-kenyan-green transition-colors">
                        {suggestion.text}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-kenyan-green transition-colors" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Coffee Quote */}
      <section className="py-16 bg-kenyan-green text-warm-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-playfair italic mb-6">
            "Like a perfectly balanced cup, every great journey begins with the right beans 
            and a little patience."
          </blockquote>
          <p className="text-warm-cream/80">
            — Kenya Coffee Wisdom
          </p>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
