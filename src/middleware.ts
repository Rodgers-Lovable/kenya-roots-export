import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const SUPABASE_URL = "https://mahviqoiqppiwepcrmpr.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1haHZpcW9pcXBwaXdlcGNybXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTkwNjksImV4cCI6MjA3MTQzNTA2OX0.BRyZR8jOz6FSTascC6hKjq7_l7KahdCr4VPTE6KQnMU"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request })

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options)
        })
      },
    },
  })

  // Refresh session — keeps auth cookies up to date
  const { data: { user } } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  // Protect /admin/* except /admin/auth
  if (pathname.startsWith('/admin') && pathname !== '/admin/auth') {
    if (!user) {
      const loginUrl = new URL('/admin/auth', request.url)
      loginUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Redirect logged-in users away from /admin/auth
  if (pathname === '/admin/auth' && user) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*'],
}
