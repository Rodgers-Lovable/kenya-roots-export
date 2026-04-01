import type { Metadata } from 'next'
import OurCoffee from '@/views/OurCoffee'

export const metadata: Metadata = {
  title: 'Our Coffee - Jowam Coffee Traders',
  description:
    'Explore our premium Kenyan green coffee offerings including AA, AB, and PB grades sourced directly from Kenya\'s finest growing regions.',
  alternates: { canonical: '/our-coffee' },
  openGraph: { title: 'Our Coffee - Jowam Coffee Traders', url: 'https://jowamcoffee.co.ke/our-coffee' },
}

export default OurCoffee
