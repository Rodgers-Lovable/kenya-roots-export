import type { Metadata } from 'next'
import Catalog from '@/pages/Catalog'

export const metadata: Metadata = {
  title: 'Coffee Catalog - Jowam Coffee Traders',
  description:
    'Browse our current green coffee catalog with detailed lot information, grades, and availability for specialty roasters.',
  alternates: { canonical: '/catalog' },
}

export default Catalog
