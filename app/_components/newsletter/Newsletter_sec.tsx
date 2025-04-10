import React from 'react'
import { Mail, Send } from 'lucide-react'

const Newsletter_sec = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white md:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex animate-bounce items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-sm">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="animate-fade-in text-4xl font-bold tracking-tight">Stay Updated</h2>
          <p className="mt-4 animate-fade-in text-lg text-white/80">
            Subscribe to our newsletter for the latest trends and exclusive offers
          </p>
          
          {/* Newsletter Form */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/5 px-6 py-4 pl-12 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            </div>
            <button className="group flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
              <span>Subscribe</span>
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
            <span className="flex animate-fade-in items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No spam
            </span>
            <span className="flex animate-fade-in items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </span>
            <span className="flex animate-fade-in items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Exclusive offers
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-10 -top-10 h-40 w-40 animate-pulse rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 animate-pulse rounded-full bg-white/5 blur-3xl" />
      </div>
    </div>
  )
}

export default Newsletter_sec