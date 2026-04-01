import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from './types'

const SUPABASE_URL = "https://mahviqoiqppiwepcrmpr.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1haHZpcW9pcXBwaXdlcGNybXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTkwNjksImV4cCI6MjA3MTQzNTA2OX0.BRyZR8jOz6FSTascC6hKjq7_l7KahdCr4VPTE6KQnMU"

export async function createSupabaseServerClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // Called from a Server Component — cookie mutations are ignored
        }
      },
    },
  })
}
