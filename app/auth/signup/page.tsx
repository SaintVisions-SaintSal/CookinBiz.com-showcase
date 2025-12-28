"use client"
import { Suspense } from "react"
import SignUpForm from "./signup-form"

export default function SignUpPage() {
  return (
    <Suspense fallback={<SignUpLoading />}>
      <SignUpForm />
    </Suspense>
  )
}

function SignUpLoading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 animate-pulse">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-neutral-800 rounded-full mx-auto mb-4" />
            <div className="h-8 bg-neutral-800 rounded w-48 mx-auto mb-2" />
            <div className="h-4 bg-neutral-800 rounded w-64 mx-auto" />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded w-16" />
              <div className="h-12 bg-neutral-800 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded w-20" />
              <div className="h-12 bg-neutral-800 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-neutral-800 rounded w-32" />
              <div className="h-12 bg-neutral-800 rounded" />
            </div>
            <div className="h-12 bg-neutral-800 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
