'use client'

import React from 'react'
import { Truck, Package, MapPin, Clock, ArrowRight, CheckCircle2, Sparkles, Shield, Globe, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedCard, AnimatedIcon } from '../_components/animated/AnimatedSection'

const ShippingPage = () => {
  const shippingSteps = [
    {
      icon: Package,
      title: "Order Placed",
      description: "Your order has been received and is being processed",
      time: "Today, 10:00 AM",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "In Transit",
      description: "Your package is on its way to you",
      time: "Today, 2:00 PM",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Out for Delivery",
      description: "Your package is with the delivery driver",
      time: "Tomorrow, 9:00 AM",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: CheckCircle2,
      title: "Delivered",
      description: "Your package has been delivered",
      time: "Tomorrow, 3:00 PM",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatedCard className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Sparkles className="h-5 w-5 text-white" />
              <span>Premium Shipping Experience</span>
            </AnimatedCard>
            <h1 className="text-6xl font-bold text-white">Track Your Order</h1>
            <p className="mt-4 text-xl text-white/80">
              Experience seamless tracking from our warehouse to your doorstep
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Shipping Features */}
      <AnimatedSection className="container mx-auto -mt-16 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Express shipping options available",
              color: "from-blue-500 to-blue-600",
              gradient: "bg-gradient-to-r from-blue-500 to-blue-600"
            },
            {
              icon: Shield,
              title: "Secure Packaging",
              description: "Items carefully packed for safety",
              color: "from-purple-500 to-purple-600",
              gradient: "bg-gradient-to-r from-purple-500 to-purple-600"
            },
            {
              icon: Globe,
              title: "Global Shipping",
              description: "Available worldwide",
              color: "from-pink-500 to-pink-600",
              gradient: "bg-gradient-to-r from-pink-500 to-pink-600"
            },
            {
              icon: Zap,
              title: "Real-time Tracking",
              description: "Track your package 24/7",
              color: "from-orange-500 to-orange-600",
              gradient: "bg-gradient-to-r from-orange-500 to-orange-600"
            }
          ].map((item, index) => (
            <AnimatedCard
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`absolute inset-0 ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              <AnimatedIcon className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </AnimatedIcon>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Shipping Timeline */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Shipping Timeline</h2>
            <p className="mt-4 text-gray-600">
              Follow your package's journey from order to delivery
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {shippingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative flex items-start gap-6"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                  <p className="mt-2 text-sm text-gray-500">{step.time}</p>
                </div>
                {index < shippingSteps.length - 1 && (
                  <div className="absolute left-6 top-12 h-16 w-1 bg-gradient-to-b from-gray-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tracking Form */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-2xl">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white">Track Your Package</h2>
              <p className="mt-4 text-white/80">
                Enter your tracking number to get real-time updates
              </p>
              <form className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-white/90 hover:shadow-lg"
                  >
                    <span>Track</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
        </div>
    )
}

export default ShippingPage