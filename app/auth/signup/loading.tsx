export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full animate-pulse" />
            <div className="h-8 bg-neutral-800 rounded w-48 mx-auto mb-2 animate-pulse" />
            <div className="h-4 bg-neutral-800 rounded w-64 mx-auto animate-pulse" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded w-16 animate-pulse" />
              <div className="h-10 bg-neutral-800 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded w-20 animate-pulse" />
              <div className="h-10 bg-neutral-800 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded w-32 animate-pulse" />
              <div className="h-10 bg-neutral-800 rounded animate-pulse" />
            </div>
            <div className="h-12 bg-neutral-800 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
