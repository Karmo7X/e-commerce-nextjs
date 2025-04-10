import Link from "next/link";
import React from "react";
import Image from 'next/image'
import Loadmorebtn from "../buttons/loadmorebtn";
import Filter from "../filter/Filter";
import { routes } from "@/app/config/routes";
interface products {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
  description: string;
  items: number;
  href?:string;
}

interface ProductcardProps {
  products: products[];
}

const Productcard = ({ products }: ProductcardProps) => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* header section */}
        <Filter />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
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
                <Link href={product.href || ''} className="block">
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
          ))}
        </div>

        {/* Load More Button */}
          <Loadmorebtn />
      </div>
    </>
  );
};

export default Productcard;
