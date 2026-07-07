import type { Metadata } from 'next'
import Insights from '@/views/Insights'

export const metadata: Metadata = {
  title: 'Coffee Insights - Jowam Coffee Traders',
  description:
    'Read the latest articles on Kenyan coffee industry, processing, sustainability, and market trends from Jowam Coffee Traders.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Coffee Insights - Jowam Coffee Traders',
    description: 'Read the latest articles on Kenyan coffee industry, processing, sustainability, and market trends from Jowam Coffee Traders.',
    url: 'https://jowamcoffee.co.ke/insights',
    images: [{ url: '/hero-kenya-coffee.jpg', width: 1200, height: 630 }],
  },
}

export default Insights
