import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/sofa.png"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Home = () => {

  return (
    <section id='home' className='pt-40'>
        <div className="flex items-center justify-center font-bold text-6xl md:text-7xl lg:text-9xl transition-all">
            INOVA<span className=' font-light'>TION</span>
        </div>

        <div className=" relative bg-orange-400 text-white text-md md:text-xl rounded-3xl w-fit py-2 px-4 mt-6 mr-[25%] ml-auto">Buy Now</div>
         
         <div className="w-full h-full rounded-lg overflow-hidden">
        <img
          src={img1}
          alt="sofa"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  )
}

export default Home