import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Standard server client for request-scoped operations (Server Components, Actions, Middleware).
 * This uses the cookies() API and is NOT safe for generateStaticParams or sitemap.ts.
 */
export async function createClient() {
    const cookieStore = await cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
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
                        // The `setAll` method was called from a Server Component.
                    }
                },
            },
        }
    )
}

/**
 * Static server client for build-time operations (generateStaticParams, sitemap.ts).
 * This does NOT use the cookies() API and is safe for all contexts.
 */
export async function createStaticClient() {
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() { return [] },
                setAll() { },
            },
        }
    )
}
