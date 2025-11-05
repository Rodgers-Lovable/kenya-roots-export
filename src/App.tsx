import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
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
import AdminAuth from "./pages/AdminAuth";
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArticlesList from "./pages/admin/ArticlesList";
import ArticleForm from "./pages/admin/ArticleForm";
import { useGoogleAnalytics } from "./hooks/use-google-verification";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAdmin, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/admin/auth" replace />;
  }
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground">You don't have admin privileges.</p>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

const App = () => {
  useGoogleAnalytics();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
                
                {/* Admin Routes */}
                <Route path="/admin/auth" element={<AdminAuth />} />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }>
                  <Route index element={<AdminDashboard />} />
                  <Route path="articles" element={<ArticlesList />} />
                  <Route path="articles/new" element={<ArticleForm />} />
                  <Route path="articles/:id/edit" element={<ArticleForm />} />
                </Route>
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
