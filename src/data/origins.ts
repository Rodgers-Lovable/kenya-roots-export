import KirinyagaFarm from "@/assets/kirinyaga-farm.jpg";
import KisiiFarm from "@/assets/kisii-farm.jpg";
import BungomaFarm from "@/assets/bungoma-farm.jpeg";
import NyeriFarm from "@/assets/nyeri-farm.jpg";
import MurangaFarm from "@/assets/muranga-farm.jpeg";

export const regions = [
  {
    name: "Nyeri",
    slug: "nyeri",
    image: NyeriFarm,
    description: "Renowned for bright acidity and wine-like characteristics",
    longDescription:
      "Nyeri is one of Kenya's most prestigious coffee-growing regions, located on the southern slopes of Mount Kenya. The region's high altitude, rich volcanic soils, and distinct wet and dry seasons create ideal conditions for producing some of the world's finest Arabica coffee. Nyeri coffees are famous for their intense wine-like acidity, complex flavor profiles, and distinctive blackcurrant notes that have made them legendary among coffee connoisseurs worldwide.",
    altitude: "1,200-2,000m",
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed", "Natural"],
    cupProfile:
      "Bright, wine-like with blackcurrant and citrus notes, exceptional acidity",
    cooperatives: 15,
    featured: true,
    soilType: "Rich volcanic soil with excellent drainage",
    rainfall: "900-1,200mm annually",
    temperature: "15-25°C average",
    farmingSeason:
      "Two distinct seasons: main crop (October-December) and fly crop (June-August)",
  },
  {
    name: "Kirinyaga",
    slug: "kirinyaga",
    image: KirinyagaFarm,
    description:
      "High altitude coffees from Mount Kenya's slopes with complex fruit flavors",
    longDescription:
      "Kirinyaga County, situated on the eastern slopes of Mount Kenya, is renowned for producing some of Kenya's most exceptional specialty coffees. The region benefits from high altitudes, volcanic soils, and a favorable climate that creates unique microclimates perfect for coffee cultivation. Kirinyaga coffees are characterized by their complex fruit flavors, wine-like acidity, and vibrant citrus undertones. The region's commitment to quality processing and sustainable farming practices has earned it recognition among specialty coffee buyers worldwide.",
    altitude: "1,300-1,900m",
    mainHarvest: "Oct-Jan",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Batian"],
    processing: ["Washed", "Honey"],
    cupProfile:
      "Complex, fruity with wine-like acidity and vibrant citrus undertones",
    cooperatives: 12,
    featured: true,
    soilType: "Deep volcanic soils rich in organic matter",
    rainfall: "1,000-1,400mm annually",
    temperature: "13-23°C average",
    farmingSeason: "Main season peaks October-January, fly crop June-August",
  },
  {
    name: "Kisii",
    slug: "kisii",
    image: KisiiFarm,
    description:
      "High altitude region producing full-bodied coffees with rich chocolate notes",
    longDescription:
      "Kisii County, located in the southwestern highlands of Kenya, represents one of the country's emerging specialty coffee regions. The area's high altitude, consistent rainfall, and rich soils create excellent conditions for coffee cultivation. Kisii coffees are distinguished by their full body, rich chocolate and caramel notes, and sweet lingering finish. The region has invested heavily in quality improvement initiatives, modern processing equipment, and farmer training programs, resulting in consistently high-quality specialty lots.",
    altitude: "1,500-2,000m",
    mainHarvest: "Apr-Jul",
    flyHarvest: "Oct-Dec",
    varietals: ["SL28", "SL34", "Ruiru 11", "Batian"],
    processing: ["Washed", "Natural"],
    cupProfile:
      "Full body with chocolate and caramel hints, sweet lingering finish",
    cooperatives: 8,
    featured: true,
    soilType: "Fertile highland soils with good water retention",
    rainfall: "1,200-1,800mm annually",
    temperature: "16-24°C average",
    farmingSeason:
      "Main harvest April-July, secondary harvest October-December",
  },
  {
    name: "Bungoma",
    slug: "bungoma",
    image: BungomaFarm,
    description:
      "Western Kenya region with emerging specialty coffee characteristics",
    longDescription:
      "Bungoma County, located in western Kenya near the Ugandan border, is an emerging specialty coffee region with tremendous potential. The area's moderate altitude, consistent climate, and fertile soils provide favorable conditions for coffee cultivation. While traditionally known for commercial grade coffee, recent investments in processing infrastructure and farmer training have resulted in improved quality and the emergence of specialty lots. Bungoma coffees are characterized by their well-balanced profile, good body, mild acidity, and clean finish.",
    altitude: "1,400-1,800m",
    mainHarvest: "Oct-Jan",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed"],
    cupProfile: "Well-balanced with good body, mild acidity, and clean finish",
    cooperatives: 6,
    featured: false,
    soilType: "Well-drained loamy soils",
    rainfall: "1,100-1,500mm annually",
    temperature: "18-26°C average",
    farmingSeason:
      "Primary harvest October-January, secondary crop June-August",
  },
  {
    name: "Murang'a",
    slug: "muranga",
    image: MurangaFarm,
    description:
      "Traditional coffee region with fertile soils and consistent quality production",
    longDescription:
      "Murang'a County, one of Kenya's traditional coffee-growing regions, is located in the central highlands south of Mount Kenya. The region has a long history of coffee cultivation dating back to the colonial era and continues to be a significant producer of quality Kenyan coffee. Murang'a's fertile soils, favorable climate, and experienced farmers contribute to the consistent production of clean, bright coffees with good acidity and medium body. The region is known for its traditional washed processing methods and strong cooperative system.",
    altitude: "1,200-1,700m",
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34"],
    processing: ["Washed"],
    cupProfile:
      "Clean, bright with good acidity, medium body, and floral notes",
    cooperatives: 10,
    featured: false,
    soilType: "Red volcanic soils with good fertility",
    rainfall: "900-1,300mm annually",
    temperature: "16-24°C average",
    farmingSeason: "Main crop October-December, fly crop June-August",
  },
  {
    name: "Meru",
    slug: "meru",
    image: NyeriFarm,
    description:
      "Premium coffees from Mount Kenya's eastern slopes, known as the champagne region",
    longDescription:
      "Meru County, often referred to as Kenya's 'champagne region' for coffee, is located on the northeastern slopes of Mount Kenya. The region's unique microclimate, high altitude, and volcanic soils create exceptional conditions for producing premium specialty coffee. Meru coffees are renowned for their bright acidity, complex floral notes, wine-like character, and exceptionally clean finish. The region has a strong tradition of quality processing and is home to some of Kenya's most respected coffee cooperatives and estates.",
    altitude: "1,300-1,800m",
    mainHarvest: "Oct-Dec",
    flyHarvest: "Jun-Aug",
    varietals: ["SL28", "SL34", "Ruiru 11"],
    processing: ["Washed", "Natural"],
    cupProfile:
      "Bright acidity with complex floral notes, wine-like character, and clean finish",
    cooperatives: 9,
    featured: false,
    soilType: "Rich volcanic soils with excellent drainage",
    rainfall: "1,000-1,400mm annually",
    temperature: "14-22°C average",
    farmingSeason:
      "Primary harvest October-December, secondary harvest June-August",
  },
];
