import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OurCoffee from "./pages/OurCoffee";
import Origins from "./pages/Origins";
import OriginDetail from "./pages/OriginDetail";
import Process from "./pages/Process";
import Sustainability from "./pages/Sustainability";
import Insights from "./pages/Insights";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import RequestSamples from "./pages/RequestSamples";
import Catalog from "./pages/Catalog";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/scroll-to-top";
import { useEffect } from "react";
import { useGoogleAnalytics } from "./hooks/use-google-verification";
import { usePlausible } from "./hooks/use-plausible-script";

const queryClient = new QueryClient();

const App = () => {
  useGoogleAnalytics();
  usePlausible("jowamcoffee.co.ke");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/our-coffee" element={<OurCoffee />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/origins" element={<Origins />} />
                <Route path="/origins/:slug" element={<OriginDetail />} />
                <Route path="/process" element={<Process />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<ArticleDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/request-samples" element={<RequestSamples />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
