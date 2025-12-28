export default function SignupLoading() {
  return (
    <div className="min-h-screen flex">
      {/* Left side skeleton */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-pulse">
          {/* Logo skeleton */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-lg" />
            <div className="h-6 w-32 bg-white/10 rounded" />
          </div>

          {/* Plan badge skeleton */}
          <div className="h-10 w-48 bg-white/10 rounded-full mb-6" />

          {/* Header skeleton */}
          <div className="mb-8 space-y-2">
            <div className="h-8 w-64 bg-white/10 rounded" />
            <div className="h-5 w-48 bg-white/5 rounded" />
          </div>

          {/* OAuth buttons skeleton */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="h-12 bg-white/5 rounded-xl border border-white/10" />
            <div className="h-12 bg-white/5 rounded-xl border border-white/10" />
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6" />

          {/* Form fields skeleton */}
          <div className="space-y-5">
            <div>
              <div className="h-4 w-20 bg-white/10 rounded mb-2" />
              <div className="h-12 bg-white/5 rounded-xl border border-white/10" />
            </div>
            <div>
              <div className="h-4 w-16 bg-white/10 rounded mb-2" />
              <div className="h-12 bg-white/5 rounded-xl border border-white/10" />
            </div>
            <div>
              <div className="h-4 w-20 bg-white/10 rounded mb-2" />
              <div className="h-12 bg-white/5 rounded-xl border border-white/10" />
            </div>
            <div className="h-12 bg-gold-500/20 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-[#0d0f12] to-[#1a1d23] border-l border-white/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px]" />
        </div>
      </div>
    </div>
  )
}
