import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const  categories = [
  {
    name: "New Arrivals",
    description: "Discover our latest collection of trendy styles",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
    href: "/categories/new-arrivals",
    color: "from-white/20 to-white/5",
    textColor: "text-white",
  },
  {
    name: "Best Sellers",
    description: "Shop our most popular and loved items",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    href: "/categories/best-sellers",
    color: "from-white/20 to-white/5",
    textColor: "text-white",
  },
  {
    name: "Men's Collection",
    description: "Elevate your style with our men's fashion",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
    href: "/categories/men",
    color: "from-white/20 to-white/5",
    textColor: "text-white",
  },
  {
    name: "Women's Collection",
    description: "Express yourself with our women's fashion",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop",
    href: "/categories/women",
    color: "from-white/20 to-white/5",
    textColor: "text-white",
  },
  {
    name: "Accessories",
    description: "Complete your look with our accessories",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1978&auto=format&fit=crop",
    href: "/categories/accessories",
    color: "from-white/20 to-white/5",
    textColor: "text-white",
  },
  {
    name: "Footwear",
    description: "Step out in style with our footwear collection",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    href: "/categories/footwear",
    color: "from-white/20 to-white/5",
    textColor: "text-white",
  },
];
export default async function Categories () {
    
    // Add a delay to simulate loading
   await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="mb-6 text-5xl font-bold text-white">Our Collections</h1>
            <p className="text-xl text-gray-200">
              Discover our carefully curated collections designed to elevate your style
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h2 className={`mb-4 text-3xl font-bold ${category.textColor}`}>
                    {category.name}
                  </h2>
                  <p className="mb-6 text-lg text-white/90">{category.description}</p>
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-gray-900 transition-all duration-300 group-hover:bg-white">
                    Shop Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
              Featured Collection
            </span>
            <h2 className="mb-4 text-4xl font-bold text-white">Trending Styles</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Discover our handpicked selection of trending styles that will elevate your wardrobe
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 4).map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {index === 0 ? 'New' : index === 1 ? 'Popular' : index === 2 ? 'Trending' : 'Featured'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-white/90">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">{category.description}</p>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white/80">Explore Collection</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-white/30">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              View All Collections
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

