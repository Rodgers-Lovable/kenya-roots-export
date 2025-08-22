import { Link } from "react-router-dom";
import { Coffee, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Our Coffee", href: "/our-coffee" },
    { name: "Origins", href: "/origins" },
    { name: "Process", href: "/process" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Request Samples", href: "/request-samples" },
    { name: "Download Catalog", href: "/catalog" },
    { name: "Licenses & Memberships", href: "/licenses" },
    { name: "FAQs", href: "/faqs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-accent-gold" />
              <span className="font-playfair text-xl font-bold text-warm-cream">
                Jowam Coffee Traders
              </span>
            </Link>
            <p className="text-sm leading-6 text-neutral-300">
              Premium Kenyan green coffee exporters connecting specialty roasters 
              worldwide with the finest arabica coffee from Kenya's premier growing regions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-accent-gold" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Mail className="h-4 w-4 text-accent-gold" />
                <span>info@jowamcoffee.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Phone className="h-4 w-4 text-accent-gold" />
                <span>+254 (0) 123 456 789</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-accent-gold transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-neutral-300 hover:text-warm-cream transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-neutral-300 hover:text-warm-cream transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">Newsletter</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">
                  Stay updated on harvest seasons, new lots, and market insights.
                </p>
                <form className="mt-6 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <Input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none bg-charcoal/50 border-neutral-600 text-warm-cream placeholder:text-neutral-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <Button variant="secondary" type="submit">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-neutral-300 hover:text-warm-cream transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-neutral-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-neutral-400">
            &copy; {new Date().getFullYear()} Jowam Coffee Traders LTD. All rights reserved. Licensed green coffee exporter from Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}