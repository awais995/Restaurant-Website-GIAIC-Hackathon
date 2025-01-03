"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductGrid from "./ProductGrid";
import Header from "./ShopNav";
import { Sidebar } from "./Sidebar";
import products from "../products.json"

// Define product types directly in the file
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  onSale?: boolean;
};

// Sample products array
// const products: Product[] = [
//   { id: 1, name: "Fresh Lime", price: 38.0, image: "/freshlime.png", originalPrice: 45.0 },
//   { id: 2, name: "Chocolate Muffin", price: 55.0, image: "/muffin.png", onSale: true },
//   { id: 3, name: "Burger", price: 45.0, image: "/burger.png", originalPrice: 45.0 },
//   { id: 4, name: "Country Burger", price: 45.0, image: "/cuntry-burger.png" },
//   { id: 5, name: "Drink", price: 23.0, image: "/drink.png", originalPrice: 45.0 },
//   { id: 6, name: "Pizza", price: 43.0, image: "/pizza.png" },
//   { id: 7, name: "Cheese Butter", price: 10.0, image: "/cheese-butter.png" },
//   { id: 8, name: "Sandwiches", price: 25.0, image: "/sandwich.png" },
//   { id: 9, name: "Chicken Chup", price: 45.0, image: "/chicken-chup.png" },
//   { id: 10, name: "Country Burger", price: 45.0, image: "/cuntry-burger.png" },
//   { id: 11, name: "Drink", price: 23.0, image: "/drink.png", originalPrice: 45.0 },
//   { id: 12, name: "Pizza", price: 43.0, image: "/pizza.png" },
//   { id: 13, name: "Cheese Butter", price: 10.0, image: "/cheese-butter.png" },
//   { id: 14, name: "Sandwiches", price: 25.0, image: "/sandwich.png" },
//   { id: 15, name: "Chicken Chup", price: 45.0, image: "/chicken-chup.png" },
// ];

export default function Products() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto flex gap-8">
          <div className="flex-1">
            {/* Render products */}
            <ProductGrid products={paginatedProducts} />

            {/* Pagination */}
            <div className="flex justify-center gap-2 my-8">
              <button
                className="px-4 py-2 rounded border"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded border ${
                    currentPage === index + 1 ? "bg-orange-500 text-white" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="px-4 py-2 rounded border"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="flex-col py-4">
            {/* Search Bar */}
            <div className="relative w-72 hidden sm:block">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full p-2 rounded-lg border bg-[#fdf7f2]"
              />
              <button className="absolute right-2 top-2 bg-orange-500 p-1 rounded">
                <FaSearch className="w-5 h-5 text-white"  />
              </button>
            </div>
            <Sidebar />
          </div>
        </main>
      </div>
    </>
  );
}
