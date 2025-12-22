"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function TradingPage() {
  const [activeTab, setActiveTab] = useState("portfolio")

  const portfolio = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 50, price: 178.72, change: 2.34, changePercent: 1.33 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 25, price: 248.5, change: -5.2, changePercent: -2.05 },
    { symbol: "NVDA", name: "NVIDIA Corp.", shares: 30, price: 495.22, change: 12.45, changePercent: 2.58 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 40, price: 378.91, change: 4.12, changePercent: 1.1 },
  ]

  const watchlist = [
    { symbol: "AMZN", name: "Amazon.com", price: 178.25, change: 1.89, changePercent: 1.07 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 141.8, change: -0.95, changePercent: -0.67 },
    { symbol: "META", name: "Meta Platforms", price: 505.95, change: 8.23, changePercent: 1.65 },
  ]

  const totalValue = portfolio.reduce((acc, stock) => acc + stock.price * stock.shares, 0)
  const totalGain = portfolio.reduce((acc, stock) => acc + stock.change * stock.shares, 0)

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Trading Platform</h1>
          <p className="text-neutral-400">Monitor your investments and track market trends.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-all">
            Buy
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all">
            Sell
          </button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-neutral-400">Portfolio Value</span>
          </div>
          <div className="text-3xl font-bold text-white">
            ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 rounded-xl ${totalGain >= 0 ? "bg-green-500/20" : "bg-red-500/20"} flex items-center justify-center`}
            >
              {totalGain >= 0 ? (
                <TrendingUp className="w-5 h-5 text-green-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-400" />
              )}
            </div>
            <span className="text-neutral-400">Today's Gain/Loss</span>
          </div>
          <div className={`text-3xl font-bold ${totalGain >= 0 ? "text-green-400" : "text-red-400"}`}>
            {totalGain >= 0 ? "+" : ""}${totalGain.toFixed(2)}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <PieChart className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-neutral-400">Positions</span>
          </div>
          <div className="text-3xl font-bold text-white">{portfolio.length}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["portfolio", "watchlist", "orders"].map((tab) => (
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

      {/* Portfolio Table */}
      {activeTab === "portfolio" && (
        <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-400 font-medium">Symbol</th>
                <th className="text-left p-4 text-neutral-400 font-medium">Shares</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Price</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Change</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((stock, i) => (
                <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-800/30">
                  <td className="p-4">
                    <div className="font-bold text-white">{stock.symbol}</div>
                    <div className="text-sm text-neutral-500">{stock.name}</div>
                  </td>
                  <td className="p-4 text-white">{stock.shares}</td>
                  <td className="p-4 text-right text-white">${stock.price.toFixed(2)}</td>
                  <td className="p-4 text-right">
                    <div
                      className={`flex items-center justify-end gap-1 ${stock.change >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {stock.change >= 0 ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span>{stock.changePercent.toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right font-bold text-white">
                    ${(stock.price * stock.shares).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Watchlist */}
      {activeTab === "watchlist" && (
        <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-400 font-medium">Symbol</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Price</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Change</th>
                <th className="text-right p-4 text-neutral-400 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((stock, i) => (
                <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-800/30">
                  <td className="p-4">
                    <div className="font-bold text-white">{stock.symbol}</div>
                    <div className="text-sm text-neutral-500">{stock.name}</div>
                  </td>
                  <td className="p-4 text-right text-white">${stock.price.toFixed(2)}</td>
                  <td className="p-4 text-right">
                    <div
                      className={`flex items-center justify-end gap-1 ${stock.change >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {stock.change >= 0 ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span>{stock.changePercent.toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 bg-green-500/10 text-green-400 text-sm rounded-lg hover:bg-green-500/20 transition-colors">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Orders */}
      {activeTab === "orders" && (
        <div className="rounded-2xl bg-neutral-900/50 border border-neutral-800 p-12 text-center">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 text-neutral-600" />
          <p className="text-neutral-500">No pending orders</p>
        </div>
      )}
    </div>
  )
}
