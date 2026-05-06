import type { Metadata } from 'next'
import Process from '@/views/Process'

export const metadata: Metadata = {
  title: 'Our Process - Jowam Coffee Traders',
  description:
    'Learn about Jowam Coffee Traders\' rigorous coffee processing and quality assurance process from farm to export.',
  alternates: { canonical: '/process' },
  openGraph: { title: 'Our Process - Jowam Coffee Traders', url: 'https://jowamcoffee.co.ke/process' },
}

export default Process
