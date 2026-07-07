'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useUmamiAnalytics } from '@/hooks/useUmamiAnalytics'

export function HeroCTAButtons() {
  const { trackCTAClick } = useUmamiAnalytics()

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" variant="secondary" asChild onClick={() => trackCTAClick('explore_coffee', 'hero')}>
        <Link href="/our-coffee">
          Explore Our Coffee
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-warm-cream text-warm-cream bg-transparent hover:bg-warm-cream hover:text-charcoal"
        asChild
        onClick={() => trackCTAClick('request_samples', 'hero')}
      >
        <Link href="/request-samples">Request Samples</Link>
      </Button>
    </div>
  )
}
