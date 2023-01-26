import React, { useState } from 'react';
import { data } from '../data/data';

const Food = () => {

    const [foods, setFoods] = useState(data);
    function filterType (category){
        return (
            setFoods(
                data.filter( item => {
                    return item.category === category
                })
            )
        )
    }
    const filterPrice = (price) => {
        setFoods(
            data.filter( item => {
                return item.price === price
            })
        )
    }

  return (
    <div className='max-w-7xl m-auto px-4 xl:px-0 py-12'>
        <h2 className='text-orange-600 font-bold text-4xl text-center mb-7'>Top Rated Menu Items</h2>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between mb-5'>
            {/* Fliter Type */}
            <div>
                <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
                <div className='flex justfiy-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={ () => filterType('burger') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={ () => filterType('pizza') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={ () => filterType('salad') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={ () => filterType('chicken') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={ () => filterPrice('$') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={ () => filterPrice('$$') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={ () => filterPrice('$$$') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={ () => filterPrice('$$$$') } className='transition-all mr-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>
                            {item.price}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food