import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
          <div className="w-16 h-16 bg-[#d4a106]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-[#d4a106]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Check Your Email</h1>
          <p className="text-neutral-400 mb-6">
            We've sent you a confirmation link. Please check your email to verify your account before signing in.
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
