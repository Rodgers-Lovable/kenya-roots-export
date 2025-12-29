import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useUmamiAnalytics } from "@/hooks/useUmamiAnalytics";
import { isEmailJSConfigured } from "@/services/emailService";
import emailjs from '@emailjs/browser';

interface NewsletterFormProps {
  className?: string;
  variant?: "footer" | "page";
}

export function NewsletterForm({ className = "", variant = "footer" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackNewsletterSignup } = useUmamiAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);

    try {
      if (!isEmailJSConfigured()) {
        toast({
          title: "Newsletter service not configured",
          description: "Please contact us directly at trading@jowamcoffee.com to subscribe",
          variant: "destructive",
        });
        return;
      }

      const templateParams = {
        subscriber_email: email,
        to_email: 'trading@jowamcoffee.com',
        signup_date: new Date().toLocaleDateString(),
      };

      // Use a generic template ID for newsletter subscriptions
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER || 'your_newsletter_template_id',
        templateParams
      );

      if (result.status === 200) {
        trackNewsletterSignup(true);
        toast({
          title: "Successfully subscribed!",
          description: "You'll receive our latest coffee insights and harvest updates.",
        });
        setEmail("");
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly at trading@jowamcoffee.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className={`mt-6 sm:flex sm:max-w-md ${className}`}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          type="email"
          name="newsletter-email"
          id="newsletter-email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-w-0 appearance-none bg-charcoal/50 border-neutral-600 text-warm-cream placeholder:text-neutral-400"
          placeholder="Enter your email"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <Button 
            variant="secondary" 
            type="submit" 
            disabled={isSubmitting || !email}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-4 max-w-md mx-auto ${className}`}>
      <Input 
        placeholder="Your email address" 
        type="email" 
        className="flex-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting || !email}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}