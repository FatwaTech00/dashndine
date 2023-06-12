import React from 'react';
import Nasi from '../components/img/nasi.jpg';
import Babgul from './img/babgul.jpg';

const Menu = () => {
  return (
    <div className='absolute w-full h-screen mt-96 grid justify-center'>
        <div className='grid grid-cols-4 gap-[7.50rem] '>
        <span className='relative font-poppins font-semibold text-[32px] top-20 '>Menu Kami</span>
        </div>
        <div className='btnMenu gap-9 font-poppins flex text-center h-7 relative mb-96 items-center '>
            <button>Maluku</button>
            <button>Papua</button>
            <button>Pontianak</button>
            <button>Medan</button>
            <button>Bandung</button>
            <button>Surabaya</button>
        <div className='daftar truncate grid grid-cols-3 gap-4 justify-center absolute top-20 w-full h-[750px] mt-10 '>
            
            <span className=''>
            <img src={Nasi} alt="" />
            <h1>Nasi Goreng</h1>
            <h2>Cras auctor leo vitae augue dapibus</h2>
            <h3>Rp. 10.000, 00</h3>
            <a href="" className='bg-customRed w-[68px] h-20 absolute right-0 rounded-tl-xl text-6xl text-center text-white hover:text-slate-200'>+</a>
            </span>
            <span className=''>
            <img src={Nasi} alt="" />
            <h1>Nasi Goreng</h1>
            <h2>Cras auctor leo vitae augue dapibus</h2>
            <h3>Rp. 10.000, 00</h3>
            <a href="" className='bg-customRed w-[68px] h-20 absolute right-0 rounded-tl-xl text-6xl text-center text-white hover:text-slate-200'>+</a>
            </span>
            <span className=''>
            <img src={Nasi} alt="" />
            <h1>Nasi Goreng</h1>
            <h2>Cras auctor leo vitae augue dapibus</h2>
            <h3>Rp. 10.000, 00</h3>
            <a href="" className='bg-customRed w-[68px] h-20 absolute right-0 rounded-tl-xl text-6xl text-center text-white hover:text-slate-200'>+</a>
            </span>
            <span className=''>
            <img src={Nasi} alt="" />
            <h1>Nasi Goreng</h1>
            <h2>Cras auctor leo vitae augue dapibus</h2>
            <h3>Rp. 10.000, 00</h3>
            <a href="" className='bg-customRed w-[68px] h-20 absolute right-0 rounded-tl-xl text-6xl text-center text-white hover:text-slate-200'>+</a>
            </span>
            <span className=''>
            <img src={Nasi} alt="" />
            <h1>Nasi Goreng</h1>
            <h2>Cras auctor leo vitae augue dapibus</h2>
            <h3>Rp. 10.000, 00</h3>
            <a href="" className='bg-customRed w-[68px] h-20 absolute right-0 rounded-tl-xl text-6xl text-center text-white hover:text-slate-200'>+</a>
            </span>
            <span className=''>
            <img src={Nasi} alt="" />
            <h1>Nasi Goreng</h1>
            <h2>Cras auctor leo vitae augue dapibus</h2>
            <h3>Rp. 10.000, 00</h3>
            <a href="" className='bg-customRed w-[68px] h-20 absolute right-0 rounded-tl-xl text-6xl text-center text-white hover:text-slate-200'>+</a>
            </span>
            <button className='w-[232px] h-[56px] '></button>
        </div>
        </div>
        
    </div>
  )
}

export default Menu