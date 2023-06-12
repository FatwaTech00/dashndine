import React from 'react';
import Mask from "../components/img/Mask_group.png";
import Vector from "../components/img/Vector.png";
import Vector2 from "../components/img/Vector2.png";
import Group from "../components/img/Group.png";
const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='text-center mt-[350px]
      '>
        <span className='font-poppins font-[600] text-3xl tracking-[4px]'>DASHNDINE RESTOURANT</span>
        <br />
        <span className='font-poppins font-[500] text-base'>
          Destinasi sempurna bagi pecinta makanan 
        </span>
        <br />
        <span className='font-poppins font-medium text-base'>
         yang ingin merasakan kelezatan kuliner lokal yang khas
          </span>
        <img src={Mask} alt="Mask image" style={{width: '601px'}} className='mt-9 -z-2' />
        <div className='info absolute grid grid-cols-3 px-20 bg-white w-[920px] h-[292px] -z-1 drop-shadow-2xl -bottom-[345px] left-56 rounded-2xl text-center items-center'>
          <span><img src={Vector} alt="vector" className='mx-[100px]'/><br />08:00 - 19:00 <br />Senin - Jum'at<h1 className='font-medium text-xs relative top-3'>Waktu Buka</h1></span>
          <span><img src={Vector2} alt="vector" className='mx-[100px]'/><br />Jl Raya Marto 5 <br />Jawa Timur<h1 className='font-medium text-xs relative top-3'>Lokasi Restoran</h1></span>
          <span><img src={Group} alt="vector" className='mx-[100px]'/><br />0899 5915 4476<br />0877 5775 4476<h1 className='font-medium text-xs relative top-3'>Hubungi Kami</h1></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
