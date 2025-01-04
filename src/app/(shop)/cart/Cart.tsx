"use client";
import { useCart } from "../shop/context/CartContext";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Bill from "./Bills";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // Calculate subtotal based on quantity
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 mb-4 text-gray-600 font-semibold">
          <div className="col-span-4 sm:col-span-6 lg:col-span-6">Product</div>
          <div className="col-span-2 hidden sm:block">Price</div>
          <div className="col-span-3 lg:col-span-2">Quantity</div>
          <div className="col-span-1 hidden sm:block">Total</div>
          <div className="col-span-1 hidden sm:block">Remove</div>
        </div>

        {cart.length === 0 ? (
          <div className="text-gray-600">Your cart is empty.</div>
        ) : (
          cart.map((cartItem) => {
            const totalPrice = cartItem.price * cartItem.quantity; // Calculate total price for each item

            return (
              <div
                key={cartItem.id}
                className="grid grid-cols-6 sm:grid-cols-12 gap-4 items-center py-4 border-b"
              >
                <div className="col-span-4 sm:col-span-6 lg:col-span-6 flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{cartItem.name}</h3>
                  </div>
                </div>
                <div className="col-span-2 hidden sm:block">${cartItem.price.toFixed(2)}</div>
                <div className="col-span-3 lg:col-span-2">{cartItem.quantity}</div> {/* Use quantity */}
                <div className="col-span-1 hidden sm:block">${totalPrice.toFixed(2)}</div> {/* Use totalPrice */}
                <div className="col-span-1 hidden sm:block">
                  <button
                    className="p-2 bg-red-500 text-white rounded-full"
                    onClick={() => removeFromCart(cartItem.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Bill subtotal={subtotal} /> {/* Pass subtotal to the Bill component */}
    </div>
  );
}