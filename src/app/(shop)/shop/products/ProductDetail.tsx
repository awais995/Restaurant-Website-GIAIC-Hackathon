"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

export const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Thumbnail Gallery and Main Image */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          {/* Thumbnail Gallery */}
          <div className="flex flex-row md:flex-col gap-2 md:mr-4">
            {[
              { src: "/1.png" },
              { src: "/2.png" },
              { src: "/3.png" },
              { src: "/4.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-w-1 aspect-h-1 w-20 h-20 md:w-full md:h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-75"
              >
                <Image
                  src={item.src}
                  alt={`Image ${index}`}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow relative">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
              <Image
                src="/main.png"
                alt="Yummy Chicken Chup"
                width={600}
                height={350}
                className="w-full h-[410px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2">
          {/* Status Badge */}
          <div className="flex justify-between items-center">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-md">In stock</span>
            <div className="flex gap-2">
              <button className="text-gray-500">← Prev</button>
              <button className="text-gray-500">Next →</button>
            </div>
          </div>

          {/* Product Title */}
          <h1 className="text-3xl font-bold mt-4">Yummy Chicken Chup</h1>

          {/* Description */}
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Price */}
          <div className="text-3xl font-bold mt-6">54.00$</div>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <div className="flex text-orange-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">5.0 Rating | 22 Review</span>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex border rounded-md">
              <button
                className="px-4 py-2 border-r"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <input
                type="number"
                className="w-16 text-center"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button
                className="px-4 py-2 border-l"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600">
              Add to cart
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to Wishlist
            </button>
            <button className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              Compare
            </button>
          </div>

          {/* Categories and Tags */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-600">Category: <span className="text-gray-900">Pizza</span></p>
            <p className="text-gray-600">Tag: <span className="text-gray-900">Our Shop</span></p>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-gray-600">Share:</span>
            <div className="flex gap-3">
              <FaYoutube />
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;