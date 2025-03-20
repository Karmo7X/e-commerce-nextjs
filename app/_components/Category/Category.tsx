import React from 'react'




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
    <div className="bg-gray-100 w-full">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
       
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6  lg:space-y-0 ">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <img
                alt={category.imageAlt}
                src={category.imageSrc}
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={category.href}>
                  <span className="absolute inset-0" />
                  {category.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Category