"use client";
import Image from "next/image";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import products from "../../../products.json";

const CartItem = ({ updateCartSummary }: { updateCartSummary: (subtotal: number) => void }) => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const subtotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
    updateCartSummary(subtotal);
  }, [cart, updateCartSummary]);

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return <div>Your cart is empty!</div>;
  }

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

        {cart.map((cartItem) => {
          const product = products.find((item) => item.id === cartItem.id);
          if (!product) {
            return <div key={cartItem.id}>Product not found</div>;
          }

          return (
            <div
              key={cartItem.id}
              className="grid grid-cols-6 sm:grid-cols-12 gap-4 items-center py-4 border-b"
            >
              <div className="col-span-4 sm:col-span-6 lg:col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={product.image || "/placeholder.png"}
                    alt={product.name || "Unnamed Product"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {product.name || "No Name"}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-sm ${
                          index < (product.ratting || 0)
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
                ${product.price?.toFixed(2) || "0.00"}
              </div>
              <div className="col-span-3 lg:col-span-2 flex items-center gap-2">
                <button
                  className="p-2 bg-gray-200 rounded-md"
                  onClick={() =>
                    updateQuantity(cartItem.id, Math.max(1, cartItem.quantity - 1))
                  }
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  value={cartItem.quantity || 1}
                  onChange={(e) =>
                    updateQuantity(
                      cartItem.id,
                      Math.max(1, parseInt(e.target.value))
                    )
                  }
                  className="w-16 text-center border rounded-md"
                />
                <button
                  className="p-2 bg-gray-200 rounded-md"
                  onClick={() =>
                    updateQuantity(cartItem.id, cartItem.quantity + 1)
                  }
                >
                  <FaPlus />
                </button>
              </div>
              <div className="col-span-1 hidden sm:block">
                ${(product.price * cartItem.quantity).toFixed(2)}
              </div>
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
        })}
      </div>
    </div>
  );
};

export default CartItem;
