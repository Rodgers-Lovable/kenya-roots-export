# EmailJS Integration Setup Guide

This project is configured with EmailJS for form submissions. Follow these steps to set it up:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://emailjs.com) and create a free account
2. Create a new service (Gmail, Outlook, or custom SMTP)
3. Create email templates for:
   - Contact form
   - Sample requests
   - Newsletter subscriptions

## 2. Environment Variables

Add these environment variables to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
VITE_EMAILJS_TEMPLATE_ID_SAMPLES=your_samples_template_id
VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER=your_newsletter_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 3. Email Templates

### Contact Form Template
Template variables:
- `{{from_name}}` - Contact person's name
- `{{from_company}}` - Company name
- `{{from_email}}` - Contact email
- `{{from_country}}` - Country
- `{{from_phone}}` - Phone number
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email

### Sample Request Template
Template variables:
- `{{from_name}}` - Requester's name
- `{{from_company}}` - Company name
- `{{from_email}}` - Contact email
- `{{from_phone}}` - Phone number
- `{{from_website}}` - Company website
- `{{from_country}}` - Country
- `{{from_city}}` - City
- `{{business_type}}` - Type of business
- `{{desired_grades}}` - Coffee grades requested
- `{{preferred_region}}` - Preferred origin region
- `{{process_method}}` - Processing method preference
- `{{roast_profile}}` - Target roast profile
- `{{quantity_interest}}` - Potential order quantity
- `{{current_suppliers}}` - Current coffee suppliers
- `{{volume_requirements}}` - Volume requirements
- `{{timeline}}` - Purchase timeline
- `{{specific_requests}}` - Special requests
- `{{hear_about_us}}` - How they heard about us
- `{{marketing_consent}}` - Marketing consent
- `{{follow_up_consent}}` - Follow-up consent
- `{{to_email}}` - Recipient email

### Newsletter Template
Template variables:
- `{{subscriber_email}}` - Subscriber's email
- `{{signup_date}}` - Signup date
- `{{to_email}}` - Recipient email

## 4. Form Features

### Contact Form (/contact)
- Full contact information collection
- Subject categorization
- Message submission
- Real-time validation
- Success/error feedback

### Sample Request Form (/request-samples)
- Comprehensive coffee preference collection
- Business information gathering
- Grade selection with descriptions
- Region and process preferences
- Volume and timeline planning
- Consent management

### Newsletter Subscription
- Email collection
- Integrated in footer and insights page
- Duplicate prevention
- Confirmation feedback

## 5. Fallback Behavior

If EmailJS is not configured:
- Forms display configuration alert
- Contact information is provided as fallback
- Forms remain functional for UX testing
- No data is lost during configuration

## 6. Security Considerations

- Public key is safe to expose in frontend
- Service ID and template IDs are not sensitive
- Actual email credentials remain secure in EmailJS
- Rate limiting handled by EmailJS service

## 7. Testing

Before going live:
1. Test all forms with real email addresses
2. Verify email delivery to intended recipients
3. Check template formatting and variable substitution
4. Test error handling with invalid inputs
5. Verify success feedback messages