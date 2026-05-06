import type { Metadata } from 'next'
import RequestSamples from '@/views/RequestSamples'

export const metadata: Metadata = {
  title: 'Request Coffee Samples - Jowam Coffee Traders',
  description:
    'Request free green coffee samples from Jowam Coffee Traders. Experience the quality of Kenyan specialty coffee before placing your order.',
  alternates: { canonical: '/request-samples' },
  openGraph: {
    title: 'Request Coffee Samples - Jowam Coffee Traders',
    url: 'https://jowamcoffee.co.ke/request-samples',
  },
}

export default RequestSamples
