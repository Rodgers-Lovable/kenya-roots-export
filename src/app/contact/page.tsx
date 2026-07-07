import type { Metadata } from 'next'
import Contact from '@/views/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Jowam Coffee Traders',
  description:
    'Get in touch with Jowam Coffee Traders for inquiries about green coffee sourcing, pricing, and export logistics.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us - Jowam Coffee Traders',
    description: 'Get in touch with Jowam Coffee Traders for inquiries about green coffee sourcing, pricing, and export logistics.',
    url: 'https://jowamcoffee.co.ke/contact',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default Contact
