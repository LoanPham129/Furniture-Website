import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../cart/CartContext.jsx"
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className=" py-8 px-4 bg-[#fdfbf8] text-amber-900">
      <h1 className="text-center text-5xl mb-10 mt-16">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            to="/menu"
            className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition"
          >
            Browse Items
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-md border border-amber-200 hover:border-amber-500 flex flex-col items-center"
              >
                <img src={item.img} alt={item.name} className="w-32 h-32 object-contain mb-4" />

                <h3 className="text-xl mb-1">{item.name}</h3>
                <p className="text-sm mb-2">${item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 rounded-full border border-amber-600 flex items-center justify-center hover:bg-amber-600 hover:text-white transition"
                  >
                    <FaMinus />
                  </button>
                  <span className="w-8 text-center text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border border-amber-600 flex items-center justify-center hover:bg-amber-600 hover:text-white transition"
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-sm flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                >
                  <FaTrash className="text-red-600" />
                  <span>Remove</span>
                </button>
              </div>
            ))}
          </div>

          <div className=" flex justify-between mt-10 text-end md:px-14">
            <h2 className="text-2xl md:mb-3">Total: ${cartTotal}</h2>
            <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
