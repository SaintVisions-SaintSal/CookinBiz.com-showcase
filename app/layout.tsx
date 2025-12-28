import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "SaintSal™ - The Everything Platform by Saint Vision Technologies",
    template: "%s | SaintSal™",
  },
  description:
    "SaintSal™ - AI-powered platform for trading, real estate wholesaling, and business intelligence. Backed by 2 patents + 2 trademarks worth $200-400M. Earn 30% recurring commissions ($8.10-$149.10/mo) with our industry-leading affiliate program.",
  keywords: [
    "SaintSal",
    "Saint Vision Technologies",
    "AI platform",
    "trading",
    "real estate wholesaling",
    "business intelligence",
    "affiliate program",
    "30% commission",
    "Cookin Capital",
    "Enterprise $497",
    "HACP",
    "US Patent 10,290,222",
  ],
  openGraph: {
    title: "SaintSal™ - The Everything Platform",
    description: "AI-powered trading, real estate, and business intelligence. 30% affiliate commissions.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0a0a0a]`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(26, 29, 35, 0.95)",
              border: "1px solid rgba(212, 161, 6, 0.2)",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  )
}
