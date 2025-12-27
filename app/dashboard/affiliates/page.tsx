import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { DollarSign, Users, TrendingUp, Trophy, ChevronRight, Wallet, Sparkles } from "lucide-react"
import { CopyButton } from "@/components/copy-button"
import { JoinAffiliateButton } from "@/components/join-affiliate-button"

export default async function AffiliatesPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: affiliate } = await supabase.from("affiliates").select("*").eq("user_id", user?.id).maybeSingle()

  const isAffiliate = !!affiliate

  // Generate referral link
  const referralCode = affiliate?.affiliate_code || user?.id?.slice(0, 8).toUpperCase()
  const referralLink = `${process.env.NEXT_PUBLIC_SITE_URL || "https://cookinbiz.com"}?ref=${referralCode}`

  // Fetch referrals if affiliate
  const { data: referrals } = isAffiliate
    ? await supabase
        .from("referrals")
        .select("*")
        .eq("affiliate_id", affiliate?.id)
        .order("created_at", { ascending: false })
        .limit(10)
    : { data: [] }

  const commissionTiers = [
    { name: "Starter", price: 27, commission: 8.1, color: "border-neutral-700 bg-neutral-900/50" },
    { name: "Pro", price: 97, commission: 29.1, color: "border-amber-500/30 bg-amber-500/5" },
    { name: "Teams", price: 297, commission: 89.1, color: "border-blue-500/30 bg-blue-500/5" },
    {
      name: "Enterprise",
      price: 497,
      commission: 149.1,
      color: "border-purple-500/30 bg-purple-500/5",
      highlight: true,
    },
  ]

  const stats = [
    {
      label: "Total Earnings",
      value: affiliate?.total_earnings ? `$${Number(affiliate.total_earnings).toFixed(2)}` : "$0.00",
      icon: DollarSign,
      color: "text-green-400",
      bg: "bg-green-500/20",
    },
    {
      label: "Active Referrals",
      value: affiliate?.total_referrals?.toString() || "0",
      icon: Users,
      color: "text-amber-400",
      bg: "bg-amber-500/20",
    },
    { label: "Pending Payout", value: "$0.00", icon: Wallet, color: "text-blue-400", bg: "bg-blue-500/20" },
    { label: "Conversion Rate", value: "0%", icon: TrendingUp, color: "text-purple-400", bg: "bg-purple-500/20" },
  ]

  if (!isAffiliate) {
    return (
      <div className="p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">JOIN THE PROGRAM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start earning
              <br />
              <span className="text-green-400">30% recurring commission.</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-8">Free to join. No caps. No limits. Just passive income.</p>
            <JoinAffiliateButton />
          </div>

          {/* Commission Breakdown */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Earn up to <span className="text-green-400">$149.10/mo</span> per referral
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {commissionTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border ${tier.color} ${tier.highlight ? "ring-2 ring-purple-500/50" : ""}`}
                >
                  {tier.highlight && <div className="text-xs font-bold text-purple-400 mb-2">HIGHEST EARNINGS</div>}
                  <div className="text-neutral-400 text-sm mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-white mb-3">
                    ${tier.price}
                    <span className="text-neutral-500 text-base">/mo</span>
                  </div>
                  <div className="pt-3 border-t border-neutral-700">
                    <div className="text-sm text-neutral-500">You Earn</div>
                    <div className="text-3xl font-bold text-green-400">
                      ${tier.commission.toFixed(2)}
                      <span className="text-green-400/60 text-base">/mo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earnings Example */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center mb-12">
            <div className="text-white/60 mb-2">10 Enterprise referrals =</div>
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">$1,491/mo</div>
            <div className="text-white/50 mb-6">Recurring passive income. Forever.</div>
            <JoinAffiliateButton />
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "30% Recurring",
                desc: "Earn commission every month, not just once",
              },
              {
                icon: Users,
                title: "Unlimited Referrals",
                desc: "No caps on how much you can earn",
              },
              {
                icon: Trophy,
                title: "VP Partner Program",
                desc: "Earn 15% override on your team's sales",
              },
            ].map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-center">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-neutral-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-2">
            <Trophy className="w-4 h-4" />
            Partner Status: Active
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Affiliate Dashboard</h1>
          <p className="text-neutral-400">Earn 30% recurring commission on every referral.</p>
        </div>
        <Link
          href="/dashboard/earnings"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all"
        >
          <DollarSign className="w-5 h-5" />
          Request Payout
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Referral Link */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Your Referral Link</h3>
            <p className="text-neutral-400">Share this link and earn 30% recurring commission for life!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-3 bg-black/50 rounded-xl border border-neutral-700 font-mono text-neutral-300 text-sm max-w-md overflow-x-auto">
              {referralLink}
            </div>
            <CopyButton text={referralLink} />
          </div>
        </div>
      </div>

      {/* Commission Breakdown */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-6">Commission Per Tier (30% Recurring)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {commissionTiers.map((tier, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${tier.color} ${tier.highlight ? "ring-2 ring-purple-500/50" : ""}`}
            >
              {tier.highlight && <div className="text-xs font-bold text-purple-400 mb-2">HIGHEST EARNINGS</div>}
              <div className="text-neutral-400 text-sm mb-1">{tier.name}</div>
              <div className="text-2xl font-bold text-white mb-3">
                ${tier.price}
                <span className="text-neutral-500 text-base">/mo</span>
              </div>
              <div className="pt-3 border-t border-neutral-700">
                <div className="text-sm text-neutral-500">You Earn</div>
                <div className="text-3xl font-bold text-green-400">
                  ${tier.commission.toFixed(2)}
                  <span className="text-green-400/60 text-base">/mo</span>
                </div>
                <div className="text-xs text-neutral-500 mt-1">per active referral</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Earnings Calculator */}
      <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 mb-10">
        <h3 className="text-xl font-bold text-white mb-6">Earnings Calculator</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-black/30 text-center">
            <div className="text-neutral-400 mb-2">5 Enterprise Referrals</div>
            <div className="text-4xl font-bold text-green-400">$745.50</div>
            <div className="text-neutral-500 text-sm">/month recurring</div>
            <div className="text-neutral-600 text-xs mt-2">$8,946/year</div>
          </div>
          <div className="p-6 rounded-2xl bg-black/30 text-center border-2 border-green-500/30">
            <div className="text-green-400 text-sm font-bold mb-2">POPULAR GOAL</div>
            <div className="text-neutral-400 mb-2">10 Enterprise Referrals</div>
            <div className="text-5xl font-bold text-green-400">$1,491</div>
            <div className="text-neutral-500 text-sm">/month recurring</div>
            <div className="text-neutral-600 text-xs mt-2">$17,892/year</div>
          </div>
          <div className="p-6 rounded-2xl bg-black/30 text-center">
            <div className="text-neutral-400 mb-2">25 Enterprise Referrals</div>
            <div className="text-4xl font-bold text-green-400">$3,727.50</div>
            <div className="text-neutral-500 text-sm">/month recurring</div>
            <div className="text-neutral-600 text-xs mt-2">$44,730/year</div>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
          <span className="text-neutral-400">VP Partners earn an additional </span>
          <span className="text-amber-400 font-bold">15% override</span>
          <span className="text-neutral-400"> on their team's sales!</span>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Recent Referrals</h3>
          <Link
            href="/dashboard/earnings"
            className="text-sm text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        {referrals && referrals.length > 0 ? (
          <div className="space-y-4">
            {referrals.map((referral: any, i: number) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-black/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold">
                    {referral.referred_email?.charAt(0).toUpperCase() || "?"}
                  </div>
                  <div>
                    <div className="font-medium text-white">{referral.referred_email || "Anonymous"}</div>
                    <div className="text-sm text-neutral-500">{referral.status}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-400">${Number(referral.commission_earned || 0).toFixed(2)}</div>
                  <div className="text-xs text-green-400/60">total earned</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-neutral-500">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No referrals yet. Share your link to start earning!</p>
          </div>
        )}
      </div>
    </div>
  )
}
