import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Award,
  Shield,
  Globe,
  Coffee,
  Droplets,
  Package,
  FileText,
  Truck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import coffeeDrying from "@/assets/coffee-drying.jpg";
import CustomOrders from "@/assets/jowam-bags.jpg";
import JowamCoffee from "@/assets/jowam-coffee.jpg";
import heroProcess from "@/assets/hero-process.jpg";
import { processSteps, qualityStandards } from "@/data/process_and_quality";
import { Helmet } from "react-helmet-async";

const customServices = [
  "Custom processing requests (natural, honey, experimental)",
  "Harvest reservations and pre-orders",
  "Sample roasting and cup profile development",
  "Private lot sourcing from specific farms",
  "Packaging customization and branding",
  "Storage and shipping schedule coordination",
];

export default function Process() {
  return (
    <>
      {" "}
      <Helmet>
        <title>Our Process | Jowam Coffee Traders LTD</title>
        <meta
          name="description"
          content="Discover Jowam Coffee Traders LTD's process — from working with Kenyan farmers to meticulous sorting, grading, and exporting premium Arabica coffee to global markets."
        />
        <link rel="canonical" href="https://jowamcoffee.co.ke/process" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Process | Jowam Coffee Traders LTD"
        />
        <meta
          property="og:description"
          content="Follow Jowam Coffee Traders LTD's journey from farm to market — empowering farmers, ensuring quality, and exporting the finest Kenyan Arabica coffee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jowamcoffee.co.ke/process" />
        <meta
          property="og:image"
          content="https://jowamcoffee.co.ke/images/process.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Process | Jowam Coffee Traders LTD"
        />
        <meta
          name="twitter:description"
          content="From Kenyan farmers to international markets — Jowam Coffee Traders LTD ensures quality, sustainability, and excellence in every bean."
        />
        <meta
          name="twitter:image"
          content="https://jowamcoffee.co.ke/images/process.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Our Process | Jowam Coffee Traders LTD",
      "url": "https://jowamcoffee.co.ke/process",
      "description": "Discover Jowam Coffee Traders LTD's process — from working with Kenyan farmers to meticulous sorting, grading, and exporting premium Arabica coffee to global markets.",
      "publisher": {
        "@type": "Organization",
        "name": "Jowam Coffee Traders LTD",
        "url": "https://jowamcoffee.co.ke",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jowamcoffee.co.ke/logo.png"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "HowToStep", "name": "Sourcing & Partnerships", "text": "We work directly with Kenyan coffee farmers, providing support and ensuring fair trade." },
          { "@type": "HowToStep", "name": "Processing & Quality Control", "text": "Cherries are hand-picked, washed, sun-dried, and carefully processed to preserve quality." },
          { "@type": "HowToStep", "name": "Storage & Lot Preparation", "text": "Beans are meticulously sorted, graded and stored awaiting exportation." },
          { "@type": "HowToStep", "name": "Export & Delivery", "text": "Our coffee is packed, shipped, and delivered to roasters and buyers worldwide." }
          { "@type": "HowToStep", "name": "Logistics & Shipping", "text": "Reliable shipping from Port of Mombasa worldwide." }
        ]
      },
      "image": "https://jowamcoffee.co.ke/images/process.jpg"
    }
  `}</script>
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-warm-cream overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroProcess}
              alt="Coffee processing from farm to export"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-warm-cream">
              Our Process
              <span className="block text-accent-gold">
                From Harvest to Export, Handled with Precision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
              Every step in our process is designed to preserve and enhance the
              exceptional quality that makes Kenyan coffee world-renowned.
            </p>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
                Our Export Process Journey
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Follow the complete journey from farm partnerships to global
                delivery
              </p>
            </div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="bg-kenyan-green text-white rounded-full p-3 mr-4">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="border-accent-gold text-accent-gold font-bold mb-2"
                        >
                          Step {step.step}
                        </Badge>
                        <h3 className="text-2xl font-playfair font-bold text-coffee-brown">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-neutral-600 mb-6">
                      {step.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-coffee-brown mb-3">
                        Key Activities:
                      </h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-kenyan-green mt-1 mr-2 flex-shrink-0" />
                            <span className="text-neutral-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <span className="text-sm font-semibold text-coffee-brown">
                        Timeline:{" "}
                      </span>
                      <span className="text-sm text-neutral-600">
                        {step.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg shadow-xl w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
                Quality Assurance Standards
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Rigorous quality control at every stage ensures consistency and
                excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityStandards.map((standard, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="pt-8 pb-6">
                    <standard.icon className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-coffee-brown mb-3">
                      {standard.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {standard.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-accent-gold text-charcoal font-bold"
                    >
                      {standard.standard}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Traceability Section */}
        <section className="py-24 bg-charcoal text-warm-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
                  Complete Traceability Assurance
                </h2>
                <p className="text-lg text-warm-cream/80 mb-8">
                  Every bag of coffee carries a unique lot code that links it
                  back to its origin farm, processing details, and quality
                  metrics. This ensures complete transparency and accountability
                  throughout the supply chain.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Package className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-warm-cream mb-1">
                        Lot Identification
                      </h4>
                      <p className="text-warm-cream/70">
                        Unique codes for every lot linking to origin farm and
                        processing details
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-warm-cream mb-1">
                        Chain of Custody
                      </h4>
                      <p className="text-warm-cream/70">
                        Documented handling at every stage from farm to export
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Globe className="h-6 w-6 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-warm-cream mb-1">
                        Export Documentation
                      </h4>
                      <p className="text-warm-cream/70">
                        Complete certificates and permits for international
                        compliance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={JowamCoffee}
                  alt="Coffee traceability and documentation"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent-gold text-charcoal p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-charcoal" />
                    <span className="font-bold">100% Traceable</span>
                  </div>
                  <p className="text-sm font-medium">
                    Every bag tracked from farm to port
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Orders */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={CustomOrders}
                  alt="Custom coffee processing"
                  className="rounded-lg shadow-xl"
                />
              </div>

              <div>
                <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-6">
                  Custom Orders & Special Requests
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  We work closely with roasters to fulfill specific
                  requirements, from processing methods to packaging and
                  shipping schedules. Our flexibility and expertise ensure you
                  get exactly what you need for your customers.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-coffee-brown">
                    Custom Services Available:
                  </h4>
                  <ul className="space-y-2">
                    {customServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-kenyan-green mt-1 mr-2 flex-shrink-0" />
                        <span className="text-neutral-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="secondary" size="lg" asChild>
                  <Link to="/request-samples">
                    Request Custom Sample
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-kenyan-green">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
              Experience Our Process Firsthand
            </h2>
            <p className="text-xl text-warm-cream/90 mb-8">
              Ready to see how our meticulous process translates into
              exceptional coffee? Request samples and experience the difference
              quality makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green"
                asChild
              >
                <Link to="/request-samples">Request Process Samples</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Discuss Custom Requirements</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
