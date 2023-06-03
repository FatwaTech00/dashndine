import React from 'react';
import {FaShoppingBasket} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center text-black drop-shadow-lg font-medium text-xs bg-white'>
    <div><h1 className='mx-10 font-bold text-base relative left-20'>DashnDine</h1></div>

            <ul className='flex '>
                <li><a href="">Home</a></li>
                <li><a href="">Tentang</a></li>
                <li><a href="">Menu</a></li>
            </ul>
            <ul className='flex relative right-32 '>
                <button className='border-2 border-black outline-4 px-[30px] py-[1px] rounded-lg hover:bg-slate-200 relative text-base'>Reservasi</button>
                <div></div>
                <button className='relative left-6 text-orange-900 '><FaShoppingBasket size={32} /> </button>
            </ul>
    </div>
  )
}

export default Navbar