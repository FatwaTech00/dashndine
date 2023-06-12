import React from 'react';
import {BiBasket} from 'react-icons/bi';
import Basket from "./img/Basket.png"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center text-black drop-shadow-lg font-medium text-xs bg-white z-10'>
    <div><h1 className='mx-10 font-bold text-base relative left-32 font-poppins'>DashnDine</h1></div>

            <ul className='flex relative left-0'>
                <li><a href="">Home</a></li>
                <li><a href="">Tentang</a></li>
                <li><a href="">Menu</a></li>
            </ul>
            <ul className='flex relative right-[125px] '>
                <button className='border-2 border-black outline-4 px-[38px] py-[3px] rounded-lg hover:bg-slate-200 relative text-base font-poppins'>Reservasi</button>
                <div></div>
                <button className='relative left-6 text-customRed '><img src={Basket} alt="" /> </button>
            </ul>
    </div>
  )
}

export default Navbar