"use client"

import { useState } from "react"
import { Building2, MapPin, DollarSign, TrendingUp, Calculator, Home, Plus } from "lucide-react"

export default function RealEstatePage() {
  const [activeTab, setActiveTab] = useState("deals")

  const deals = [
    {
      address: "123 Main St, Houston, TX",
      arv: 250000,
      askingPrice: 150000,
      repairCost: 35000,
      mao: 140000,
      profit: 25000,
      status: "Active",
    },
    {
      address: "456 Oak Ave, Dallas, TX",
      arv: 320000,
      askingPrice: 180000,
      repairCost: 45000,
      mao: 179000,
      profit: 35000,
      status: "Under Contract",
    },
    {
      address: "789 Pine Rd, Austin, TX",
      arv: 450000,
      askingPrice: 280000,
      repairCost: 50000,
      mao: 265000,
      profit: 40000,
      status: "Closed",
    },
  ]

  const calculateMAO = (arv: number, repairs: number) => arv * 0.7 - repairs

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Real Estate Deals</h1>
          <p className="text-neutral-400">Analyze wholesale deals and manage your pipeline.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a106] text-black font-semibold rounded-xl hover:bg-[#b8910a] transition-all">
          <Plus className="w-5 h-5" />
          Add New Deal
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-neutral-400">Active Deals</span>
          </div>
          <div className="text-3xl font-bold text-white">{deals.filter((d) => d.status === "Active").length}</div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Home className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-neutral-400">Under Contract</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {deals.filter((d) => d.status === "Under Contract").length}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-neutral-400">Closed Deals</span>
          </div>
          <div className="text-3xl font-bold text-white">{deals.filter((d) => d.status === "Closed").length}</div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-neutral-400">Total Profit</span>
          </div>
          <div className="text-3xl font-bold text-green-400">
            ${deals.reduce((acc, d) => acc + d.profit, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["deals", "calculator", "properties"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
              activeTab === tab ? "bg-[#d4a106] text-black" : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Deals Table */}
      {activeTab === "deals" && (
        <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-400 font-medium">Property</th>
                <th className="text-right p-4 text-neutral-400 font-medium">ARV</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Asking</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Repairs</th>
                <th className="text-right p-4 text-neutral-400 font-medium">MAO</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Profit</th>
                <th className="text-center p-4 text-neutral-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal, i) => (
                <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-800/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span className="text-white">{deal.address}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right text-white">${deal.arv.toLocaleString()}</td>
                  <td className="p-4 text-right text-white">${deal.askingPrice.toLocaleString()}</td>
                  <td className="p-4 text-right text-amber-400">${deal.repairCost.toLocaleString()}</td>
                  <td className="p-4 text-right text-blue-400">${deal.mao.toLocaleString()}</td>
                  <td className="p-4 text-right text-green-400 font-bold">${deal.profit.toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        deal.status === "Active"
                          ? "bg-blue-500/20 text-blue-400"
                          : deal.status === "Under Contract"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {deal.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Calculator */}
      {activeTab === "calculator" && (
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-[#d4a106]" />
              <h2 className="text-xl font-bold text-white">MAO Calculator</h2>
            </div>
            <p className="text-neutral-400 mb-6">
              Calculate your Maximum Allowable Offer using the 70% rule: <br />
              <span className="text-[#d4a106] font-mono">MAO = (ARV × 70%) - Repairs</span>
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">After Repair Value (ARV)</label>
                <input
                  type="number"
                  placeholder="$250,000"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4a106]"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Estimated Repairs</label>
                <input
                  type="number"
                  placeholder="$35,000"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4a106]"
                />
              </div>
              <button className="w-full py-3 bg-[#d4a106] text-black font-semibold rounded-xl hover:bg-[#b8910a] transition-colors">
                Calculate MAO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Properties */}
      {activeTab === "properties" && (
        <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 p-12 text-center">
          <Building2 className="w-12 h-12 mx-auto mb-4 text-neutral-600" />
          <p className="text-neutral-500">No saved properties yet</p>
        </div>
      )}
    </div>
  )
}
