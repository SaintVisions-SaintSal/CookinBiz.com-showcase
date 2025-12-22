import { createClient } from "@/lib/supabase/server"
import { DollarSign, Download, Calendar, CreditCard, ArrowUpRight } from "lucide-react"

export default async function EarningsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch affiliate data
  const { data: affiliate } = await supabase.from("affiliates").select("*").eq("user_id", user?.id).single()

  // Fetch referrals with commission data
  const { data: referrals } = affiliate
    ? await supabase
        .from("referrals")
        .select("*, leads(*)")
        .eq("affiliate_id", affiliate.id)
        .order("created_at", { ascending: false })
    : { data: [] }

  const totalEarnings = affiliate?.total_earnings || 0
  const pendingPayout =
    referrals
      ?.filter((r: any) => r.status === "pending")
      .reduce((acc: number, r: any) => acc + Number(r.commission_amount || 0), 0) || 0
  const paidOut = totalEarnings - pendingPayout

  const transactions = [
    {
      date: "Dec 15, 2024",
      type: "Commission",
      description: "Enterprise referral - John D.",
      amount: 149.1,
      status: "Paid",
    },
    { date: "Dec 10, 2024", type: "Commission", description: "Pro referral - Sarah M.", amount: 29.1, status: "Paid" },
    { date: "Dec 5, 2024", type: "Payout", description: "Monthly payout - Stripe", amount: -500, status: "Completed" },
  ]

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Earnings</h1>
          <p className="text-neutral-400">Track your affiliate commissions and request payouts.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all">
          <DollarSign className="w-5 h-5" />
          Request Payout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/30 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-neutral-300">Total Earnings</span>
          </div>
          <div className="text-3xl font-bold text-white">${Number(totalEarnings).toFixed(2)}</div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-neutral-400">Pending</span>
          </div>
          <div className="text-3xl font-bold text-amber-400">${pendingPayout.toFixed(2)}</div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-neutral-400">Paid Out</span>
          </div>
          <div className="text-3xl font-bold text-white">${paidOut.toFixed(2)}</div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-neutral-400">This Month</span>
          </div>
          <div className="text-3xl font-bold text-white">$0.00</div>
        </div>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-white">Transaction History</h2>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        {transactions.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-400 font-medium">Date</th>
                <th className="text-left p-4 text-neutral-400 font-medium">Type</th>
                <th className="text-left p-4 text-neutral-400 font-medium">Description</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Amount</th>
                <th className="text-center p-4 text-neutral-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-800/30">
                  <td className="p-4 text-neutral-400">{tx.date}</td>
                  <td className="p-4 text-white">{tx.type}</td>
                  <td className="p-4 text-neutral-300">{tx.description}</td>
                  <td className={`p-4 text-right font-bold ${tx.amount >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {tx.amount >= 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-12 text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-neutral-600" />
            <p className="text-neutral-500">No transactions yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
