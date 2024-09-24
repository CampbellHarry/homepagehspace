"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const launchDate = new Date('2025-01-01T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = launchDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#181D27] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-white text-center">
          <h1 className="text-7xl font-extrabold mb-4 tracking-tight">
            <span className="text-teal-400 flex items-center justify-center"><img src='favicon.ico' className='w-28' />Space</span>
          </h1>
          <p className="text-3xl font-light text-teal-400 mb-8 tracking-wide">
            Redefining Professional Networking
          </p>
          <p className="text-xl text-[#718096] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            A new platform where authenticity meets opportunity. 
            Connect, share, and grow in a space designed for the modern professional.
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-5xl font-bold mb-1">{value}</div>
                <div className="text-sm uppercase text-[#718096] tracking-wider">{unit}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}