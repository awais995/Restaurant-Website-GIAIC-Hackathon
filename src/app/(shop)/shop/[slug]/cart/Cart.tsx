"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
  imagesList: string[];
  ratting: 10
};

const CartItems: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve cart from localStorage on component mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

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
            const totalPrice = cartItem.stock * cartItem.price;

            return (
              <div
                key={cartItem.id}
                className="grid grid-cols-6 sm:grid-cols-12 gap-4 items-center py-4 border-b"
              >
                <div className="col-span-4 sm:col-span-6 lg:col-span-6 flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={cartItem.image || "/placeholder.png"}
                      alt={cartItem.name || "Unnamed Product"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {cartItem.name || "No Name"}
                    </h3>
                    <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-sm ${
                          index < (cartItem.ratting || 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  </div>
                </div>
                <div className="col-span-2 hidden sm:block">
                  ${cartItem.price.toFixed(2)}
                </div>

                <div className="col-span-3 lg:col-span-2">{cartItem.stock}</div>

                <div className="col-span-1 hidden sm:block">
                  ${totalPrice.toFixed(2)}
                </div>

                <div className="col-span-1 hidden sm:block">
                  <button
                    className="p-2 bg-red-500 text-white rounded-full"
                    onClick={() => handleRemoveItem(cartItem.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartItems;




