'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, ArrowLeft, Truck, Shield, RefreshCw, ChevronDown, ThumbsUp, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Details from '@/app/_components/details_component/details'
import Reviews from '@/app/_components/details_component/reviews'
import { routes } from '@/app/config/routes'
export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Black')
  const [activeTab, setActiveTab] = useState('description')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely love this t-shirt! The quality is outstanding and it fits perfectly. Will definitely buy more colors.",
      helpful: 24,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&auto=format&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "1 week ago",
      comment: "Great quality and comfortable fit. The only reason for 4 stars is that it runs slightly large.",
      helpful: 15,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&auto=format&fit=crop",
      verified: true
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Perfect for everyday wear. The material is breathable and the color stays vibrant after washing.",
      helpful: 19,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&auto=format&fit=crop",
      verified: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 mb-20">
      {/* Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480"
                alt="Product"
                fill
                className="object-cover"
                priority
              />
              <button className="absolute right-4 top-4 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-all hover:bg-white">
                <Heart className="h-5 w-5 text-gray-900" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480"
                    alt="Product thumbnail"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                {...fadeIn}
                className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
              >
                New Arrival
              </motion.span>
              <motion.h1 
                {...fadeIn}
                className="mt-4 text-4xl font-bold text-gray-900"
              >
                Premium Cotton T-Shirt
              </motion.h1>
              <motion.div 
                {...fadeIn}
                className="mt-4 flex items-center gap-4"
              >
                <span className="text-3xl font-bold text-gray-900">$29.99</span>
                <span className="text-lg text-gray-500 line-through">$39.99</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  Save 25%
                </span>
              </motion.div>
            </div>

            {/* Rating */}
            <motion.div {...fadeIn} className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(128 reviews)</span>
            </motion.div>

            {/* Colors */}
            <motion.div {...fadeIn} className="space-y-4">
              <h3 className="font-semibold text-gray-900">Color</h3>
              <div className="flex gap-3">
                {['Black', 'White', 'Navy', 'Gray'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-2'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Sizes */}
            <motion.div {...fadeIn} className="space-y-4">
              <h3 className="font-semibold text-gray-900">Size</h3>
              <div className="flex flex-wrap gap-3">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Add to Cart */}
            <motion.div 
              {...fadeIn}
              className="space-y-4"
            >
              <button className="w-full rounded-full bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-gray-800">
                Add to Cart
              </button>
            </motion.div>

            {/* Features */}
            <motion.div 
              {...fadeIn}
              className="grid grid-cols-3 gap-4 rounded-2xl bg-gray-100 p-6"
            >
              <div className="text-center">
                <Truck className="mx-auto h-6 w-6 text-gray-900" />
                <p className="mt-2 text-sm font-medium text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over $50</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto h-6 w-6 text-gray-900" />
                <p className="mt-2 text-sm font-medium text-gray-900">Secure Payment</p>
                <p className="text-xs text-gray-600">100% secure checkout</p>
              </div>
              <div className="text-center">
                <RefreshCw className="mx-auto h-6 w-6 text-gray-900" />
                <p className="mt-2 text-sm font-medium text-gray-900">Easy Returns</p>
                <p className="text-xs text-gray-600">30 day return policy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Details & Reviews */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex space-x-8">
                {['description', 'details', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`border-b-2 px-4 py-4 text-sm font-medium transition-all ${
                      activeTab === tab
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="container mx-auto px-4 py-12">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="prose max-w-none"
              >
                <h2 className="text-2xl font-bold">Product Description</h2>
                <p className="mt-4 text-gray-600">
                  Our Premium Cotton T-Shirt is crafted from the finest organic cotton, ensuring both comfort and sustainability. The fabric is pre-shrunk and features a modern fit that looks great on everyone.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="rounded-2xl bg-gray-50 p-6">
                    <h3 className="text-lg font-semibold">Material & Care</h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li>• 100% Organic Cotton</li>
                      <li>• 180 GSM fabric weight</li>
                      <li>• Machine wash cold</li>
                      <li>• Tumble dry low</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-6">
                    <h3 className="text-lg font-semibold">Perfect For</h3>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li>• Casual everyday wear</li>
                      <li>• Layering</li>
                      <li>• Sports and activities</li>
                      <li>• Lounging at home</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'details' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
              >
               <Details />
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
              <Reviews reviews={reviews} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-24 container mx-auto px-4"
      >
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
              {
                id: 1,
                name: "Classic Polo Shirt",
                price: 34.99,
                image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1480",
                category: "Men",
                slug: "classic-polo-shirt",
                description: "A classic polo shirt with a modern fit.",
              },
              {
                id: 2,
                name: "Casual V-Neck Tee",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1480",
                category: "Women",
                slug: "casual-v-neck-tee",
                description: "A comfortable v-neck tee for everyday wear.",
              },
              {
                id: 3,
                name: "Athletic Performance Shirt",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1480",
                category: "Sports",
                slug: "athletic-performance-shirt", 
                description: "Moisture-wicking athletic shirt for maximum performance.",
              },
              {
                id: 4,
                name: "Graphic Print T-Shirt",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1480",
                category: "Unisex",
                slug: "graphic-print-t-shirt",
                description: "Trendy graphic tee with unique artistic design.",
              },
              {
                id: 5,
                name: "Vintage Crew Neck",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1480",
                category: "Men",
                slug: "vintage-crew-neck",
                description: "A vintage crew neck t-shirt with a modern fit.",
              }
          ].map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className=""
            >
                <div className="group  w-[300px] bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={300}
                  className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 px-4">
                    <Link
                        href={routes.products.detail(product.slug) || ''}
                      className="bg-white text-black px-4 py-2 text-sm rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                    >
                      Quick View
                    </Link>
                    <button className="bg-black text-white px-4 py-2 text-sm rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <Link href={routes.products.detail(product.slug) || ''} className="block">
                  <h3 className="text-base font-semibold group-hover:text-gray-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

