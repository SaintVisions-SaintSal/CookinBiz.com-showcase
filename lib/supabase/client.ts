import { createBrowserClient } from "@supabase/ssr"
import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import type { Database } from "@/types/database"

let clientInstance: ReturnType<typeof createBrowserClient<Database>> | null = null
let adminInstance: ReturnType<typeof createSupabaseClient<Database>> | null = null

export function createClient() {
  if (clientInstance) return clientInstance

  clientInstance = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  return clientInstance
}

export function createAdminClient() {
  if (adminInstance) return adminInstance

  adminInstance = createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  )

  return adminInstance
}
