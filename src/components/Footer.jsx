import React from "react";
import bg from "../assets/footer-bg.jpg";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footer = [
    {
      title: "Collections",
      items: ["Seating", "Sofas", "Lighting", "Accessories"],
    },
    {
      title: "Designers",
      items: ["Name 1", "Name 2", "Name 3", "Name 4"],
    },
    {
      title: "Information",
      items: ["Our Story", "Our Journal", "FAQ’s", "Contact Us"],
    },
  ];

  const contact = {
    phone: "0123 456 789",
    email: "furnixhomes@info.com",
  };

  return (
    <div className=" relative isolate h-[500px]">
      <img
        src={bg}
        alt="footer-bg"
        loading="lazy"
        className=" absolute w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0" />

      <div className=" relative z-10 inset-0 text-white p-8 md:p-14 grid grid-cols-4 gap-4 md:gap-8">
        <div className=" transition-all">
          <h3 className=" uppercase font-bold text-lg md:text-2xl mb-8">
            furnix.
          </h3>
          <h2 className=" uppercase gap-2 text-sm lg:text-3xl font-light mb-8">
            Sign up to receive 10% off your first order
          </h2>
          <div className="flex items-center justify-between p-3 bg-white/20 rounded-full w-fit">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white placeholder-white text-sm "
            />
            <button className=" w-8 h-8 bg-amber-500 hover:bg-amber-600 rounded-full items-center justify-center flex cursor-pointer">
              <FaArrowRight className="" />
            </button>
          </div>
          <div className=" flex flex-wrap mt-10 gap-5 cursor-pointer ">
            <FaFacebookF className="hover:text-amber-500" />
            <FaXTwitter className="hover:text-amber-500" />
            <FaInstagram className="hover:text-amber-500" />
            <FaPinterestP className="hover:text-amber-500" />
          </div>
        </div>

        {footer.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start pt-1"
          >
            <h3 className="md:text-lg text-xs font-semibold mb-10 uppercase text-left">
              {f.title}
            </h3>
            <ul className="md:space-y-6 space-y-3 text-center">
              {f.items.map((item, idx) => (
                <li
                  key={idx}
                  className="md:text-sm text-xs text-start text-gray-200 hover:text-amber-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
            {index === 0 && (
              <div className="md:mt-10 mt-41 ml-20 md:text-lg text-sm text-white space-y-3 tracking-wide text-left cursor-pointer">
                <p className="hover:text-amber-400 underline">{contact.phone}</p>
                <p className="hover:text-amber-400 underline">{contact.email}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className=" absolute text-xs flex items-center justify-center uppercase text-white/50 bg-[#52413A] h-[50px] bottom-0 w-full z-0">
        &copy; 2025 COPYRIGHT FURNIX HOMES. POWERED BY Loan Pham.
      </div>
    </div>
  );
};

export default Footer;
