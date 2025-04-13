import React from 'react'




interface FilterProps {
  title: string;
  description: string;
  sortBy?: string;
  filter?: string;
}
const Filter = ({title, description, sortBy, filter}: FilterProps) => {
  return (
    <>
    <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="mt-2 text-gray-600">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option>{sortBy}</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <button className="rounded-full bg-gray-900 px-6 py-2 text-sm text-white transition-all duration-300 hover:bg-gray-800">
              {filter}
            </button>
          </div>
        </div>
    </>
  )
}

export default Filter