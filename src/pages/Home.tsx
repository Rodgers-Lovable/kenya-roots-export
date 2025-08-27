import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Globe,
  Leaf,
  Award,
  Coffee,
  Mountain,
  Droplets,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-kenya-coffee.jpg";
import coffeeCherry from "@/assets/coffee-cherries.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import { regions } from "@/data/origins";
import { Helmet } from "react-helmet-async";

const valueProps = [
  {
    icon: Shield,
    title: "Licensed Exporter",
    description:
      "Fully licensed by Kenya Coffee Board with all necessary export permits and certifications.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description:
      "Reliable shipping worldwide from Port of Mombasa with complete export documentation.",
  },
  {
    icon: Leaf,
    title: "Ethical & Transparent",
    description:
      "Direct farmer relationships ensuring fair pricing and complete supply chain traceability.",
  },
  {
    icon: Award,
    title: "Lab-Tested Quality",
    description:
      "Every lot professionally cupped and graded to international standards before export.",
  },
];

const coffeeGrades = [
  {
    grade: "AA",
    screen: "Screen 18+",
    description:
      "Largest beans with bright acidity and complex flavor profiles",
  },
  {
    grade: "AB",
    screen: "Screen 16-17",
    description: "Balanced cup with excellent body and consistent quality",
  },
  {
    grade: "PB",
    screen: "Peaberry",
    description:
      "Round beans with concentrated flavors and unique characteristics",
  },
];

export default function Home() {
  const featuredRegions = regions.filter((region) => region.featured);

  return (
    <>
      <Helmet>
        <title>Jowam Coffee Traders | Premium Kenyan Coffee Exports</title>
        <meta
          name="description"
          content="Jowam Coffee Traders exports the finest Kenyan coffee beans worldwide. We are committed to quality, sustainability, and empowering coffee farming communities across Kenya."
        />
        <link rel="canonical" href="https://jowamcoffee.co.ke/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Jowam Coffee Traders | Premium Kenyan Coffee Exports"
        />
        <meta
          property="og:description"
          content="Exporting premium Kenyan coffee globally with a commitment to quality, sustainability, and farmer empowerment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jowamcoffee.co.ke/" />
        <meta
          property="og:image"
          content="https://jowamcoffee.co.ke/images/kenyan-coffee.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jowam Coffee Traders | Premium Kenyan Coffee Exports"
        />
        <meta
          name="twitter:description"
          content="Exporting premium Kenyan coffee globally with a commitment to sustainability and farmer empowerment."
        />
        <meta
          name="twitter:image"
          content="https://jowamcoffee.co.ke/images/kenyan-coffee.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Jowam Coffee Traders",
      "url": "https://jowamcoffee.co.ke",
      "logo": "https://jowamcoffee.co.ke/logo.png",
      "description": "Jowam Coffee Traders exports premium Kenyan coffee beans worldwide with a commitment to quality, sustainability, and farmer empowerment.",
      "sameAs": [
        "https://www.linkedin.com/company/jowam-coffee-traders",
        "https://twitter.com/jowamcoffee"
      ]
    }
  `}</script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 gradient-hero" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-warm-cream mb-6 text-shadow-warm">
                Exporting the True
                <span className="block text-accent-gold">Taste of Kenya</span>
              </h1>
              <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto font-light">
                Premium, traceable green coffee connecting Kenyan farmers with
                specialty roasters worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/our-coffee">
                    Explore Our Coffee
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-warm-cream text-warm-cream bg-transparent hover:bg-warm-cream hover:text-charcoal"
                  asChild
                >
                  <Link to="/request-samples">Request Samples</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
                Why Choose Jowam Coffee Traders
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Your trusted partner for premium Kenyan green coffee exports
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((prop, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="pt-8 pb-6">
                    <prop.icon className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-coffee-brown mb-3">
                      {prop.title}
                    </h3>
                    <p className="text-neutral-600">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Origins */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
                Featured Coffee Origins
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Discover the diverse terroir of Kenya's premier coffee growing
                regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRegions.map((origin, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={origin.image}
                      alt={`${origin.name} coffee region`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-playfair font-bold text-coffee-brown">
                        {origin.name}
                      </h3>
                      <Mountain className="h-5 w-5 text-kenyan-green" />
                    </div>
                    <p className="text-neutral-600 mb-4">
                      {origin.description}
                    </p>
                    <div className="space-y-2 text-sm text-neutral-500">
                      <div className="flex items-center">
                        <Mountain className="h-4 w-4 mr-2 text-accent-gold" />
                        <span>Altitude: {origin.altitude}</span>
                      </div>
                      <div className="flex items-center">
                        <Coffee className="h-4 w-4 mr-2 text-accent-gold" />
                        <span>
                          Harvest: {origin.mainHarvest}, {origin.flyHarvest}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to={`/origins/${origin.name.toLowerCase()}`}>
                        View Region Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/origins">
                  Explore All Origins
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Coffee Grades */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-6">
                  Export-Grade Coffee Classifications
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  We export premium Kenyan arabica coffee in three main grades,
                  each offering unique characteristics prized by specialty
                  roasters worldwide.
                </p>

                <div className="space-y-6">
                  {coffeeGrades.map((grade, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Badge
                        variant="outline"
                        className="border-accent-gold text-accent-gold font-semibold text-lg px-3 py-1"
                      >
                        {grade.grade}
                      </Badge>
                      <div>
                        <h4 className="font-semibold text-coffee-brown mb-1">
                          {grade.screen}
                        </h4>
                        <p className="text-neutral-600">{grade.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="default" size="lg" className="mt-8" asChild>
                  <Link to="/our-coffee">
                    Learn About Our Coffee
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <img
                  src={qualityControl}
                  alt="Coffee quality control and grading"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-kenyan-green text-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-accent-gold" />
                    <span className="font-semibold">Quality Assured</span>
                  </div>
                  <p className="text-sm">
                    Every lot cupped & graded to international standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traceability Section */}
        <section className="py-24 bg-charcoal text-warm-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={coffeeCherry}
                  alt="Coffee traceability from farm to export"
                  className="rounded-lg shadow-2xl"
                />
              </div>

              <div>
                <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
                  Complete Traceability & Quality Assurance
                </h2>
                <p className="text-lg text-warm-cream/80 mb-8">
                  From farmer to roaster, every bag of coffee carries complete
                  documentation ensuring transparency and quality throughout the
                  supply chain.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <Droplets className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-warm-cream mb-1">
                        Processing Documentation
                      </h4>
                      <p className="text-warm-cream/70">
                        Detailed records of processing methods, moisture
                        content, and quality metrics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-warm-cream mb-1">
                        Export Certification
                      </h4>
                      <p className="text-warm-cream/70">
                        Phytosanitary certificates, certificate of origin, and
                        ICO export permits
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Coffee className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-warm-cream mb-1">
                        Lot Identification
                      </h4>
                      <p className="text-warm-cream/70">
                        Unique lot codes linking every bag to its origin farm
                        and processing details
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="secondary" size="lg" asChild>
                  <Link to="/process">
                    See Our Process
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-kenyan-green">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
              Ready to Partner with Kenya's Premier Coffee Exporters?
            </h2>
            <p className="text-xl text-warm-cream/90 mb-8">
              Join leading specialty roasters worldwide who trust Jowam Coffee
              Traders for their premium Kenyan green coffee needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-warm-cream text-warm-cream bg-transparent hover:bg-warm-cream hover:text-kenyan-green"
                asChild
              >
                <Link to="/request-samples">Request Samples</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Talk to Our Trade Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
