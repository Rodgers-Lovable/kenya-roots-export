import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Package, Clock, Coffee, Truck, CheckCircle } from "lucide-react";
import heroSamples from "@/assets/jowam-bags-hero.jpg";
import {
  sendSampleRequestEmail,
  isEmailJSConfigured,
  type SampleRequestData,
} from "@/services/emailService";
import { EmailJSConfigAlert } from "@/components/ui/EmailJSConfig";
import { Helmet } from "react-helmet-async";

const gradeOptions = [
  {
    id: "aa",
    label: "AA (Screen 18+)",
    description: "Bright acidity, wine-like characteristics",
  },
  {
    id: "ab",
    label: "AB (Screen 16-17)",
    description: "Balanced cup with excellent body",
  },
  {
    id: "pb",
    label: "PB (Peaberry)",
    description: "Concentrated flavors, limited availability",
  },
];

const regionOptions = [
  { value: "nyeri", label: "Nyeri" },
  { value: "kirinyaga", label: "Kirinyaga" },
  { value: "kisii", label: "Kisii" },
  { value: "bungoma", label: "Bungoma" },
  { value: "muranga", label: "Murang'a" },
  { value: "meru", label: "Meru" },
  { value: "any", label: "No preference" },
];

const processOptions = [
  { value: "washed", label: "Washed Process" },
  { value: "natural", label: "Natural Process" },
  { value: "honey", label: "Honey Process" },
  { value: "any", label: "No preference" },
];

const roastProfiles = [
  { value: "light", label: "Light Roast" },
  { value: "medium-light", label: "Medium-Light" },
  { value: "medium", label: "Medium" },
  { value: "medium-dark", label: "Medium-Dark" },
  { value: "dark", label: "Dark" },
  { value: "multiple", label: "Multiple profiles" },
];

const businessTypes = [
  { value: "roaster", label: "Coffee Roaster" },
  { value: "importer", label: "Coffee Importer" },
  { value: "distributor", label: "Distributor" },
  { value: "cafe", label: "Cafe/Coffee Shop" },
  { value: "other", label: "Other" },
];

const sampleExpectations = [
  {
    icon: Package,
    title: "Sample Size",
    description: "100-250g samples per grade/origin requested",
  },
  {
    icon: Clock,
    title: "Processing Time",
    description: "3-5 business days to prepare and ship samples",
  },
  {
    icon: Truck,
    title: "Shipping",
    description: "Worldwide shipping via DHL/FedEx with tracking",
  },
  {
    icon: Coffee,
    title: "Quality",
    description: "Representative samples from current export lots",
  },
];

export default function RequestSamples() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    city: "",
    businessType: "",

    // Coffee Preferences
    desiredGrades: [] as string[],
    preferredRegion: "",
    processMethod: "",
    targetRoastProfile: "",
    quantityInterest: "",

    // Business Information
    currentSuppliers: "",
    volumeRequirements: "",
    timeline: "",

    // Additional Information
    specificRequests: "",
    hearAboutUs: "",

    // Consent
    marketingConsent: false,
    followUpConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    name: string,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGradeChange = (gradeId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      desiredGrades: checked
        ? [...prev.desiredGrades, gradeId]
        : prev.desiredGrades.filter((id) => id !== gradeId),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!isEmailJSConfigured()) {
        toast({
          title: "Email service not configured",
          description:
            "Please contact us directly via email at trading@jowamcoffee.com",
          variant: "destructive",
        });
        return;
      }

      const sampleRequestData: SampleRequestData = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        country: formData.country,
        city: formData.city,
        businessType: formData.businessType,
        desiredGrades: formData.desiredGrades,
        preferredRegion: formData.preferredRegion,
        processMethod: formData.processMethod,
        targetRoastProfile: formData.targetRoastProfile,
        quantityInterest: formData.quantityInterest,
        currentSuppliers: formData.currentSuppliers,
        volumeRequirements: formData.volumeRequirements,
        timeline: formData.timeline,
        specificRequests: formData.specificRequests,
        hearAboutUs: formData.hearAboutUs,
        marketingConsent: formData.marketingConsent,
        followUpConsent: formData.followUpConsent,
      };

      await sendSampleRequestEmail(sampleRequestData);

      toast({
        title: "Sample request submitted successfully!",
        description:
          "We'll prepare your samples and contact you within 3-5 business days.",
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        country: "",
        city: "",
        businessType: "",
        desiredGrades: [],
        preferredRegion: "",
        processMethod: "",
        targetRoastProfile: "",
        quantityInterest: "",
        currentSuppliers: "",
        volumeRequirements: "",
        timeline: "",
        specificRequests: "",
        hearAboutUs: "",
        marketingConsent: false,
        followUpConsent: true,
      });
    } catch (error) {
      toast({
        title: "Error submitting request",
        description:
          error instanceof Error
            ? error.message
            : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Coffee Samples | Jowam Coffee Traders LTD</title>
        <meta
          name="description"
          content="Request premium Kenyan Arabica coffee samples directly from Jowam Coffee Traders LTD. Explore our unique origins and taste the quality before making your bulk order."
        />
        <link
          rel="canonical"
          href="https://jowamcoffee.co.ke/request-samples"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Request Coffee Samples | Jowam Coffee Traders LTD"
        />
        <meta
          property="og:description"
          content="Request coffee samples from Jowam Coffee Traders LTD and experience the quality of our premium Kenyan Arabica exports before placing your order."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jowamcoffee.co.ke/request-samples"
        />
        <meta
          property="og:image"
          content="https://jowamcoffee.co.ke/images/sample-request.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Request Coffee Samples | Jowam Coffee Traders LTD"
        />
        <meta
          name="twitter:description"
          content="Request premium Kenyan coffee samples directly from Jowam Coffee Traders LTD and taste our quality origins before your bulk order."
        />
        <meta
          name="twitter:image"
          content="https://jowamcoffee.co.ke/images/sample-request.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Request Coffee Samples | Jowam Coffee Traders LTD",
      "url": "https://jowamcoffee.co.ke/request-samples",
      "description": "Request premium Kenyan Arabica coffee samples directly from Jowam Coffee Traders LTD. Explore our unique origins and taste the quality before making your bulk order.",
      "publisher": {
        "@type": "Organization",
        "name": "Jowam Coffee Traders LTD",
        "url": "https://jowamcoffee.co.ke",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jowamcoffee.co.ke/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254 (0) 722 762 945",
          "contactType": "Sales",
          "email": "trading@jowamcoffee.com",
          "areaServed": "Worldwide",
          "availableLanguage": ["English"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nairobi",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        }
      }
    }
  `}</script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-warm-cream overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroSamples}
              alt="Coffee samples preparation and shipping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-accent-gold">
              Request Coffee Samples
            </h1>
            <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
              Experience the exceptional quality of Kenyan coffee with
              professional samples prepared specifically for your roasting and
              cupping needs.
            </p>
          </div>
        </section>

        {/* Sample Expectations */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-neutral-600">
                Professional sampling process designed for specialty coffee
                professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sampleExpectations.map((expectation, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <expectation.icon className="h-10 w-10 text-kenyan-green mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-coffee-brown mb-2">
                      {expectation.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {expectation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Request Form */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-playfair font-bold text-coffee-brown mb-4">
                Sample Request Form
              </h2>
              <p className="text-lg text-neutral-600">
                Please provide detailed information to help us prepare the most
                relevant samples for your needs.
              </p>
            </div>

            <EmailJSConfigAlert />

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Information */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-6">
                    Contact Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                        placeholder="Your country"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        placeholder="https://your-website.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) =>
                          handleInputChange("businessType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coffee Preferences */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-6">
                    Coffee Preferences
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold text-coffee-brown mb-4 block">
                        Desired Coffee Grades * (Select all that apply)
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {gradeOptions.map((grade) => (
                          <div
                            key={grade.id}
                            className="flex items-start space-x-3 p-4 border rounded-lg"
                          >
                            <Checkbox
                              id={grade.id}
                              checked={formData.desiredGrades.includes(
                                grade.id
                              )}
                              onCheckedChange={(checked) =>
                                handleGradeChange(grade.id, checked as boolean)
                              }
                            />
                            <div>
                              <Label
                                htmlFor={grade.id}
                                className="font-semibold cursor-pointer"
                              >
                                {grade.label}
                              </Label>
                              <p className="text-sm text-neutral-600">
                                {grade.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredRegion">
                          Preferred Region
                        </Label>
                        <Select
                          value={formData.preferredRegion}
                          onValueChange={(value) =>
                            handleInputChange("preferredRegion", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred region" />
                          </SelectTrigger>
                          <SelectContent>
                            {regionOptions.map((region) => (
                              <SelectItem
                                key={region.value}
                                value={region.value}
                              >
                                {region.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="processMethod">Process Method</Label>
                        <Select
                          value={formData.processMethod}
                          onValueChange={(value) =>
                            handleInputChange("processMethod", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select process method" />
                          </SelectTrigger>
                          <SelectContent>
                            {processOptions.map((process) => (
                              <SelectItem
                                key={process.value}
                                value={process.value}
                              >
                                {process.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="targetRoastProfile">
                          Target Roast Profile
                        </Label>
                        <Select
                          value={formData.targetRoastProfile}
                          onValueChange={(value) =>
                            handleInputChange("targetRoastProfile", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select roast profile" />
                          </SelectTrigger>
                          <SelectContent>
                            {roastProfiles.map((profile) => (
                              <SelectItem
                                key={profile.value}
                                value={profile.value}
                              >
                                {profile.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="quantityInterest">
                          Potential Order Quantity
                        </Label>
                        <Input
                          id="quantityInterest"
                          type="text"
                          value={formData.quantityInterest}
                          onChange={(e) =>
                            handleInputChange(
                              "quantityInterest",
                              e.target.value
                            )
                          }
                          placeholder="e.g., 5-10 bags, 1 container, etc."
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Information */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-6">
                    Business Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="currentSuppliers">
                        Current Coffee Suppliers/Origins
                      </Label>
                      <Textarea
                        id="currentSuppliers"
                        rows={3}
                        value={formData.currentSuppliers}
                        onChange={(e) =>
                          handleInputChange("currentSuppliers", e.target.value)
                        }
                        placeholder="Tell us about your current coffee sourcing (origins, suppliers, grades, etc.)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="volumeRequirements">
                        Monthly/Annual Volume Requirements
                      </Label>
                      <Textarea
                        id="volumeRequirements"
                        rows={3}
                        value={formData.volumeRequirements}
                        onChange={(e) =>
                          handleInputChange(
                            "volumeRequirements",
                            e.target.value
                          )
                        }
                        placeholder="Describe your typical green coffee volume needs"
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">
                        Timeline for Potential Orders
                      </Label>
                      <Input
                        id="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={(e) =>
                          handleInputChange("timeline", e.target.value)
                        }
                        placeholder="e.g., Within 2 months, Next harvest season, etc."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-6">
                    Additional Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="specificRequests">
                        Specific Requests or Questions
                      </Label>
                      <Textarea
                        id="specificRequests"
                        rows={4}
                        value={formData.specificRequests}
                        onChange={(e) =>
                          handleInputChange("specificRequests", e.target.value)
                        }
                        placeholder="Any specific requirements, questions about processing, shipping, documentation, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="hearAboutUs">
                        How did you hear about us?
                      </Label>
                      <Input
                        id="hearAboutUs"
                        type="text"
                        value={formData.hearAboutUs}
                        onChange={(e) =>
                          handleInputChange("hearAboutUs", e.target.value)
                        }
                        placeholder="Website, referral, trade show, etc."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consent & Submit */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-coffee-brown mb-6">
                    Consent & Preferences
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="followUpConsent"
                        checked={formData.followUpConsent}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "followUpConsent",
                            checked as boolean
                          )
                        }
                      />
                      <Label htmlFor="followUpConsent" className="text-sm">
                        I consent to being contacted about this sample request
                        and related coffee sourcing opportunities. *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "marketingConsent",
                            checked as boolean
                          )
                        }
                      />
                      <Label htmlFor="marketingConsent" className="text-sm">
                        I would like to receive updates about new coffee lots,
                        harvest reports, and market insights.
                      </Label>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-kenyan-green" />
                      <span className="text-sm font-medium text-coffee-brown">
                        By submitting this form, you agree to our sample policy
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-6">
                      Sample preparation and shipping typically takes 3-5
                      business days. We'll contact you with tracking information
                      and follow up for feedback after you've had time to
                      evaluate the samples.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={
                        isSubmitting ||
                        !formData.followUpConsent ||
                        formData.desiredGrades.length === 0
                      }
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>Submitting Request...</>
                      ) : (
                        <>
                          Submit Sample Request
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
