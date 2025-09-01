import React from "react";
import { Helmet } from "react-helmet-async";
import { FAQSection } from "@/components/FAQ/FAQSection";
import { FAQJsonLD } from "@/components/FAQ/FAQJsonLD";

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Jowam Coffee Traders</title>
        <meta 
          name="description" 
          content="Find answers to common questions about Jowam Coffee Traders' Kenyan coffee exports, sourcing, ordering, shipping, and services. Get the information you need."
        />
        <meta name="keywords" content="Kenyan coffee FAQ, coffee export questions, green coffee ordering, coffee sourcing Kenya, Jowam Coffee FAQ" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jowamcoffee.co.ke/faqs" />
        <meta property="og:title" content="Frequently Asked Questions - Jowam Coffee Traders" />
        <meta property="og:description" content="Find answers to common questions about Jowam Coffee Traders' Kenyan coffee exports, sourcing, and services." />
        <meta property="og:image" content="/hero-kenya-coffee.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jowamcoffee.co.ke/faqs" />
        <meta property="twitter:title" content="Frequently Asked Questions - Jowam Coffee Traders" />
        <meta property="twitter:description" content="Find answers to common questions about Jowam Coffee Traders' Kenyan coffee exports, sourcing, and services." />
        <meta property="twitter:image" content="/hero-kenya-coffee.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jowamcoffee.co.ke/faqs" />
      </Helmet>
      
      <FAQJsonLD />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Everything you need to know about sourcing premium Kenyan coffee through Jowam Coffee Traders
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us directly for personalized assistance with your coffee sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/request-samples" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Request Samples
            </a>
          </div>
        </div>
      </section>
    </>
  );
}