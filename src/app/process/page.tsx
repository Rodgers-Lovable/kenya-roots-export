import type { Metadata } from 'next'
import Process from '@/views/Process'

export const metadata: Metadata = {
  title: 'Our Process - Jowam Coffee Traders',
  description:
    'Learn about Jowam Coffee Traders\' rigorous coffee processing and quality assurance process from farm to export.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Our Process - Jowam Coffee Traders',
    description: "Learn about Jowam Coffee Traders' rigorous coffee processing and quality assurance process from farm to export.",
    url: 'https://jowamcoffee.co.ke/process',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default Process
