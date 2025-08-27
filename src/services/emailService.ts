import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
const EMAILJS_TEMPLATE_ID_CONTACT =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID ||
  "your_contact_template_id";
const EMAILJS_TEMPLATE_ID_SAMPLES =
  import.meta.env.VITE_EMAILJS_SAMPLE_TEMPLATE_ID || "your_samples_template_id";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY !== "your_public_key") {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  country: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface SampleRequestData {
  // Contact Information
  name: string;
  company: string;
  email: string;
  phone?: string;
  website?: string;
  country: string;
  city: string;
  businessType: string;

  // Coffee Preferences
  desiredGrades: string[];
  preferredRegion?: string;
  processMethod?: string;
  targetRoastProfile?: string;
  quantityInterest?: string;

  // Business Information
  currentSuppliers?: string;
  volumeRequirements?: string;
  timeline?: string;

  // Additional Information
  specificRequests?: string;
  hearAboutUs?: string;

  // Consent
  marketingConsent: boolean;
  followUpConsent: boolean;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_company: formData.company,
      from_email: formData.email,
      from_country: formData.country,
      from_phone: formData.phone || "Not provided",
      subject: formData.subject,
      message: formData.message,
      to_email: "trading@jowamcoffee.com",
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    if (result.status !== 200) {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error(
      "Failed to send message. Please try again or contact us directly."
    );
  }
};

export const sendSampleRequestEmail = async (
  formData: SampleRequestData
): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_company: formData.company,
      from_email: formData.email,
      from_phone: formData.phone || "Not provided",
      from_website: formData.website || "Not provided",
      from_country: formData.country,
      from_city: formData.city,
      business_type: formData.businessType,

      desired_grades: formData.desiredGrades.join(", "),
      preferred_region: formData.preferredRegion || "No preference",
      process_method: formData.processMethod || "No preference",
      roast_profile: formData.targetRoastProfile || "Not specified",
      quantity_interest: formData.quantityInterest || "Not specified",

      current_suppliers: formData.currentSuppliers || "Not provided",
      volume_requirements: formData.volumeRequirements || "Not specified",
      timeline: formData.timeline || "Not specified",

      specific_requests: formData.specificRequests || "None",
      hear_about_us: formData.hearAboutUs || "Not specified",

      marketing_consent: formData.marketingConsent ? "Yes" : "No",
      follow_up_consent: formData.followUpConsent ? "Yes" : "No",

      to_email: "trading@jowamcoffee.com",
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_SAMPLES,
      templateParams
    );

    if (result.status !== 200) {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error(
      "Failed to send sample request. Please try again or contact us directly."
    );
  }
};

// Utility function to validate EmailJS configuration
export const isEmailJSConfigured = (): boolean => {
  return (
    EMAILJS_SERVICE_ID !== "your_service_id" &&
    EMAILJS_TEMPLATE_ID_CONTACT !== "your_contact_template_id" &&
    EMAILJS_TEMPLATE_ID_SAMPLES !== "your_samples_template_id" &&
    EMAILJS_PUBLIC_KEY !== "your_public_key"
  );
};
