import React from 'react'
import { Users, Award, Heart, ShoppingBag, ArrowRight, Sparkles, Leaf, Shield, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, AnimatedCard, AnimatedIcon, fadeInUp, staggerContainer } from '../_components/animated/AnimatedSection'
import { routes } from '../config/routes'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1374&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatedCard className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span>Since 2020</span>
            </AnimatedCard>
            <h1 className="text-5xl font-bold text-white">Our Story</h1>
            <p className="mt-4 text-xl text-white/80">
              Discover the journey behind our passion for quality and innovation
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We're dedicated to providing exceptional products and experiences that enhance your lifestyle. 
              Our mission is to combine quality, innovation, and sustainability in everything we do.
            </p>
            <div className="flex items-center gap-4">
              <AnimatedCard>
                <Link
                  href={routes.products.all}
                  className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedCard>
              <AnimatedCard>
                <Link
                  href="/contact"
                  className="rounded-full border border-gray-900 px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
                >
                  Contact Us
                </Link>
              </AnimatedCard>
            </div>
          </div>
          <AnimatedCard className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1374&auto=format&fit=crop"
              alt="Our Team"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, value: "10K+", label: "Happy Customers" },
              { icon: Award, value: "50+", label: "Awards Won" },
              { icon: Heart, value: "100%", label: "Satisfaction" },
              { icon: ShoppingBag, value: "1K+", label: "Products" }
            ].map((stat, index) => (
              <AnimatedCard key={index} className="group rounded-2xl bg-gray-50 p-8 text-center transition-all hover:bg-gray-100">
                <AnimatedIcon className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition-transform group-hover:scale-110">
                  <stat.icon className="h-8 w-8" />
                </AnimatedIcon>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, title: "Quality", description: "We never compromise on quality. Every product is crafted with attention to detail and built to last." },
              { icon: Sparkles, title: "Innovation", description: "We constantly push boundaries and explore new ideas to bring you the best products and experiences." },
              { icon: Leaf, title: "Sustainability", description: "We're committed to reducing our environmental impact and creating a better future for all." }
            ].map((value, index) => (
              <AnimatedCard key={index} className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <AnimatedIcon className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-transform group-hover:scale-110">
                  <value.icon className="h-6 w-6" />
                </AnimatedIcon>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-gray-600">
            Hear from the people who love our products
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((testimonial, index) => (
            <AnimatedCard key={testimonial} className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center gap-4">
                <AnimatedIcon className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </AnimatedIcon>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <AnimatedIcon key={i} className="h-5 w-5 fill-current">
                    <Star className="h-5 w-5 fill-current" />
                  </AnimatedIcon>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                "The quality of these products is exceptional. I've been a customer for years and have never been disappointed."
              </p>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}

export default AboutPage