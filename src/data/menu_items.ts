import {
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Our Coffee", href: "/our-coffee" },
    { name: "Origins", href: "/origins" },
    { name: "Process", href: "/process" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Insights", href: "/insights" },
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
