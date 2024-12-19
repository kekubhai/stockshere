'use client'

import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import localFont from 'next/font/local'
import { StockTicker } from "./components/StockTicker"
import { NewsCarousel } from "./components/Newscarousel"
import { Footer } from "./components/Footer"
import { Features } from "./components/Features"
import { Testimonials } from "./components/Testimonial"
import { ContactForm } from "./components/ContactForm"

const StockGlobe3D = dynamic(() => import('@/components/StockGlobe3D').then(mod => mod.StockGlobe3D), { ssr: false })



export default function StocksHereLandingPage() {
  return (
    <div className={`min-h-screen bg-black text-white`}>
      <header className="fixed top-0 left-0 right-0 bg-black z-50 p-4 border-b border-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold animate-pulse">StocksHere</h1>
          <div className="space-x-4">
            <a href="#features" className="hover:text-gray-300">Features</a>
            <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
        <section className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="w-full h-64 mb-8">
            <Suspense fallback={<div className="text-center">Loading 3D Globe...</div>}>
              <StockGlobe3D />
            </Suspense>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">Welcome to the Future of Stock Trading</h2>
          
          <Button 
            className="px-8 py-4 text-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 mb-8"
          >
            Add Your Stocks
          </Button>

          <div className="w-full mb-8">
            <h3 className="text-2xl font-bold mb-4">Live Stock Ticker</h3>
            <StockTicker />
          </div>

          <div className="w-full mb-8">
            <h3 className="text-2xl font-bold mb-4">Latest Stock News</h3>
            <NewsCarousel />
          </div>
        </section>

        <section id="features" className="py-20 bg-white text-black">
          <Features />
        </section>

        <section id="testimonials" className="py-20">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 bg-white text-black">
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

