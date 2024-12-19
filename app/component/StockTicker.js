'use client'

import { useState, useEffect } from 'react'

export function StockTicker() {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', price: 150.25 },
    { symbol: 'GOOGL', price: 2750.80 },
    { symbol: 'MSFT', price: 305.15 },
    { symbol: 'AMZN', price: 3380.50 },
    { symbol: 'FB', price: 330.75 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => ({
          ...stock,
          price: stock.price + (Math.random() - 0.5) * 5
        }))
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {stocks.map((stock, index) => (
          <span key={index} className="mx-4">
            {stock.symbol}: ${stock.price.toFixed(2)}
          </span>
        ))}
      </div>
    </div>
  )
}

