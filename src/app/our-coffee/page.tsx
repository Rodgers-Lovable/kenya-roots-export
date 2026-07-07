import type { Metadata } from 'next'
import OurCoffee from '@/views/OurCoffee'

export const metadata: Metadata = {
  title: 'Our Coffee - Jowam Coffee Traders',
  description:
    'Explore our premium Kenyan green coffee offerings including AA, AB, and PB grades sourced directly from Kenya\'s finest growing regions.',
  alternates: { canonical: '/our-coffee' },
  openGraph: {
    title: 'Our Coffee - Jowam Coffee Traders',
    description: "Explore our premium Kenyan green coffee offerings including AA, AB, and PB grades sourced directly from Kenya's finest growing regions.",
    url: 'https://jowamcoffee.co.ke/our-coffee',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default OurCoffee
