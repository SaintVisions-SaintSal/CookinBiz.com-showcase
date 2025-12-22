import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { createClient } from "@supabase/supabase-js"

// Use service role for webhook processing
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        const { product_id, user_id, affiliate_code } = session.metadata || {}

        if (user_id) {
          // Record payment
          await supabaseAdmin.from("payments").insert({
            user_id,
            session_id: session.id,
            tier: product_id,
            status: "completed",
            payment_method: session.payment_method_types?.[0] || "card",
            processed_at: new Date().toISOString(),
          })

          // Update user role based on product
          const roleMap: Record<string, string> = {
            starter: "starter",
            pro: "pro",
            teams: "teams",
            enterprise: "enterprise",
          }

          if (product_id && roleMap[product_id]) {
            await supabaseAdmin.from("profiles").upsert({
              id: user_id,
              role: roleMap[product_id],
            })
          }

          // Process affiliate commission if applicable
          if (affiliate_code) {
            const { data: affiliate } = await supabaseAdmin
              .from("affiliates")
              .select("*")
              .eq("affiliate_code", affiliate_code)
              .single()

            if (affiliate) {
              const commissionRates: Record<string, number> = {
                starter: 8.1,
                pro: 29.1,
                teams: 89.1,
                enterprise: 149.1,
              }

              const commissionAmount = product_id ? commissionRates[product_id] || 0 : 0

              // Create referral record
              await supabaseAdmin.from("referrals").insert({
                affiliate_id: affiliate.id,
                status: "active",
                commission_amount: commissionAmount,
              })

              // Update affiliate totals
              await supabaseAdmin
                .from("affiliates")
                .update({
                  total_referrals: (affiliate.total_referrals || 0) + 1,
                  total_earnings: (Number(affiliate.total_earnings) || 0) + commissionAmount,
                })
                .eq("id", affiliate.id)
            }
          }
        }
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object
        // Handle subscription cancellation
        console.log("Subscription cancelled:", subscription.id)
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object
        // Handle failed payment
        console.log("Payment failed for invoice:", invoice.id)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook processing error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
