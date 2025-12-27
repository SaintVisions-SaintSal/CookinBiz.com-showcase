"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Sparkles } from "lucide-react"

export function JoinAffiliateButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleJoin = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/affiliates/join", {
        method: "POST",
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to join affiliate program")
      }

      // Refresh the page to show affiliate dashboard
      router.refresh()
    } catch (error) {
      console.error("[v0] Error joining affiliate program:", error)
      alert(error instanceof Error ? error.message : "Failed to join affiliate program")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleJoin}
      disabled={isLoading}
      className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-green-500/25"
    >
      <Sparkles className="w-5 h-5" />
      {isLoading ? "Joining..." : "Join Affiliate Program - It's Free!"}
    </button>
  )
}
