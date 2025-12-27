import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Play,
  MessageSquare,
  BarChart3,
  Target,
  Code,
  Mic,
  Brain,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Navigation - Apple style minimal */}
      <nav className="relative z-50 border-b border-white/5 bg-black/80 backdrop-blur-2xl sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/transparentsaintsallogo.png"
                alt="SaintSal"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <div className="flex flex-col">
                <span
                  className="text-2xl font-serif font-bold tracking-tight text-gold-gradient"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  SaintSal<sup className="text-xs">™</sup>
                </span>
                <span className="text-[10px] text-white/40 tracking-widest uppercase">
                  By Saint Vision Technologies
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#ai"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
              >
                AI
              </Link>
              <Link
                href="#use-cases"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
              >
                Use Cases
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
              >
                Pricing
              </Link>
              <Link
                href="#affiliate"
                className="text-sm text-amber-400 font-semibold hover:text-amber-300 transition-colors tracking-wide"
              >
                Affiliates
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all tracking-wide"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Apple style large typography */}
      <section className="relative pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-xs font-medium text-amber-400">NEW</span>
            <span className="text-sm text-white/60">SaintSal Enterprise is now available</span>
            <ChevronRight className="w-4 h-4 text-white/40" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">The AI that</span>
            <br />
            <span className="text-gold-gradient">builds wealth.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Trading. Real Estate. Business Intelligence. All powered by SaintSal AI.
            <br className="hidden md:block" />
            Start free. Scale infinitely.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/auth/signup"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all text-lg"
            >
              Start building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white transition-all text-lg"
            >
              <Play className="w-5 h-5" />
              Watch demo
            </Link>
          </div>

          {/* Hero visual - SaintSal robot */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
              <div className="rounded-[20px] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src="/images/svt-office.png"
                  alt="Saint Vision Technologies Office"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-white/40 mb-8">Trusted by entrepreneurs worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {["12,000+ Active Users", "$2.4M+ Paid to Affiliates", "50,000+ AI Queries Daily", "4.9/5 Rating"].map(
              (stat, i) => (
                <div key={i} className="text-sm font-medium text-white/60">
                  {stat}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* SaintSal AI Section - The Star */}
      <section id="ai" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-400 text-sm font-medium mb-4">SAINTSAL AI</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              Meet your AI
              <br />
              <span className="text-gold-gradient">business partner.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              SaintSal understands your goals, analyzes markets, and delivers actionable insights 24/7.
            </p>
          </div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MessageSquare,
                title: "Natural Conversations",
                description:
                  "Talk to SaintSal like a trusted advisor. Ask anything about business, investing, or strategy.",
              },
              {
                icon: Brain,
                title: "Deep Analysis",
                description: "Get comprehensive market analysis, property valuations, and investment recommendations.",
              },
              {
                icon: Mic,
                title: "Voice Enabled",
                description: "Speak naturally. SaintSal listens, understands, and responds with voice or text.",
              },
              {
                icon: Code,
                title: "Code Generation",
                description:
                  "Need automations? SaintSal writes code, builds integrations, and automates your workflow.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center mb-4 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Chat Preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <Image src="/images/thatdripbottomsaintsallogo.png" alt="SaintSal" width={32} height={32} />
                </div>
                <span className="text-sm font-medium">SaintSal Chat</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 ml-auto">Online</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">You</div>
                  <div className="flex-1 p-4 rounded-2xl bg-white/5 text-sm">
                    {"Analyze this property for wholesale potential: 123 Main St, Atlanta GA. ARV around $280k."}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden">
                    <Image src="/images/thatdripbottomsaintsallogo.png" alt="SaintSal" width={32} height={32} />
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-sm">
                    <p className="text-amber-400 font-medium mb-2">Property Analysis Complete</p>
                    <p className="text-white/70 mb-3">Based on comps and market data for Atlanta:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-black/30">
                        <span className="text-white/50">ARV:</span> <span className="text-white">$280,000</span>
                      </div>
                      <div className="p-2 rounded bg-black/30">
                        <span className="text-white/50">MAO (70%):</span>{" "}
                        <span className="text-green-400">$196,000</span>
                      </div>
                      <div className="p-2 rounded bg-black/30">
                        <span className="text-white/50">Repair Est:</span> <span className="text-white">$25,000</span>
                      </div>
                      <div className="p-2 rounded bg-black/30">
                        <span className="text-white/50">Max Offer:</span>{" "}
                        <span className="text-amber-400">$171,000</span>
                      </div>
                    </div>
                    <p className="text-white/50 mt-3 text-xs">
                      {
                        "Recommendation: Strong wholesale opportunity if acquired under $165k. Market showing 12% YoY appreciation."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-400 text-sm font-medium mb-4">USE CASES</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              One platform.
              <br />
              <span className="text-white/50">Endless possibilities.</span>
            </h2>
          </div>

          {/* Real Estate */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Real Estate</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-semibold mb-6">
                Wholesale deals.
                <br />
                <span className="text-blue-400">Simplified.</span>
              </h3>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Find motivated sellers, analyze properties instantly, calculate MAO with precision, and manage your
                entire deal pipeline. SaintSal handles the numbers so you can focus on closing.
              </p>
              <div className="space-y-4">
                {[
                  "Instant property analysis & ARV calculations",
                  "Automated deal scoring (A/B/C/D)",
                  "Comp analysis from multiple data sources",
                  "Pipeline management & follow-up automation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="text-sm text-white/50 mb-4">Deal Pipeline</div>
                <div className="space-y-3">
                  {[
                    {
                      address: "456 Oak Ave",
                      status: "Hot Lead",
                      score: "A",
                      value: "$45k profit",
                      color: "text-green-400",
                    },
                    {
                      address: "789 Pine St",
                      status: "Under Contract",
                      score: "B",
                      value: "$28k profit",
                      color: "text-blue-400",
                    },
                    {
                      address: "321 Elm Dr",
                      status: "Due Diligence",
                      score: "A",
                      value: "$52k profit",
                      color: "text-amber-400",
                    },
                  ].map((deal, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <div>
                        <div className="font-medium text-white">{deal.address}</div>
                        <div className="text-xs text-white/50">{deal.status}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${deal.color}`}>{deal.value}</div>
                        <div className="text-xs text-white/50">Score: {deal.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trading */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-white/50">Portfolio Overview</div>
                  <div className="text-sm text-green-400">+12.4% today</div>
                </div>
                <div className="text-4xl font-semibold text-white mb-6">$124,847.32</div>
                <div className="h-32 flex items-end gap-1">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-green-500/50 to-green-400/80 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Trading</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-semibold mb-6">
                Trade smarter.
                <br />
                <span className="text-green-400">Not harder.</span>
              </h3>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Real-time market data, AI-powered signals, and portfolio tracking. Whether you trade stocks, crypto, or
                forex - SaintSal has you covered.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time market data & charts",
                  "AI-generated trading signals",
                  "Portfolio tracking & analytics",
                  "Risk management tools",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Intelligence */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">Business Intelligence</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-semibold mb-6">
                Data-driven
                <br />
                <span className="text-purple-400">decisions.</span>
              </h3>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                Turn your business data into actionable insights. Track KPIs, visualize trends, and make smarter
                decisions with AI-powered analytics.
              </p>
              <div className="space-y-4">
                {[
                  "Custom dashboards & reports",
                  "KPI tracking & alerts",
                  "Competitor analysis",
                  "Revenue forecasting",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Revenue", value: "$847K", change: "+24%", positive: true },
                    { label: "Customers", value: "12,847", change: "+18%", positive: true },
                    { label: "Conversion", value: "4.2%", change: "+0.8%", positive: true },
                    { label: "Churn", value: "2.1%", change: "-0.3%", positive: true },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs text-white/50 mb-1">{stat.label}</div>
                      <div className="text-2xl font-semibold text-white">{stat.value}</div>
                      <div className={`text-xs ${stat.positive ? "text-green-400" : "text-red-400"}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP Portfolio Section - Enhanced */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] mb-6 uppercase">Intellectual Property</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8">
              Quadruple IP Protection
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 animate-gradient">
                $200-400M Portfolio
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">2 Patents + 2 Trademarks</span> = Impenetrable market position
              <br />
              Everything that has been developed — and everything that will be developed to monetize — relies on our
              foundational IP portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "US Patent 10,290,222",
                status: "GRANTED",
                date: "Sept 21, 2015",
                note: "3 yrs before GPT-1",
                value: "$50-100M",
                label: "Base",
                gradient: "from-blue-500/20 to-blue-600/5",
                border: "border-blue-500/30",
                statusColor: "bg-blue-500/20 text-blue-300",
              },
              {
                title: "Patent 19/296,986",
                status: "HACP™ PENDING",
                date: "Aug 10, 2025",
                note: "USPTO Review",
                value: "+$75-125M",
                label: "HACP™ Patent",
                gradient: "from-amber-500/20 to-amber-600/5",
                border: "border-amber-500/30",
                statusColor: "bg-amber-500/20 text-amber-300",
              },
              {
                title: "HACP™ Mark",
                status: "LIVE",
                date: "#99329797",
                note: "Aug 10, 2025",
                value: "+$35-75M",
                label: "HACP™ Trademark",
                gradient: "from-green-500/20 to-green-600/5",
                border: "border-green-500/30",
                statusColor: "bg-green-500/20 text-green-300",
              },
              {
                title: "SaintSal™ Mark",
                status: "FILED TODAY",
                date: "#99538313",
                note: "Dec 9, 2025",
                value: "+$40-100M",
                label: "SaintSal™ Mark",
                gradient: "from-purple-500/20 to-purple-600/5",
                border: "border-purple-500/30",
                statusColor: "bg-purple-500/20 text-purple-300",
              },
            ].map((ip, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-3xl bg-gradient-to-b ${ip.gradient} border ${ip.border} hover:border-opacity-60 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10`}
              >
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1.5 rounded-full ${ip.statusColor} text-xs font-bold tracking-wide`}>
                    {ip.status}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">{ip.label}</div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{ip.title}</h3>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="text-sm text-white/70 font-medium">{ip.date}</div>
                  </div>
                  <div className="text-xs text-white/50 italic">{ip.note}</div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                    {ip.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/30 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent animate-shimmer" />
            <div className="relative z-10">
              <div className="text-white/50 text-lg mb-3">BlueIron $18M Loan</div>
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
                4.5-9% LTV
              </div>
              <div className="text-white/70 text-lg max-w-2xl mx-auto">
                <span className="text-white font-semibold">Ultra-Conservative.</span> Strongest collateral position in
                IP lending history — <span className="text-green-400">4 layers of protection</span>.
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block px-8 py-4 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="text-amber-400 font-bold text-lg">4x multiplier</span>
              <span className="text-white/60 text-lg"> from dual patents + dual trademark protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Suite */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium mb-4">THE SAINTSAL SUITE</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Everything you need.
              <br />
              <span className="text-white/50">Nothing you don't.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Console", desc: "Command center", icon: Target },
              { name: "Chat", desc: "AI advisor", icon: MessageSquare },
              { name: "Business", desc: "Intelligence", icon: BarChart3 },
              { name: "Brokerage", desc: "Trading", icon: TrendingUp },
              { name: "Enterprise", desc: "White-label", icon: Building2 },
            ].map((product, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/10 flex items-center justify-center mx-auto mb-4 group-hover:from-amber-400/20 group-hover:to-amber-600/20 transition-colors">
                  <product.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="font-medium text-white mb-1">SaintSal {product.name}</div>
                <div className="text-sm text-white/50">{product.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Section - THE STAR */}
      <section id="affiliate" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-green-500/10 to-green-500/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">30% RECURRING COMMISSION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              The most lucrative
              <br />
              <span className="text-green-400">affiliate program.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Join thousands earning recurring passive income. No caps. No limits.
            </p>
          </div>

          {/* Commission Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { tier: "Starter", price: 27, commission: 8.1 },
              { tier: "Pro", price: 97, commission: 29.1 },
              { tier: "Teams", price: 297, commission: 89.1 },
              { tier: "Enterprise", price: 497, commission: 149.1, highlight: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white/[0.03] border ${item.highlight ? "border-green-500/30 ring-1 ring-green-500/20" : "border-white/10"}`}
              >
                {item.highlight && <div className="text-xs font-medium text-green-400 mb-2">HIGHEST EARNINGS</div>}
                <div className="text-white/60 text-sm">{item.tier}</div>
                <div className="text-2xl font-semibold text-white mb-4">
                  ${item.price}
                  <span className="text-white/40 text-sm">/mo</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-white/50">You earn</div>
                  <div className="text-3xl font-semibold text-green-400">
                    ${item.commission.toFixed(2)}
                    <span className="text-green-400/60 text-sm">/mo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Earnings Example */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
              <div className="text-white/60 mb-2">10 Enterprise referrals =</div>
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">$1,491/mo</div>
              <div className="text-white/70 text-lg max-w-2xl mx-auto">Recurring passive income</div>
              <Link
                href="/dashboard/affiliates"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-400 transition-all"
              >
                Join Affiliate Program
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/40 text-sm mt-4">Free to join. Start earning today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-medium mb-4">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Simple pricing.
              <br />
              <span className="text-white/50">No surprises.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: 27,
                description: "For getting started",
                features: ["500 AI queries/mo", "50 property scores", "Voice agent", "3 team members"],
                cta: "Start free trial",
              },
              {
                name: "Pro",
                price: 97,
                description: "For entrepreneurs",
                features: [
                  "Unlimited AI queries",
                  "Unlimited property scores",
                  "War Room access",
                  "Affiliate dashboard",
                  "10 team members",
                ],
                popular: true,
                cta: "Start free trial",
              },
              {
                name: "Teams",
                price: 297,
                description: "For growing teams",
                features: [
                  "Everything in Pro",
                  "Trading platform",
                  "Unlimited members",
                  "Custom integrations",
                  "Priority support",
                ],
                cta: "Start free trial",
              },
              {
                name: "Enterprise",
                price: 497,
                description: "For organizations",
                features: [
                  "Everything in Teams",
                  "White-label",
                  "Custom AI training",
                  "SLA guarantee",
                  "Dedicated manager",
                ],
                highlight: true,
                cta: "Contact sales",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl ${
                  plan.highlight
                    ? "bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/30"
                    : plan.popular
                      ? "bg-white/[0.04] border-white/20"
                      : "bg-white/[0.02] border-white/10"
                } border`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-medium rounded-full">
                    Best Value
                  </div>
                )}
                <div className="mb-4">
                  <div className="text-lg font-medium text-white">{plan.name}</div>
                  <div className="text-sm text-white/50">{plan.description}</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-semibold text-white">${plan.price}</span>
                  <span className="text-white/50">/mo</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth/signup"
                  className={`block w-full py-3 text-center font-medium rounded-full transition-all ${
                    plan.highlight || plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/transparentsaintsallogo.png"
            alt="SaintSal"
            width={80}
            height={80}
            className="mx-auto mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Ready to build
            <br />
            <span className="text-gold-gradient">your empire?</span>
          </h2>
          <p className="text-xl text-white/50 mb-10">Join 12,000+ entrepreneurs using SaintSal to build wealth.</p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/25 text-lg"
          >
            Get started free
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/images/transparentsaintsallogo.png" alt="SaintSal" width={32} height={32} />
              <span className="text-sm text-white/50">© 2025 Saint Vision Technologies. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
