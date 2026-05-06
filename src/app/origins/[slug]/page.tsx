import type { Metadata } from 'next'
import { regions } from '@/data/origins'
import OriginDetail from '@/views/OriginDetail'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const region = regions.find((r) => r.slug === slug)

  if (!region) {
    return { title: 'Origin Not Found - Jowam Coffee Traders' }
  }

  return {
    title: `${region.name} Coffee Region - Jowam Coffee Traders`,
    description: `Discover ${region.name} coffee region in Kenya. ${region.description}. Learn about altitude, harvest seasons, varietals, and unique cup profile characteristics.`,
    alternates: { canonical: `/origins/${slug}` },
  }
}

export default OriginDetail
