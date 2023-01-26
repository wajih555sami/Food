import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
  return (
    <div className='max-w-7xl m-auto px-4 xl:px-0 py-12'>
        <h2 className='text-orange-600 font-bold text-4xl text-center  mb-7'>Top Rated Menu Items</h2>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
            {categories.map((item, index) => (
                <div
                key={index}
                className='bg-gray-100 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center'
                >
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name} className='w-20' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories