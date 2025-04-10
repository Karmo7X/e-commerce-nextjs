import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  ShoppingCart,
  Filter,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  AnimatedSection,
  AnimatedCard,
  AnimatedIcon,
} from "../_components/animated/AnimatedSection";
import Productcard from "../_components/Product/Productcard";

export default async function Products() {
     // Add a delay to simulate loading
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
      category: "Men's Fashion",
      slug: "premium-cotton-t-shirt",
      description: "High-quality cotton t-shirt with premium stitching",
      items: 50,
      href: "/products/premium-cotton-t-shirt",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1526&auto=format&fit=crop",
      category: "Men's Fashion",
      slug: "slim-fit-jeans",
      description: "Modern slim fit jeans with stretch technology",
      items: 30,
      href: "/products/slim-fit-jeans",
    },
    {
      id: 3,
      name: "Leather Sneakers",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop",
      category: "Footwear",
      slug: "leather-sneakers",
      description: "Premium leather sneakers with cushioned soles",
      items: 25,
      href: "/products/leather-sneakers",
    },
    {
      id: 4,
      name: "Wool Blend Coat",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop",
      category: "Outerwear",
      slug: "wool-blend-coat",
      description: "Warm wool blend coat for cold weather",
      items: 15,
      href: "/products/wool-blend-coat",
    },
  ];
 

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatedCard className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <Sparkles className="h-5 w-5 text-white" />
              <span>Premium Collection</span>
            </AnimatedCard>
            <h1 className="text-6xl font-bold text-white">
              Discover Our Collection
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Explore our curated selection of premium products
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Search Section */}
      <AnimatedSection className="container mx-auto mt-16 px-4">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center">
                <Search className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-gray-900" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 pl-10 pr-12 text-gray-900 transition-all duration-300 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              />
              <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
                <span className="hidden rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 md:inline">
                  ⌘K
                </span>
                <button className="rounded-full bg-gray-900 p-2 text-white transition-all duration-300 hover:bg-gray-800">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          
          </div>
        </div>
      </AnimatedSection>

      {/* Products Section */}
      <AnimatedSection className="container mx-auto  py-16">
        <Productcard products={products} />
      </AnimatedSection>
    </div>
  );
}
