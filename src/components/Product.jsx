import React from "react";
import { products, furniture } from "../assets/data";
import { IoMdArrowForward } from "react-icons/io";
import { useCart } from "./cart/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = () => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const isInCart = (id) => cartItems.find((item) => item.id === id);

  return (
    <section id="product" className="px-12 pb-20">
      <div className=" flex flex-col md:flex-row  md:justify-between mb-8 md:mb-16 uppercase font-semibold transition-transform">
        <h1 className=" text-2xl lg:text-3xl right-0 mb-2 px-5">
          love where you live
        </h1>
        <button className=" text-xs md:text-xl w-fit bg-gradient-to-b from-amber-600/70 to-amber-200 rounded-full p-2 hover:scale-110 shadow-md uppercase cursor-pointer">
          view all collection
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 uppercase gap-6 transition-transform px-2 mb-16 sm:px-4 cursor-pointer">
        {furniture.map((fur, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="relative rounded-xl shadow-md overflow-hidden group w-full max-w-[400px]">
              <img
                src={fur.image}
                alt={fur.title}
                loading="lazy"
                className="object-cover w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[450px] transition-all duration-300"
              />
              <div className="absolute bottom-4 left-0 right-0 px-5 flex items-center justify-between text-white">
                <span className="text-lg font-semibold">{fur.title}</span>
                <button className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:-rotate-45">
                  <IoMdArrowForward className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex-col mt-20 mb-20 transition-transform w-full md:w-1/2 lg:w-2/5 px-5">
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
                loading="lazy"
                className=" object-cover w-[400px] sm:w-full h-[320px] sm:h-[320px] lg:h-[380px] bg-[#f9f6f1] rounded-3xl transition-all duration-300"
              />

              <div className="absolute bottom-4 left-0 right-0 px-5 flex justify-center">
                {products && isInCart(products.id) ? (
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() =>
                        updateQuantity(
                          products.id,
                          isInCart(products.id).quantity - 1
                        )
                      }
                      className="w-10 h-10 bg-red-800 hover:opacity-80 text-white rounded-full cursor-pointer transition-transform duration-300 ease-in-out flex items-center justify-center"
                    >
                      <FaMinus />
                    </button>
                    <span className="">{isInCart(products.id).quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          products.id,
                          isInCart(products.id).quantity + 1
                        )
                      }
                      className="w-10 h-10 bg-red-800 hover:opacity-80 text-white rounded-full cursor-pointer transition-transform duration-300 ease-in-out flex items-center justify-center"
                    >
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(products, 1)}
                    className="w-fit h-10 uppercase bg-red-800 hover:opacity-80 text-white rounded-full cursor-pointer transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out m-2 px-4 py-2"
                  >
                    add to cart
                  </button>
                )}
              </div>
            </div>

            <div className=" uppercase mb-4 ">
              <h2 className=" tracking-widest">{products.title}</h2>
              <h1 className=" font-semibold">{products.name}</h1>
              <p className=" text-red-700 ">${products.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="uppercase tracking-widest bg-amber-500 w-fit p-3 rounded-3xl text-white hover:bg-amber-600 cursor-pointer">
          view more
        </button>
      </div>
    </section>
  );
};

export default Product;
