import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FAQSection } from "./FAQSection";

interface PageSpecificFAQProps {
  categories: string[];
  title?: string;
  maxItems?: number;
}

export function PageSpecificFAQ({ 
  categories, 
  title = "Related FAQs", 
  maxItems = 4 
}: PageSpecificFAQProps) {
  return (
    <div className="border-t bg-muted/30">
      <div className="container mx-auto px-4">
        <FAQSection 
          categories={categories}
          searchable={false}
          title={title}
          maxItems={maxItems}
        />
        
        {/* Link to full FAQ page */}
        <div className="text-center pb-16">
          <Link 
            to="/faqs"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            See all FAQs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}