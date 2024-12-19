'use client'

import { useState, useEffect } from 'react'

const newsItems = [
  "Stock Market Reaches All-Time High",
  "Tech Stocks Surge Amid Positive Earnings Reports",
  "Oil Prices Fluctuate Due to Global Demand",
  "Cryptocurrency Market Experiences Volatility",
  "New IPO Launches with Record-Breaking Performance"
]

export function NewsCarousel() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white text-black p-4 rounded">
      <p className="text-lg font-bold">{newsItems[currentNewsIndex]}</p>
    </div>
  )
}

