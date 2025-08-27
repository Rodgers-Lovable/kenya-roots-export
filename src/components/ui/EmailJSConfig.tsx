import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Settings } from "lucide-react";
import { isEmailJSConfigured } from "@/services/emailService";

export function EmailJSConfigAlert() {
  if (isEmailJSConfigured()) {
    return null;
  }

  return (
    <Alert className="mb-6 border-amber-200 bg-amber-50">
      <Settings className="h-4 w-4" />
      <AlertDescription className="ml-2">
        <div className="space-y-2">
          <p className="font-medium text-amber-800">
            EmailJS Configuration Required
          </p>
          <p className="text-amber-700 text-sm">
            To enable form submissions, configure EmailJS with your service credentials. 
            Forms will work once configured, otherwise contact information will be displayed.
          </p>
        </div>
      </AlertDescription>
    </Alert>
  );
}

export function EmailJSSetupInstructions() {
  return (
    <Card className="max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          EmailJS Setup Instructions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <h4 className="font-semibold">1. Create EmailJS Account</h4>
          <p className="text-sm text-neutral-600">
            Sign up for a free account at EmailJS and create a new service.
          </p>
          <Button variant="outline" size="sm" asChild>
            <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer">
              EmailJS.com <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">2. Environment Variables</h4>
          <p className="text-sm text-neutral-600">
            Add these environment variables to your project:
          </p>
          <div className="bg-neutral-100 p-3 rounded text-xs font-mono">
            <div>VITE_EMAILJS_SERVICE_ID=your_service_id</div>
            <div>VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template</div>
            <div>VITE_EMAILJS_TEMPLATE_ID_SAMPLES=your_samples_template</div>
            <div>VITE_EMAILJS_PUBLIC_KEY=your_public_key</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">3. Email Templates</h4>
          <p className="text-sm text-neutral-600">
            Create email templates in EmailJS for:
          </p>
          <ul className="text-sm text-neutral-600 list-disc pl-4 space-y-1">
            <li><strong>Contact Form:</strong> General inquiries and messages</li>
            <li><strong>Sample Requests:</strong> Coffee sample requests with detailed information</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}