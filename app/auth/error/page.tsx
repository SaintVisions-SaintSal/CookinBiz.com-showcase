import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Authentication Error</h1>
          <p className="text-neutral-400 mb-6">
            {params?.error || "An error occurred during authentication. Please try again."}
          </p>
          <Link href="/auth/login">
            <Button className="w-full bg-[#d4a106] hover:bg-[#b8910a] text-black font-semibold h-12">
              Back to Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
