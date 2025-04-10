import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { routes } from '@/app/config/routes'

interface More_categories {
    name: string;
    slug: string;
    description: string;
    image: string;
    items: number;
    color?: string;
}

interface More_categoriesProps {
    more_categories: More_categories[];
}

const More_categories = ({more_categories}:More_categoriesProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">Explore More Categories</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {more_categories.map(cat => (
          <Link 
            key={cat.slug}
            href={`${routes.categories}/${cat.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
          >
            <div className="relative h-80 w-full">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color || 'from-gray-500/20 to-gray-900/20'} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {cat.name}
                </h3>
                <div className="mt-4 flex items-center gap-4">
                  <span className="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
                    {cat.items} items
                  </span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default More_categories