import type { Metadata } from 'next'
import Origins from '@/views/Origins'

export const metadata: Metadata = {
  title: 'Coffee Origins - Jowam Coffee Traders',
  description:
    'Discover the distinct coffee growing regions of Kenya including Nyeri, Kirinyaga, Embu, and more. Each region offers unique flavor profiles and characteristics.',
  alternates: { canonical: '/origins' },
  openGraph: {
    title: 'Coffee Origins - Jowam Coffee Traders',
    description: 'Discover the distinct coffee growing regions of Kenya including Nyeri, Kirinyaga, Embu, and more. Each region offers unique flavor profiles and characteristics.',
    url: 'https://jowamcoffee.co.ke/origins',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default Origins
