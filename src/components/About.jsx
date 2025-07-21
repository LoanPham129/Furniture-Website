import React from "react";
import bedroom from "../assets/bedroom.jpg";
import chair from "../assets/living-room.jpg";
import bg from "../assets/fix-bg.jpg";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import { Parallax } from "react-scroll-parallax";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset, FaCreditCard } from "react-icons/fa6";

const About = () => {
  const profile = [
    {
      name: "John Oliver",
      img: profile1,
      description: `"Exceptional craftsmanship on our dining table. It’s stunning and sturdy. The team was helpful throughout. Seamless delivery—will definitely shop here again!"`,
    },
    {
      name: "Annie Lily",
      img: profile2,
      description: `"Loved the modern design of my new sofa! Super comfortable and arrived earlier than expected. Great quality—worth every penny. Highly recommend!"`,
    },
    {
      name: "Frank Daniel",
      img: profile3,
      description: `"Perfect blend of style and function! The bookshelf fits my space beautifully, and assembly was a breeze. 5 stars for durability and customer service!"`,
    },
  ];

  const services = [
    {
      name: "customer service",
      description: `It's not actually free we just price it into the products.`,
      icon: <FaHeadset className=" w-7 h-7 text-amber-800" />,
    },
    {
      name: "fast free shipping",
      description: `Get free shipping on order of $150 or more.`,
      icon: <FaShippingFast className=" w-7 h-7 text-amber-800" />,
    },
    {
      name: "secure payment",
      description: `Your payment information is processed securely.`,
      icon: <FaCreditCard className=" w-7 h-7 text-amber-800" />,
    },
  ];

  return (
    <section id="about" className=" mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-12 mb-32">
        <div className="flex md:flex-row flex-col items-center justify-end md:pr-10">
          <div className=" relative flex items-center justify-center mb-10">
            <img
              src={bedroom}
              alt="bedroom"
              className=" absolute top-20 -left-8 md:-left-24 w-[150px] h-[200px] md:w-[200px] md:h-[250px] rounded-2xl shadow-md z-20 -rotate-8"
            />
            <img
              src={chair}
              alt="living-chair"
              className=" w-[250px] h-[380px] md:w-[300px] md:h-[400px] rounded-2xl shadow-xl z-10 rotate-3"
            />
          </div>
        </div>
        <div className="uppercase">
          <h1 className=" text-xl text-amber-700 font-semibold tracking-widest">
            about us
          </h1>
          <div className=" text-2xl md:text-3xl md:pr-24 lg:pr-80">
            <span className=" font-bold">Furnix Homes </span>Leads in{" "}
            <span className="font-bold">Modern Design,</span> Blending timeless
            aesthetics, functionality and{" "}
            <span className="font-bold">Meticulous</span> craftmanship
          </div>
          <button className=" rounded-3xl bg-amber-500 hover:bg-amber-600 text-white uppercase p-3 mt-5 cursor-pointer">
            more about us
          </button>
        </div>
      </div>

      <Parallax className="mb-20">
        <div className="  relative w-full h-[350px]">
          <img src={bg} alt="img" className="w-full h-full object-cover " />
          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-20 px-16">
            <h1 className="text-white text-xl md:text-5xl uppercase mb-5">
              Innovative vision <br /> in modern design
            </h1>
            <p className="text-gray-300 capitalize mt-4 md:mt-0 w-[300px] md:w-[550px] mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              delectus quod vitae! Ratione neque amet inventore aliquam
              voluptas, exercitationem voluptatem laudantium? Impedit beatae
              dolores sapiente sit, reprehenderit molestiae voluptatum sint?
            </p>
            <button className="uppercase bg-amber-500 hover:bg-amber-600 rounded-3xl p-3 text-white font-semibold">
              read our story
            </button>
          </div>
        </div>
      </Parallax>

      <div className=" w-[450px] md:w-[700px] px-16 mb-32 transition-all">
        <h1 className=" uppercase font-medium text-amber-800 text-xl md:text-4xl mb-5">
          what people are saying
        </h1>
        <p className=" capitalize text-gray-600">
          discover what other love about us! from exceptional service to our
          top-notch products, hear it straight from our happy customers. your
          words inspire us to keep delivering the best. share your experience
          today!
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-16 gap-10 transition-all mb-32">
        {profile.map((p, i) => (
          <div
            key={i}
            className=" relative bg-gray-100 rounded-b-3xl pt-12 md:pt-10 pb-6 px-6 text-center shadow-md mb-10"
          >
            <img
              src={p.img}
              alt={p.name}
              className=" absolute w-20 h-20 rounded-full object-cover -top-10 left-1/2 transform -translate-x-3/2 md:-translate-x-4/2 lg:-translate-x-5/2 border-4 border-white shadow-md transition-all"
            />
            <div className=" flex-col items-center justify-center">
              <h1 className=" text-3xl text-black py-3">{p.name}</h1>
              <p className=" text-gray-700 capitalize">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="  mt-14 bg-amber-100 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 px-10">
          {services.map((ser, i) => (
            <div key={i} className=" relative flex m-2 p-3 md:p-5 lg:p-8 bg-gray-50 w-full rounded-3xl md:-translate-y-1/2">
              <p className="pr-8 flex items-center justify-center">{ser.icon}</p>
              <div className="">
                <h1 className=" uppercase font-bold mb-2">{ser.name}</h1>
                <p className=" text-sm text-gray-700">{ser.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
