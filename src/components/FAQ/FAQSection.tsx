import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import faqsData from "@/data/faqs.json";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  categories?: string[];
  searchable?: boolean;
  title?: string;
  maxItems?: number;
}

const categoryDisplayNames = {
  general: "General",
  products: "Products",
  sourcing: "Sourcing", 
  ordering: "Ordering",
  shipping: "Shipping",
  quality: "Quality",
  sustainability: "Sustainability",
  payments: "Payments",
  partnerships: "Partnerships",
  support: "Support"
};

export function FAQSection({ 
  categories, 
  searchable = true, 
  title = "Frequently Asked Questions",
  maxItems 
}: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    let faqs = faqsData as FAQ[];
    
    // Filter by categories if specified
    if (categories && categories.length > 0) {
      faqs = faqs.filter(faq => categories.includes(faq.category));
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      faqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }
    
    // Filter by selected category
    if (selectedCategory) {
      faqs = faqs.filter(faq => faq.category === selectedCategory);
    }
    
    // Limit items if maxItems is specified
    if (maxItems) {
      faqs = faqs.slice(0, maxItems);
    }
    
    return faqs;
  }, [categories, searchQuery, selectedCategory, maxItems]);

  const availableCategories = useMemo(() => {
    const categorySet = new Set<string>();
    const faqs = categories 
      ? (faqsData as FAQ[]).filter(faq => categories.includes(faq.category))
      : faqsData as FAQ[];
    
    faqs.forEach(faq => categorySet.add(faq.category));
    return Array.from(categorySet);
  }, [categories]);

  const groupedFAQs = useMemo(() => {
    const groups: Record<string, FAQ[]> = {};
    filteredFAQs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFAQs]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our Kenyan coffee exports, sourcing, and services.
          </p>
        </div>

        {searchable && (
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {availableCategories.length > 1 && (
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </Badge>
                {availableCategories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {categoryDisplayNames[category as keyof typeof categoryDisplayNames] || category}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        {Object.keys(groupedFAQs).length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No FAQs found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedFAQs).map(([category, faqs]) => (
              <div key={category}>
                {!searchQuery && !selectedCategory && availableCategories.length > 1 && (
                  <h3 className="text-xl font-semibold text-primary mb-4 capitalize">
                    {categoryDisplayNames[category as keyof typeof categoryDisplayNames] || category}
                  </h3>
                )}
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq) => (
                    <AccordionItem 
                      key={faq.id} 
                      value={`faq-${faq.id}`}
                      className="border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left font-medium text-card-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}