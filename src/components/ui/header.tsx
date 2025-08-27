import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";
import { COMPANY_NAME } from "@/core/constants";
import { navigation } from "@/data/menu_items";


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <img height={5} width={40} src={Logo} alt="Jowam coffee traders" />
            <span className="font-playfair text-xl font-bold text-coffee-brown">
              { COMPANY_NAME }
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-coffee-brown",
                location.pathname === item.href
                  ? "text-coffee-brown"
                  : "text-neutral-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="default" asChild>
            <Link to="/request-samples">Request Samples</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Full screen overlay */}
          <div
            className="fixed inset-0 z-50 bg-coffee-brown/90 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Menu container */}
            <div
              className="flex flex-col h-full w-full animate-slide-in-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-warm-cream/20">
                <Link
                  to="/"
                  className="flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    height={5}
                    width={40}
                    src={Logo}
                    alt="Jowam coffee traders"
                  />
                  <span className="font-playfair text-xl font-bold text-warm-cream">
                    Jowam Coffee Traders
                  </span>
                </Link>
                <button
                  type="button"
                  className="p-2 rounded-md text-warm-cream hover:bg-warm-cream/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation items */}
              <nav className="flex-1 px-6 py-8 bg-coffee-brown backdrop-blur-sm">
                <div className="space-y-4">
                  {navigation.main.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 animate-fade-in",
                        location.pathname === item.href
                          ? "text-coffee-brown bg-warm-cream shadow-lg"
                          : "text-warm-cream hover:bg-warm-cream/10 hover:translate-x-2"
                      )}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-8 border-t border-warm-cream/20">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full bg-warm-cream text-coffee-brown hover:bg-warm-cream/90 font-medium text-lg py-4"
                    asChild
                  >
                    <Link
                      to="/request-samples"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Request Samples
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
