import React from 'react'

const Hero = () => {
  return (
    <div className='container max-w-7xl mx-auto my-4'>
        <div className='max-h-[500px] relative'>
            {/* info */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    The <span className='text-orange-500'>Best</span><br/>
                    <span className='text-orange-500'>Foods</span> Devlivered
                </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
        </div>
    </div>
  )
}

export default Hero