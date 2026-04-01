import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jowam Coffee Traders - Premium Kenyan Green Coffee Exporters',
  description:
    'Licensed Kenyan green coffee exporters providing premium arabica coffee in AA, AB, and PB grades to specialty roasters worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
