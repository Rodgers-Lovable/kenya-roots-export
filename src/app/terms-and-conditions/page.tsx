import type { Metadata } from 'next'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import TermsAndConditions from '@/views/TermsAndConditions'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Jowam Coffee Traders',
  description:
    'Read Jowam Coffee Traders\' terms and conditions to understand the rules and regulations for using our services.',
  alternates: { canonical: '/terms-and-conditions' },
}

export default async function TermsAndConditionsPage() {
  const content = await readFile(
    path.join(process.cwd(), 'src/files/terms-and-conditions.md'),
    'utf8',
  )

  return <TermsAndConditions initialContent={content} />
}
