import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Bot,
  Building2,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Shield,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/transparentsaintsallogo.png"
                alt="SaintSal Logo"
                width={50}
                height={50}
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-gold-gradient">SaintSal™</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-white/60 hover:text-amber-400 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-white/60 hover:text-amber-400 transition-colors">
                Pricing
              </Link>
              <Link
                href="#affiliate"
                className="text-sm text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                30% Affiliate Program
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm text-white/80 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link
                href="/dashboard"
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-400">Saint Vision Technologies</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Build Wealth</span>
                <br />
                <span className="text-gold-gradient">With AI Power</span>
              </h1>

              <p className="text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
                Trading, Real Estate Wholesaling, Business Intelligence, and our legendary{" "}
                <span className="text-green-400 font-bold">30% Recurring Affiliate Program</span>. All powered by
                SaintSal AI.
              </p>

              {/* Commission Highlight */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-8">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-sm text-green-400">Affiliate Commission</div>
                    <div className="text-2xl font-bold text-white">
                      Earn up to <span className="text-green-400">$149.10/mo</span> per Enterprise referral
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/dashboard"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-2xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/30 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#affiliate"
                  className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-green-500/30 text-green-400 font-semibold rounded-2xl hover:bg-green-500/10 transition-all text-lg"
                >
                  <Users className="w-5 h-5" />
                  Join Affiliate Program
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-purple-500/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/realistic-20svt.png"
                  alt="Saint Vision Technologies Building"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/5">
            {[
              { value: "$2.4M+", label: "Paid to Affiliates" },
              { value: "12,000+", label: "Active Users" },
              { value: "30%", label: "Recurring Commission" },
              { value: "$497", label: "Enterprise Plan" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-gradient">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">The Complete</span>{" "}
              <span className="text-gold-gradient">SaintSal™ Suite</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Five powerful products. One subscription. Unlimited potential.
            </p>
          </div>

          {/* Product Showcase with Office Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <Image src="/images/svt-office.png" alt="SVT Office" width={800} height={600} className="w-full h-auto" />
            </div>
            <div className="space-y-6">
              {[
                { name: "SaintSal™ Console", desc: "Your AI command center" },
                { name: "SaintSal™ Chat", desc: "24/7 AI business advisor" },
                { name: "SaintSal™ Business", desc: "Intelligence & analytics" },
                { name: "SaintSal™ Brokerage", desc: "Trading platform" },
                { name: "Enterprise", desc: "Full white-label solution" },
              ].map((product, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{product.name}</div>
                    <div className="text-sm text-white/50">{product.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Everything You Need to</span>
              <br />
              <span className="text-gold-gradient">Build Your Empire</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: "SaintSal AI Assistant",
                description:
                  "Your 24/7 AI business advisor. Get instant answers, market analysis, and strategic recommendations.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                icon: TrendingUp,
                title: "Trading Platform",
                description: "Real-time market data, portfolio tracking, and AI-powered trading signals.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Building2,
                title: "Real Estate Wholesaling",
                description: "Find deals, analyze properties, calculate ARV & MAO, and manage your wholesale pipeline.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "30% Affiliate Program",
                description: "Earn recurring commissions on every referral. Build passive income while you sleep.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Business Intelligence",
                description: "Data-driven insights for smarter decisions. Track KPIs and grow your business.",
                gradient: "from-red-500 to-rose-500",
              },
              {
                icon: Zap,
                title: "Deal Pipeline CRM",
                description: "Manage leads, track deals, and close more business with our powerful CRM.",
                gradient: "from-yellow-500 to-amber-500",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Section - THE STAR */}
      <section
        id="affiliate"
        className="relative py-32 px-6 bg-gradient-to-b from-green-500/5 via-green-500/10 to-green-500/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-bold">INDUSTRY-LEADING 30% RECURRING COMMISSION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">The Most Lucrative</span>
              <br />
              <span className="text-green-400">Affiliate Program</span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto">
              Join thousands of partners earning recurring passive income. No caps. No limits. Just pure profit.
            </p>
          </div>

          {/* Commission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { tier: "Starter", price: "$27", commission: "$8.10", color: "border-white/20" },
              { tier: "Pro", price: "$97", commission: "$29.10", color: "border-amber-500/30" },
              { tier: "Teams", price: "$297", commission: "$89.10", color: "border-blue-500/30" },
              {
                tier: "Enterprise",
                price: "$497",
                commission: "$149.10",
                color: "border-purple-500/30",
                highlight: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white/[0.03] border ${item.color} ${item.highlight ? "ring-2 ring-purple-500/50" : ""}`}
              >
                {item.highlight && <div className="text-xs font-bold text-purple-400 mb-2">HIGHEST EARNINGS</div>}
                <div className="text-white/60 text-sm mb-1">{item.tier}</div>
                <div className="text-2xl font-bold text-white mb-3">
                  {item.price}
                  <span className="text-white/40 text-base">/mo</span>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-sm text-white/50">Your Commission</div>
                  <div className="text-3xl font-bold text-green-400">
                    {item.commission}
                    <span className="text-green-400/60 text-base">/mo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Earnings Calculator */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Example Monthly Earnings</h3>
                <p className="text-white/50">See what's possible with the SaintSal Affiliate Program</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-black/30 text-center">
                  <div className="text-white/60 mb-2">5 Enterprise Referrals</div>
                  <div className="text-4xl font-bold text-green-400">$745.50</div>
                  <div className="text-white/40 text-sm">/month recurring</div>
                </div>
                <div className="p-6 rounded-2xl bg-black/30 text-center border-2 border-green-500/30">
                  <div className="text-white/60 mb-2">10 Enterprise Referrals</div>
                  <div className="text-5xl font-bold text-green-400">$1,491</div>
                  <div className="text-white/40 text-sm">/month recurring</div>
                </div>
                <div className="p-6 rounded-2xl bg-black/30 text-center">
                  <div className="text-white/60 mb-2">25 Enterprise Referrals</div>
                  <div className="text-4xl font-bold text-green-400">$3,727.50</div>
                  <div className="text-white/40 text-sm">/month recurring</div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-black/20 text-center">
                <span className="text-white/60">VP Partners earn an additional </span>
                <span className="text-amber-400 font-bold">15% override</span>
                <span className="text-white/60"> on their team's sales!</span>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/dashboard/affiliates"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl hover:from-green-400 hover:to-emerald-400 transition-all shadow-2xl shadow-green-500/30 text-xl"
                >
                  Join Affiliate Program Now
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <p className="text-white/40 text-sm mt-4">Free to join. Start earning today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Simple, Transparent</span>{" "}
              <span className="text-gold-gradient">Pricing</span>
            </h2>
            <p className="text-white/50 text-lg">Choose your plan. Start building wealth today.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Starter",
                price: "$27",
                description: "Perfect for getting started",
                features: [
                  "500 AI queries/month",
                  "50 property scores",
                  "Voice agent access",
                  "3 team members",
                  "Priority support",
                ],
                popular: false,
                affiliateEarn: "$8.10",
              },
              {
                name: "Pro",
                price: "$97",
                description: "For serious entrepreneurs",
                features: [
                  "Unlimited AI queries",
                  "Unlimited property scores",
                  "War Room access",
                  "Coding agent",
                  "Affiliate dashboard",
                  "10 team members",
                ],
                popular: true,
                affiliateEarn: "$29.10",
              },
              {
                name: "Teams",
                price: "$297",
                description: "For growing teams",
                features: [
                  "Everything in Pro",
                  "Trading platform",
                  "Unlimited team members",
                  "Custom integrations",
                  "Dedicated support",
                ],
                popular: false,
                affiliateEarn: "$89.10",
              },
              {
                name: "Enterprise",
                price: "$497",
                description: "For large organizations",
                features: [
                  "Everything in Teams",
                  "White-label options",
                  "Custom AI training",
                  "SLA guarantee",
                  "Dedicated manager",
                  "Full API access",
                ],
                popular: false,
                enterprise: true,
                affiliateEarn: "$149.10",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-3xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/30"
                    : plan.enterprise
                      ? "bg-gradient-to-b from-purple-500/10 to-transparent border-purple-500/30"
                      : "bg-white/[0.02] border-white/[0.05]"
                } border`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                {plan.enterprise && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
                    Best Value
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.enterprise ? "text-purple-400" : "text-amber-400"}`}>
                    {plan.price}
                  </span>
                  <span className="text-white/40">/mo</span>
                </div>
                <p className="text-white/50 text-sm mb-4">{plan.description}</p>

                {/* Affiliate Earn Tag */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                  <span className="text-xs text-green-400">Affiliates earn {plan.affiliateEarn}/mo</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className={`w-4 h-4 ${plan.enterprise ? "text-purple-400" : "text-amber-400"}`} />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/dashboard"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500"
                      : plan.enterprise
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400"
                        : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
              <Image
                src="/images/the-20best-20main-20logo-20-2b-20cookin.png"
                alt="SaintSal Logo"
                width={120}
                height={120}
                className="mx-auto mb-8 rounded-2xl"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Start</span>{" "}
                <span className="text-gold-gradient">Cookin' Capital?</span>
              </h2>
              <p className="text-white/60 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs building wealth with SaintSal. Start free, upgrade when ready, and earn
                30% for every referral.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="group flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-2xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/30 text-xl"
                >
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/dashboard/affiliates"
                  className="flex items-center gap-2 px-10 py-5 bg-green-500/10 border border-green-500/30 text-green-400 font-bold rounded-2xl hover:bg-green-500/20 transition-all text-xl"
                >
                  <DollarSign className="w-6 h-6" />
                  Earn 30% Commission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/cookincaplogo.png"
                alt="Cookin Capital Logo"
                width={50}
                height={50}
                className="rounded-xl"
              />
              <span className="text-lg font-bold text-gold-gradient">Cookin' Capital</span>
            </div>
            <p className="text-white/40 text-sm">© 2025 Saint Vision Technologies LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">
                Terms
              </Link>
              <Link
                href="/dashboard/affiliates"
                className="text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                Affiliates
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
