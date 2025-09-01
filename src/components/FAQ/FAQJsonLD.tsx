import { Helmet } from "react-helmet-async";
import faqsData from "@/data/faqs.json";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface FAQJsonLDProps {
  categories?: string[];
}

export function FAQJsonLD({ categories }: FAQJsonLDProps) {
  const faqs = categories 
    ? (faqsData as FAQ[]).filter(faq => categories.includes(faq.category))
    : faqsData as FAQ[];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}