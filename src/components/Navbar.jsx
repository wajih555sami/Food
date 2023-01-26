import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleMenuClick = () => {
        setNav( !nav );
    }
  return (
    <div className='navbar p-4'>
        <div className='container max-w-7xl mx-auto flex items-center justify-between'>
            {/* LEFT */}
            <div className='flex items-center'>
                <AiOutlineMenu size={30} onClick={handleMenuClick}/>
                <a href='#' className='logo flex items-center text-black mx-3 text-2xl sm:text-3xl lg:text-4xl '>
                    Best <span className='font-bold'>Eats</span>
                </a>
                <div className='hidden md:flex items-center bg-gray-200 rounded-full text-[14px]'>
                    <span className='p-2 bg-black text-white rounded-full'>Delivery</span>
                    <span className='p-2'>Pickup</span>
                </div>
            </div>
            {/* MIDDLE */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ml-3 md:mx-4'>
                <AiOutlineSearch size={25} />
                <input type='text' className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search foods'/>
            </div>
            {/* RIGHT */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>
        </div>
        {/* MENU */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose onClick={handleMenuClick} size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
                Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                    <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                    <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                    <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                    <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar