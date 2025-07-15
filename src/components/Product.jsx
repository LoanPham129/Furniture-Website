import React from "react";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";
import lamp from "../assets/hanging-lamp.png";
import vase from "../assets/flower-vase.png";
import chair1 from "../assets/modern-chair.png";
import chair2 from "../assets/lounge-chair.png";
import table from "../assets/side-table.png";
import { IoMdArrowForward } from "react-icons/io";

const Product = () => {
  const furniture = [
    { title: "Seating", image: category1 },
    { title: "Lighting", image: category2 },
    { title: "Tables", image: category3 },
    { title: "Accessories", image: category4 },
  ];

  const products = [
    { title: "lighting", name: "aura pendent lamp", img: lamp, price: "30.0" },
    {
      title: "accessories",
      name: "flower vase decor",
      img: vase,
      price: "20.0 ",
    },
    { title: "seating", name: "modern chair", img: chair1, price: "100.0" },
    {
      title: "seating",
      name: "Embrace lounge chair",
      img: chair2,
      price: "200.0",
    },
    { title: "tables", name: "side table", img: table, price: "150.0" },
  ];

  return (
    <section id="product" className="px-12 pb-20">
      <div className=" flex flex-col md:flex-row  md:justify-between mb-8 md:mb-16 uppercase font-semibold transition-all">
        <h1 className=" text-2xl lg:text-3xl right-0 mb-2">
          love where you live
        </h1>
        <button className=" text-xs md:text-xl w-fit bg-gradient-to-b from-amber-600/70 to-amber-200 rounded-full p-2 hover:scale-110 shadow-md uppercase cursor-pointer">
          view all collection
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 uppercase gap-6 transition-all px-2 mb-10 sm:px-4 cursor-pointer">
        {furniture.map((fur, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="relative rounded-xl shadow-md overflow-hidden group w-full max-w-[400px]">
              <img
                src={fur.image}
                alt={fur.title}
                className="object-cover w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[450px] transition-all duration-300"
              />
              <div className="absolute bottom-4 left-0 right-0 px-5 flex items-center justify-between text-white">
                <span className="text-sm font-semibold">{fur.title}</span>
                <button className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:-rotate-45">
                  <IoMdArrowForward className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex-col mt-20 mb-20 transition-all w-full md:w-1/2 lg:w-2/5">
        <h1 className=" text-xl md:text-2xl lg:text-3xl uppercase font-semibold mb-5">
          new arrivals
        </h1>
        <p className=" text-gray-500 capitalize">
          Explore our new collection inspired by the seamless blend of personal
          and professional spaces in modern life. our verstile and stylish
          furniture adapts to any setting, providing both elegance and
          functionality for your home.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 uppercase gap-4 transition-all px-2 mb-10 sm:px-4 cursor-pointer">
        {products.map((products, i) => (
          <div key={i} className="">
            <div className="group relative mb-4 flex flex-col items-center justify-center overflow-hidden">
              <img
                src={products.img}
                alt={products.title}
                className=" object-cover w-[400px] sm:w-full h-[320px] sm:h-[320px] lg:h-[380px] bg-[#f9f6f1] rounded-3xl transition-all duration-300"
              />

              <div className="absolute bottom-4 left-0 right-0 px-5 flex justify-center">
                <button className="w-fit h-10 uppercase bg-red-800 text-white rounded-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out m-2 px-4 py-2">
                  add to cart
                </button>
              </div>
            </div>

            <div className=" uppercase mb-4">
              <h2 className=" tracking-widest">{products.title}</h2>
              <h1 className=" font-semibold">{products.name}</h1>
              <p className=" text-red-700">${products.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
