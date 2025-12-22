import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "SaintSal™ - The Everything Platform | 30% Affiliate Program",
    template: "%s | SaintSal™",
  },
  description:
    "AI-powered platform for trading, real estate wholesaling, and business intelligence. Earn 30% recurring commissions with our industry-leading affiliate program. Enterprise plan at $497/mo.",
  keywords: [
    "AI",
    "trading",
    "real estate",
    "wholesaling",
    "affiliate program",
    "30% commission",
    "SaintSal",
    "Cookin Capital",
    "$497 Enterprise",
  ],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0b0d]`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(26, 29, 35, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  )
}
