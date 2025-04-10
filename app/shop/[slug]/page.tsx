import React from 'react'
import { Star, Heart, ShoppingCart, ArrowRight, Clock, Tag, Zap, Percent } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter_sec from '@/app/_components/newsletter/Newsletter_sec'

// Mock deals data
const deals = [
  {
    id: 1,
    name: "Summer Collection",
    discount: 40,
    endDate: "2024-03-31",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1374&auto=format&fit=crop",
    products: 24,
    category: "Clothing"
  },
  {
    id: 2,
    name: "Flash Sale",
    discount: 60,
    endDate: "2024-03-25",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop",
    products: 12,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Weekend Special",
    discount: 30,
    endDate: "2024-03-24",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1470&auto=format&fit=crop",
    products: 36,
    category: "Home & Living"
  }
]

// Mock featured products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
    category: "Electronics",
    isNew: true
  },
  {
    id: 2,
    name: "Designer Watch",
    price: 149.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
    category: "Accessories",
    isNew: false
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1374&auto=format&fit=crop",
    category: "Electronics",
    isNew: true
  }
]

// Mock sale products
const saleProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 49.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1470&auto=format&fit=crop",
    category: "Electronics",
    discount: 50,
    timeLeft: "2 days"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    discount: 35,
    timeLeft: "1 day"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1374&auto=format&fit=crop",
    category: "Electronics",
    discount: 38,
    timeLeft: "3 days"
  }
]

const DealsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white">Exclusive Deals</h1>
            <p className="mt-4 text-xl text-white/80">
              Discover amazing discounts on your favorite products
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>Limited Time Offers</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
                <Tag className="h-5 w-5 text-green-400" />
                <span>Up to 60% Off</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Hot Deals</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{deal.name}</h3>
                      <p className="text-sm text-white/80">{deal.products} Products</p>
                    </div>
                    <div className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
                      {deal.discount}% OFF
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{deal.category}</span>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Ends {new Date(deal.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link
                  href={`/shop/${deal.id}`}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Flash Sale</h2>
            <p className="mt-2 text-gray-600">Limited time offers with huge discounts</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-medium">Ending Soon</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Discount Badge */}
              <div className="absolute left-4 top-4 z-10">
                <div className="flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-white">
                  <Percent className="h-4 w-4" />
                  <span className="font-medium">{product.discount}% OFF</span>
                </div>
              </div>

              {/* Time Left Badge */}
              <div className="absolute right-4 top-4 z-10">
                <div className="flex items-center gap-2 rounded-full bg-gray-900/80 px-3 py-1 text-white backdrop-blur-sm">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{product.timeLeft}</span>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-600">Sold: 75%</span>
                    <span className="text-gray-600">Left: 25%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full w-3/4 rounded-full bg-red-500 transition-all duration-500 group-hover:bg-red-600" />
                  </div>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Featured Products</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-900 backdrop-blur-sm">
                    New Arrival
                  </div>
                )}
                <div className="absolute right-4 top-4">
                  <button className="rounded-full bg-white/80 p-2 text-gray-900 backdrop-blur-sm transition-colors hover:bg-white">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter_sec />
    </div>
  )
}

export default DealsPage