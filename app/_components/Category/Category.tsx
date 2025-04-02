import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



interface Category {
    name: string;
    imageSrc: string;
    imageAlt?: string;
    href?: string;
    description?: string;
  }
interface CategoryProps {
    categories:Category[],
    // index: number;
}
const Category = ({categories}:CategoryProps) => {
  return (
    <section className="bg-gray-100 w-full mt-20">
    <div className="container mx-auto px-4 py-12">
    <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Our Collections</h2>
            <Link 
              href="/categories" 
              className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              View All Collections
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
       
        <div className=" flex items-center justify-center flex-col lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
          {categories.map((category) => (
            <Link href={category.href || ''} key={category.name} className="group w-[300px] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt || ''}
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-300">{category.description}</p>
                  </div>
                </div>
              </Link>
          ))}
        </div>
    </div>
  </section>
  )
}

export default Category