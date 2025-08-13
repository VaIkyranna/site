"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Users, Sparkles, ArrowRight, Star } from "lucide-react"

export function SheSpeaksBanner() {
  const [backgroundImage, setBackgroundImage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Curated LGBT/Pride/Transgender images from Unsplash
    const prideImages = [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Pride flag
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Rainbow abstract
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Pride celebration
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Diversity hands
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Community
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Rainbow colors
      "https://images.unsplash.com/photo-1607344645866-009c7d0435c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200&q=80", // Pride march
    ]
    
    const randomImage = prideImages[Math.floor(Math.random() * prideImages.length)]
    setBackgroundImage(randomImage)
    
    // Preload image
    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = randomImage
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
      {/* Dynamic Background Image */}
      {isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-100"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
      
      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-800/60 to-blue-900/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* Animated Pride Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rainbow gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-red-400/30 via-yellow-400/30 to-green-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/20 via-red-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Floating pride elements */}
        <div className="absolute top-32 right-32 text-6xl animate-bounce" style={{ animationDelay: "0.5s" }}>🏳️‍🌈</div>
        <div className="absolute bottom-32 left-32 text-5xl animate-bounce" style={{ animationDelay: "1.5s" }}>🏳️‍⚧️</div>
        <div className="absolute top-1/2 right-1/4 text-4xl animate-bounce" style={{ animationDelay: "2.5s" }}>❤️</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Pride Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 animate-fade-in-up shadow-2xl">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            <span className="text-white font-semibold text-lg">Celebrating Every Identity</span>
            <Star className="w-5 h-5 text-yellow-300 animate-spin" style={{ animationDuration: "3s" }} />
          </div>

          {/* Main Heading with Rainbow Gradient */}
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 animate-fade-in-up leading-none" style={{ animationDelay: "0.1s" }}>
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              SheSpeaks
            </span>
          </h1>

          {/* Powerful Subheading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your Voice. Your Story. Your Power.
          </h2>

          {/* Inspiring Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: "0.3s" }}>
            Join thousands of LGBTQ+ and transgender individuals in a safe space where authenticity is celebrated, stories are shared, and every voice creates change.
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white border-0 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
            >
              <Heart className="w-6 h-6 mr-3 animate-pulse" />
              Join Our Community
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-3 border-white/50 text-white hover:bg-white/20 backdrop-blur-md px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-2xl"
            >
              <Users className="w-6 h-6 mr-3" />
              Explore Stories
            </Button>
          </div>

          {/* Community Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">15K+</div>
              <div className="text-white/80 text-lg font-semibold">Proud Members</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">1.2K+</div>
              <div className="text-white/80 text-lg font-semibold">Stories Shared</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-white/80 text-lg font-semibold">Support & Love</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}