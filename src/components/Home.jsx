import React from "react";
import img1 from "../assets/sofa.png";
import bed from "../assets/bed.png";
import { FaShoppingBag } from "react-icons/fa";
``;
const Home = () => {
  return (
    <section id="home" className="pt-40 pb-16">
      <div className="absolute top-32 right-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] bg-gray-300/20 rounded-full transition-all"></div>

      <div className="flex items-center justify-center font-bold text-5xl md:text-8xl lg:text-9xl transition-all">
        INOVA<span className=" font-light">TION</span>
      </div>

      <div className=" relative bg-orange-400 text-white text-md md:text-xl rounded-3xl w-fit py-2 px-4 mt-6 mr-[10%] md:mr-[20%] lg:mr-[25%] ml-auto cursor-pointer">
        Buy Now
      </div>

      <div className="w-full h-full rounded-lg overflow-hidden mt-5 mb-8 lg:mt-14 lg:mb-24">
        <img
          src={img1}
          alt="sofa"
          className="w-full h-full px-4 md:px-24 object-contain"
        />
      </div>

      <div className=" flex-col items-center justify-center">
        <div className=" bg-gradient-to-r from-amber-500/50 via-amber-500 to-amber-900 bg-clip-text text-transparent uppercase text-center px-24 mb-24 mt-24 font-light text-xl md:text-2xl lg:text-6xl transition-all">
          Our <span className=" font-bold text-amber-600/50">bed </span>
          collection blends <br /> modern scandinavian design with <br />
          sculptural forms, enhancing any <br /> space with 
           <span className=" font-bold text-amber-700/40">Comfort </span> and 
          <span className=" font-bold text-amber-700">style</span>.
        </div>

        <div className="relative ">
          <img src={bed} alt="bed" className=" object-cover md:px-24 w-full" />

          <div className="w-full flex md:block justify-center">
            <div className="flex-col items-center justify-center md:absolute md:top-1/2 md:right-24 lg:-translate-y-3/3 md:-translate-y-2/3 h-fit backdrop-blur-sm w-[300px] md:w-[300px] lg:w-[400px] p-5 mt-5 bg-gray-200/20 rounded-3xl text-black text-xs md:text-xl">
            <h3 className=" uppercase font-bold text-center ">BED MATERIAL</h3>
            <p className="pb-5 pl-3 ">
              Cotton, slik and Bamboo are hypoallergenic and breathable, making
              them good choices for people with sensitive skin.
            </p>
            <div className="flex items-center justify-center gap-5 md:gap-10">
              <span className=" line-through">$2000</span>
              <span className=" text-amber-600">$1500</span>
              <span className="lg:pl-24">
                <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center">
                  <FaShoppingBag className="shake-hover text-white w-6 h-6 cursor-pointer " />
                </div>{" "}
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
