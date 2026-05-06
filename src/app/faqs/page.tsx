import type { Metadata } from 'next'
import FAQs from '@/views/FAQs'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Jowam Coffee Traders',
  description:
    'Find answers to common questions about Jowam Coffee Traders\' Kenyan coffee exports, sourcing, ordering, shipping, and services.',
  alternates: { canonical: '/faqs' },
  openGraph: {
    title: 'Frequently Asked Questions - Jowam Coffee Traders',
    url: 'https://jowamcoffee.co.ke/faqs',
    images: [{ url: '/hero-kenya-coffee.jpg' }],
  },
}

export default FAQs
