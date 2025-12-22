import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Check if already an affiliate
  const { data: existing } = await supabase.from("affiliates").select("id").eq("user_id", user.id).single()

  if (existing) {
    return NextResponse.json({ error: "Already an affiliate" }, { status: 400 })
  }

  // Generate unique affiliate code
  const affiliateCode = `CC-${user.id.slice(0, 8).toUpperCase()}`

  // Create affiliate record
  const { data, error } = await supabase
    .from("affiliates")
    .insert({
      user_id: user.id,
      affiliate_code: affiliateCode,
      email: user.email,
      commission_rate: 0.3,
      is_active: true,
      total_referrals: 0,
      total_earnings: 0,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating affiliate:", error)
    return NextResponse.json({ error: "Failed to create affiliate" }, { status: 500 })
  }

  return NextResponse.json({ affiliate: data })
}
