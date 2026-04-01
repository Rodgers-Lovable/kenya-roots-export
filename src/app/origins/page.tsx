import type { Metadata } from 'next'
import Origins from '@/pages/Origins'

export const metadata: Metadata = {
  title: 'Coffee Origins - Jowam Coffee Traders',
  description:
    'Discover the distinct coffee growing regions of Kenya including Nyeri, Kirinyaga, Embu, and more. Each region offers unique flavor profiles and characteristics.',
  alternates: { canonical: '/origins' },
  openGraph: { title: 'Coffee Origins - Jowam Coffee Traders', url: 'https://jowamcoffee.co.ke/origins' },
}

export default Origins
