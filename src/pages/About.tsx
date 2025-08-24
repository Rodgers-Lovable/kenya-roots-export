import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  Heart,
  Award,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Farmer-First Approach",
    description:
      "We build lasting relationships with coffee farmers and cooperatives, ensuring fair pricing and sustainable practices that benefit entire communities.",
  },
  {
    icon: Shield,
    title: "Quality Excellence",
    description:
      "Every lot undergoes rigorous quality control and cupping to meet the highest international standards before export.",
  },
  {
    icon: Globe,
    title: "Global Partnership",
    description:
      "Connecting Kenyan coffee excellence with specialty roasters worldwide through reliable logistics and transparent communication.",
  },
];

const timeline = [
  {
    step: "Sourcing",
    icon: Users,
    title: "Direct Farmer Relationships",
    description:
      "Partner with cooperatives and estates across Kenya's premier coffee regions",
  },
  {
    step: "Quality Control",
    icon: Award,
    title: "Rigorous Testing",
    description:
      "Professional cupping, moisture testing, and grade classification",
  },
  {
    step: "Export",
    icon: Globe,
    title: "Global Logistics",
    description:
      "Complete documentation and reliable shipping from Port of Mombasa",
  },
];

const licenses = [
  "Kenya Coffee Board Licensed Dealer",
  "Kenya Bureau of Standards Certified",
  "Specialty Coffee Association Member",
  "Fair Trade Verified Partner",
  "Rainforest Alliance Certified",
  "ISO 22000 Food Safety Certified",
];

const team = [
  {
    name: "James Waweru",
    role: "Managing Director",
    bio: "20+ years in coffee trading with deep expertise in Kenyan coffee markets and international export regulations.",
  },
  {
    name: "Sarah Muthoni",
    role: "Quality Control Manager",
    bio: "Licensed Q Grader with extensive experience in coffee cupping and quality assessment across East African origins.",
  },
  {
    name: "David Kimani",
    role: "Logistics Coordinator",
    bio: "Specializes in international shipping and export documentation with focus on timely and secure delivery.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow-warm">
            Rooted in Kenya.
            <span className="block text-accent-gold">Trusted Worldwide.</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
            Since 2006, Jowam Coffee Traders has been connecting Kenya's finest
            coffee with specialty roasters across the globe, building bridges of
            quality and trust.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Jowam Coffee Traders LTD was founded in June 2006 as an
                exporting company for coffees. We promote farmers by providing
                advanced farming technologies to ensure production of
                high-quality coffee that is of great value. The company is
                registered and incorporated under the Company's Act in the Laws
                of Kenya and licensed under the Coffee Directorate Crops Act,
                2013 and the Coffee (Forms) Rules, 2002 as a licensed coffee
                dealer and exporter in Kenya.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                With well over thirty years of experience in the Coffee industry
                coupled with quality control, passion and commitment to service,
                Jowam Coffee Trading Company founders empower clients by
                providing coffees that ensure their product sales remain high.
                We are determined to be the best coffee dealers and merchants in
                the region and beyond, to promote unique coffees to the whole
                consumer world.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                One of our main goals is to promote majority small-scale farmers
                by marketing their coffee and thereby creating a steady source
                of income for them. Today, we work with over 50 cooperatives and
                estates across Kenya's premier coffee regions, ensuring
                traceability from farm to cup while maintaining the highest
                quality standards.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/sustainability">
                  Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-8">
              <Card className="bg-neutral-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-kenyan-green mr-3" />
                    <h3 className="text-2xl font-playfair font-bold text-coffee-brown">
                      Mission
                    </h3>
                  </div>
                  <p className="text-neutral-600">
                    Jowam Coffee Trading Limited is committed to transforming
                    the lives and livelihoods of coffee farmers, socially and
                    economically by availing to them modern inclusive
                    technologies for coffee farming, milling and beans
                    evaluation and ensure production of the best quality coffee
                    that will, in turn, generate more income for them.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-accent-gold mr-3" />
                    <h3 className="text-2xl font-playfair font-bold text-coffee-brown">
                      Vision
                    </h3>
                  </div>
                  <p className="text-neutral-600">
                    To export large volumes of coffee from the region and beyond
                    to international markets, sustain quality and help in
                    reviving coffee farming in Kenya and the region as a viable
                    business entity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every
              relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8 pb-6">
                  <value.icon className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-coffee-brown mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Role in Value Chain */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Our Role in the Coffee Value Chain
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We bridge the gap between Kenya's coffee farmers and international
              specialty roasters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-kenyan-green text-white rounded-full p-3">
                        <item.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-accent-gold text-accent-gold mb-4"
                    >
                      {item.step}
                    </Badge>
                    <h3 className="text-xl font-semibold text-coffee-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Memberships */}
      <section className="py-24 bg-charcoal text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-4">
              Licenses & Memberships
            </h2>
            <p className="text-lg text-warm-cream/80 max-w-2xl mx-auto">
              Our certifications ensure compliance with international standards
              and ethical practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenses.map((license, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6 flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-accent-gold flex-shrink-0" />
                  <span className="text-warm-cream font-medium">{license}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence in
              every cup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-24 h-24 bg-kenyan-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-warm-cream" />
                  </div>
                  <h3 className="text-xl font-semibold text-coffee-brown mb-1">
                    {member.name}
                  </h3>
                  <p className="text-kenyan-green font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-kenyan-green">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-warm-cream mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-warm-cream/90 mb-8">
            Let's discuss how we can support your coffee sourcing needs with
            premium Kenyan green coffee and expert guidance.
          </p>
          <Button size="lg" variant="hero" asChild>
            <Link to="/contact">Talk to Our Trade Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
