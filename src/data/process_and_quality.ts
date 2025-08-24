import {
  Users,
  Award,
  Shield,
  Coffee,
  Droplets,
  Package,
  FileText,
  Truck,
} from "lucide-react";
import FarmerImage from '@/assets/farmer.jpeg';
import CuppingImage from '@/assets/cupping.jpeg';
import ShippingImage from '@/assets/shipping.jpg';
import CoffeeExportsImage from '@/assets/exports.jpg';
import CoffeeBagsImage from '@/assets/coffee-bags.jpeg';

export const processSteps = [
  {
    step: "01",
    title: "Sourcing & Partnerships",
    icon: Users,
    image: FarmerImage,
    description: "Building direct relationships with farmers and cooperatives",
    details: [
      "Partner with 50+ cooperatives and estates across Kenya",
      "Direct farmer relationships ensuring fair pricing",
      "Regular field visits and quality assessments",
      "Support for sustainable farming practices",
      "Pre-financing and harvest planning",
    ],
    timeframe: "Year-round relationship building",
  },
  {
    step: "02",
    title: "Processing & Quality Control",
    icon: Droplets,
    image: CuppingImage,
    description: "From cherry to green bean with meticulous quality standards",
    details: [
      "Washed processing for 85% of our coffees",
      "Natural and honey processing for specialty lots",
      "Moisture content monitoring (10-12% target)",
      "Screen size grading and density sorting",
      "Professional cupping by licensed Q Graders",
    ],
    timeframe: "2-4 weeks post-harvest",
  },
  {
    step: "03",
    title: "Storage & Lot Preparation",
    icon: Package,
    image: CoffeeBagsImage,
    description: "Proper storage and preparation for export",
    details: [
      "Climate-controlled warehouse storage",
      "GrainPro barrier bags for moisture protection",
      "Jute bag packaging with lot identification",
      "Final quality control and sample preparation",
      "Inventory management and lot tracking",
    ],
    timeframe: "1-2 weeks preparation",
  },
  {
    step: "04",
    title: "Export Documentation",
    icon: FileText,
    image: CoffeeExportsImage,
    description: "Complete certification and export compliance",
    details: [
      "Phytosanitary certificates from KEPHIS",
      "Certificate of Origin from Kenya Coffee Board",
      "ICO (International Coffee Organization) permits",
      "Commercial invoices and packing lists",
      "Bill of lading and shipping instructions",
    ],
    timeframe: "3-5 business days",
  },
  {
    step: "05",
    title: "Logistics & Shipping",
    icon: Truck,
    image: ShippingImage,
    description: "Reliable shipping from Port of Mombasa worldwide",
    details: [
      "Secure transportation to Port of Mombasa",
      "Container loading and stuffing supervision",
      "Shipping coordination with global partners",
      "Real-time tracking and updates",
      "Insurance coverage for all shipments",
    ],
    timeframe: "2-4 weeks transit time",
  },
];

export const qualityStandards = [
  {
    icon: Award,
    title: "Professional Cupping",
    description: "Every lot cupped by licensed Q Graders using SCAA protocols",
    standard: "85+ Cup Score Minimum",
  },
  {
    icon: Droplets,
    title: "Moisture Content",
    description: "Precise moisture control for optimal storage and shipping",
    standard: "10-12% Moisture Range",
  },
  {
    icon: Coffee,
    title: "Grade Classification",
    description: "Accurate screen size grading and defect analysis",
    standard: "AA/AB/PB Standards",
  },
  {
    icon: Shield,
    title: "Traceability",
    description: "Complete chain of custody from farm to export",
    standard: "100% Lot Traceability",
  },
];
