"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductGrid from "./ProductGrid";
import Header from "./ShopNav";
import { Sidebar } from "./Sidebar";
import productsData from "../products.json";

// Define product types
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  quantity: number;
  onSale?: boolean;
};

// Transform the data to ensure `price` is a number
const products = productsData.map((product) => ({
  ...product,
  price: typeof product.price === "string" ? parseFloat(product.price) : product.price,
}));

export default function Products() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemsPerPage = 12;

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
            />
            <button className="absolute right-2 top-2 bg-orange-500 p-1 rounded">
              <FaSearch className="w-5 h-5 text-white" />
            </button>
          </div>
          <Sidebar />
        </div>
      </main>
    </div>
  );
}