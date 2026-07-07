import type { Metadata } from 'next'
import Catalog from '@/views/Catalog'

export const metadata: Metadata = {
  title: 'Coffee Catalog - Jowam Coffee Traders',
  description:
    'Browse our current green coffee catalog with detailed lot information, grades, and availability for specialty roasters.',
  alternates: { canonical: '/catalog' },
  openGraph: {
    title: 'Coffee Catalog - Jowam Coffee Traders',
    description: 'Browse our current green coffee catalog with detailed lot information, grades, and availability for specialty roasters.',
    url: 'https://jowamcoffee.co.ke/catalog',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default Catalog
