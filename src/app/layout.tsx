import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jowam Coffee Traders - Premium Kenyan Green Coffee Exporters',
  description:
    'Licensed Kenyan green coffee exporters providing premium arabica coffee in AA, AB, and PB grades to specialty roasters worldwide. Direct farmer relationships, complete traceability, expert logistics.',
  keywords:
    'Kenyan coffee export, green coffee Kenya, AA coffee grade, specialty coffee importer, coffee traceability, Nyeri coffee, Kirinyaga coffee, direct trade coffee',
  authors: [{ name: 'Jowam Coffee Traders LTD' }],
  metadataBase: new URL('https://jowamcoffee.co.ke'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Jowam Coffee Traders - Premium Kenyan Green Coffee Exporters',
    description:
      'Licensed Kenyan green coffee exporters providing premium arabica coffee in AA, AB, and PB grades to specialty roasters worldwide.',
    type: 'website',
    url: 'https://jowamcoffee.co.ke',
    images: [{ url: '/hero-kenya-coffee.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jowam Coffee Traders - Premium Kenyan Green Coffee Exporters',
    description:
      'Licensed Kenyan green coffee exporters providing premium arabica coffee to specialty roasters worldwide.',
    images: ['/hero-kenya-coffee.jpg'],
  },
  verification: {
    google: 'dC0Tm4sXGBYVb3ThHpouwmB2t3AfRFq-TgQgA6Nn6eE',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jowam Coffee Traders LTD',
  description:
    'Licensed Kenyan green coffee exporters specializing in premium arabica coffee for specialty roasters worldwide',
  url: 'https://jowamcoffee.co.ke',
  logo: 'https://jowamcoffee.co.ke/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-123-456-789',
    contactType: 'sales',
    email: 'info@jowamcoffee.co.ke',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KE',
    addressLocality: 'Nairobi',
  },
  sameAs: [
    'https://linkedin.com/company/jowam-coffee-traders',
    'https://facebook.com/jowamcoffee',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Script
          src="https://umami.mawirab.com/script.js"
          data-website-id="c4d120e7-565d-43bf-8d1d-a7b7dfb1acc5"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
