import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Nairobi, Kenya", "P.O. Box 12345-00100"],
    primary: "Nairobi, Kenya"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@jowamcoffee.com", "samples@jowamcoffee.com"],
    primary: "info@jowamcoffee.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 (0) 123 456 789", "+254 (0) 123 456 790"],
    primary: "+254 (0) 123 456 789"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM"],
    primary: "EAT (UTC+3)"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24-48 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        country: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow-warm">
            Let's Talk Coffee
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-3xl mx-auto">
            Ready to source premium Kenyan green coffee for your roastery? 
            Our trade team is here to help with samples, pricing, and logistics.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <info.icon className="h-8 w-8 text-kenyan-green mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-coffee-brown mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-neutral-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-neutral-600">
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="samples">Sample Request</SelectItem>
                        <SelectItem value="export">Export Information</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="logistics">Logistics & Shipping</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your coffee sourcing needs, volume requirements, or any specific questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-kenyan-green/10 rounded-lg">
                <p className="text-sm text-kenyan-green font-medium">
                  💡 Response Time: We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-4">
                  How We Can Help
                </h2>
                <p className="text-lg text-neutral-600">
                  Our experienced trade team is ready to assist with all aspects of your Kenyan coffee sourcing needs.
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MessageSquare className="h-6 w-6 text-kenyan-green mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-coffee-brown mb-2">Sample Requests</h3>
                        <p className="text-neutral-600 text-sm">
                          Request samples of specific grades, origins, or processing methods. 
                          We'll prepare 100-250g samples shipped directly to your roastery.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-kenyan-green mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-coffee-brown mb-2">Export Consultations</h3>
                        <p className="text-neutral-600 text-sm">
                          Discuss volume requirements, shipping schedules, documentation, 
                          and logistics for your green coffee imports.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-kenyan-green mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibent text-coffee-brown mb-2">Partnership Opportunities</h3>
                        <p className="text-neutral-600 text-sm">
                          Explore long-term partnerships, private lot sourcing, 
                          and custom processing arrangements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h3 className="text-xl font-playfair font-bold text-coffee-brown mb-4">
                  Our Location
                </h3>
                <div className="bg-neutral-200 rounded-lg p-8 text-center">
                  <MapPin className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                  <p className="text-neutral-600 mb-2">Interactive map coming soon</p>
                  <p className="text-sm text-neutral-500">Nairobi, Kenya - East Africa's Coffee Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-kenyan-green">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-warm-cream mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-warm-cream/90 mb-6">
            For urgent inquiries or immediate sample requests, contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-kenyan-green" asChild>
              <a href="mailto:info@jowamcoffee.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+254123456789">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}