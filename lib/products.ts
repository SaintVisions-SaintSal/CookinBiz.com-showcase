export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  commissionRate: number
  features: string[]
  popular?: boolean
  enterprise?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for getting started with AI-powered business tools",
    priceInCents: 2700,
    commissionRate: 0.3,
    features: [
      "500 AI queries/month",
      "50 property scores",
      "Voice agent access",
      "3 team members",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professionals who need unlimited access and premium features",
    priceInCents: 9700,
    commissionRate: 0.3,
    popular: true,
    features: [
      "Unlimited AI queries",
      "Unlimited property scores",
      "War Room access",
      "Coding agent",
      "Affiliate dashboard",
      "10 team members",
      "Phone support",
    ],
  },
  {
    id: "teams",
    name: "Teams",
    description: "For growing teams that need collaboration and custom integrations",
    priceInCents: 29700,
    commissionRate: 0.3,
    features: [
      "Everything in Pro",
      "Trading platform",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated support",
      "Advanced analytics",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "White-label solutions with dedicated support and custom AI training",
    priceInCents: 49700,
    commissionRate: 0.3,
    enterprise: true,
    features: [
      "Everything in Teams",
      "White-label options",
      "Custom AI training",
      "SLA guarantee",
      "Dedicated account manager",
      "On-premise deployment",
      "API priority access",
    ],
  },
]

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id)
}

export function calculateCommission(priceInCents: number, rate = 0.3) {
  return Math.round(priceInCents * rate)
}
