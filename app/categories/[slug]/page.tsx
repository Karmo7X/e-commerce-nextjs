import React from 'react'
import { routes } from '@/app/config/routes'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingBag, Heart, Star } from 'lucide-react'
import Productcard from '@/app/_components/Product/Productcard'
import Breadcurmb from '@/app/_components/breadcurmb/Breadcurmb'
import More_categories from '@/app/_components/Category/More_categories'
import Newsletter_sec from '@/app/_components/newsletter/Newsletter_sec'

// Mock data for categories
const categories = [
  {
    name: 'Men',
    slug: 'men',
    description: 'Discover our latest men\'s fashion collection',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop',
    items: 120,
    color: 'from-blue-500/20 to-blue-900/20'
  },
  {
    name: 'Women',
    slug: 'women',
    description: 'Explore our women\'s fashion collection',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1971&auto=format&fit=crop',
    items: 150,
    color: 'from-pink-500/20 to-pink-900/20'
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    description: 'Complete your look with our accessories',
    image: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1964&auto=format&fit=crop',
    items: 80,
    color: 'from-purple-500/20 to-purple-900/20'
  }
]

// Mock data for products
const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1722310752951-4d459d28c678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2xhc3NpYyUyMFdoaXRlJTIwVCUyMFNoaXJ0fGVufDB8fDB8fHww',
    colors: ['White', 'Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Men',
    href: '/products/1',
    slug: 'classic-white-tshirt',
    description: 'Premium quality white t-shirt made from 100% organic cotton',
    items: 50
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    rating: 4.2,
    reviews: 86,
    image: 'https://images.unsplash.com/photo-1678219376035-90da4bda4926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNsaW0lMjBGaXQlMjBKZWFuc3xlbnwwfHwwfHx8MA%3D%3D',
    colors: ['Blue', 'Black'],
    sizes: ['28', '30', '32', '34'],
    category: 'Men',
    href: '/products/2',
    slug: 'slim-fit-jeans',
    description: 'Modern slim fit jeans with stretch technology for maximum comfort',
    items: 30
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 199.99,
    rating: 4.8,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1974&auto=format&fit=crop',
    colors: ['Black', 'Brown'],
    sizes: ['S', 'M', 'L'],
    category: 'Men',
    href: '/products/3',
    slug: 'leather-jacket',
    description: 'Premium genuine leather jacket with modern design',
    items: 15
  },
  {
    id: 4,
    name: 'Casual Sneakers',
    price: 79.99,
    rating: 4.6,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1974&auto=format&fit=crop',
    colors: ['White', 'Black'],
    sizes: ['7', '8', '9', '10'],
    category: 'Accessories',
    href: '/products/4',
    slug: 'casual-sneakers',
    description: 'Comfortable and stylish casual sneakers for everyday wear',
    items: 25
  }
]

const breadcurmb = [
  {
    title: 'Home',
    href: routes.home
  },
  {
    title: 'Categories',
    href: routes.categories
  },
  {
    title: 'Category',
    href: routes.categories
  }
]
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(cat => cat.slug === params.slug)

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Category Not Found</h1>
            <p className="mt-4 text-gray-600">The category you are looking for does not exist.</p>
            <Link 
              href={routes.categories}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              Back to Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold tracking-tight">{category.name}</h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl">{category.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
                {category.items} items
              </span>
              <button className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                <Heart className="h-4 w-4" />
                Save Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
     <Breadcurmb  breadcurmb ={breadcurmb}/>

      {/* Products Section */}
       <Productcard  products={products} />

      {/* Category Content */}
       <More_categories more_categories={categories}/>

      {/* Newsletter Section */}
      <Newsletter_sec />
    </div>
  )
}