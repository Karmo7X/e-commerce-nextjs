"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Product {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    description: string;
    category: string;
    href: string;
    inStock: boolean;
  }

interface ProductProps {
  products: Product[];
  id?: number;
  name?: string;
  imageSrc?: string;
  imageAlt?: string;
  price?: number;
  description?: string;
  category?: string;
  href?: string;
}

const Product = ({ products }: ProductProps) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      
        className="w-full mx-auto"
      >
        <CarouselContent>
        {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/3 lg:basis-1/5 ">
            <div className="group  w-[300px] bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={200}
                  height={300}
                  className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 p-2.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group/wishlist"
                >
                  <div className="relative">
                    <div className={`absolute -inset-1 rounded-full blur opacity-0 group-hover/wishlist:opacity-100 transition duration-300 ${
                      wishlist.includes(product.id) ? 'bg-red-500' : 'bg-pink-500'
                    }`}></div>
                    <Heart
                      className={`relative w-5 h-5 transition-all duration-300 ${
                        wishlist.includes(product.id)
                          ? "fill-red-500 text-red-500 scale-110 animate-pulse"
                          : "text-gray-600 group-hover/wishlist:text-pink-500 group-hover/wishlist:scale-110"
                      }`}
                    />
                  </div>
                </button>
                <div className="absolute top-4 left-4">
                  <div className={`relative group/stock`}>
                    <div className={`absolute -inset-0.5 rounded-full blur opacity-20  transition duration-300 ${
                      product.inStock ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                    <div className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm ${
                      product.inStock 
                        ? 'bg-green-200/10 text-green-700 border border-green-200/20' 
                        : 'bg-red-200/10 text-red-700 border border-red-200/20'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        product.inStock ? 'bg-green-700 animate-pulse' : 'bg-red-700'
                      }`}></div>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 px-4">
                    <Link
                      href={product.href}
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
                <Link href={product.href} className="block">
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
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:inline-flex" />
        <CarouselNext className="hidden lg:inline-flex" />
      </Carousel>
    </>
  );
};

export default Product;
