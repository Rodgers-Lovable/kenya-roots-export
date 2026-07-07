import type { Metadata } from 'next'
import About from '@/views/About'

export const metadata: Metadata = {
  title: 'About Us - Jowam Coffee Traders',
  description:
    'Learn about Jowam Coffee Traders, a licensed Kenyan green coffee exporter with deep roots in Kenyan coffee culture and direct relationships with farmers.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us - Jowam Coffee Traders',
    description: 'Learn about Jowam Coffee Traders, a licensed Kenyan green coffee exporter with deep roots in Kenyan coffee culture and direct relationships with farmers.',
    url: 'https://jowamcoffee.co.ke/about',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default About
