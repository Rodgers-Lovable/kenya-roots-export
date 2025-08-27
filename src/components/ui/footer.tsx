import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/logo.png";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import {
  COMPANY_LOCATION,
  COMPANY_NAME,
  COMPANY_PRIMARY_EMAIL,
  COMPANY_PRIMARY_TEL,
} from "@/core/constants";
import { navigation } from "@/data/menu_items";

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
              <img
                height={5}
                width={40}
                src={Logo}
                alt="Jowam coffee traders"
              />
              <span className="font-playfair text-xl font-bold text-warm-cream">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-sm leading-6 text-neutral-300">
              Premium Kenyan green coffee exporters connecting specialty
              roasters worldwide with the finest arabica coffee from Kenya's
              premier growing regions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-accent-gold" />
                <span>{COMPANY_LOCATION}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Mail className="h-4 w-4 text-accent-gold" />
                <span>{COMPANY_PRIMARY_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Phone className="h-4 w-4 text-accent-gold" />
                <span>{COMPANY_PRIMARY_TEL}</span>
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
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">
                  Company
                </h3>
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
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">
                  Resources
                </h3>
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
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">
                  Newsletter
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">
                  Stay updated on harvest seasons, new lots, and market
                  insights.
                </p>
                <NewsletterForm variant="footer" />
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-accent-gold">
                  Legal
                </h3>
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
            &copy; {new Date().getFullYear()} Jowam Coffee Traders LTD. All
            rights reserved. Licensed green coffee exporter from Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
