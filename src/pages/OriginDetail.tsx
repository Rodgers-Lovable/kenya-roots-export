import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Mountain,
  Coffee,
  Users,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { regions } from "@/data/origins";


export default function OriginDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const region = regions.find((r) => r.slug === slug);

  useEffect(() => {
    if (region) {
      document.title = `${region.name} Coffee Region - Jowam Coffee Traders`;
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          `Discover ${region.name} coffee region in Kenya. ${region.description}. Learn about altitude, harvest seasons, varietals, and unique cup profile characteristics.`
        );
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
            The coffee region you're looking for doesn't exist or may have been
            moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => navigate("/origins")}>
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
      <section className="relative py-32 gradient-hero text-warm-cream overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${region.image})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              className="text-warm-cream hover:bg-warm-cream/10 hover:text-warm-cream"
              onClick={() => navigate("/origins")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Origins
            </Button>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-accent-gold">
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
                <h3 className="text-xl font-semibold text-coffee-brown mb-4">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Soil Type:</span>
                    <span className="font-medium text-coffee-brown text-right">
                      {region.soilType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Annual Rainfall:</span>
                    <span className="font-medium text-coffee-brown">
                      {region.rainfall}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Temperature:</span>
                    <span className="font-medium text-coffee-brown">
                      {region.temperature}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Farming Season:</span>
                    <span className="font-medium text-coffee-brown text-right">
                      {region.farmingSeason}
                    </span>
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
                  <h3 className="text-xl font-semibold text-coffee-brown">
                    Coffee Varietals
                  </h3>
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
                  <h3 className="text-xl font-semibold text-coffee-brown">
                    Processing Methods
                  </h3>
                </div>
                <div className="space-y-2">
                  {region.processing.map((method, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="mr-2 mb-2"
                    >
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
                  <h3 className="text-xl font-semibold text-coffee-brown">
                    Harvest Seasons
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-neutral-500">Main Harvest</div>
                    <div className="font-medium text-coffee-brown">
                      {region.mainHarvest}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Fly Crop</div>
                    <div className="font-medium text-coffee-brown">
                      {region.flyHarvest}
                    </div>
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
              Experience the unique characteristics of {region.name} coffee
              through our sample program or discuss custom sourcing options for
              your roastery.
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
