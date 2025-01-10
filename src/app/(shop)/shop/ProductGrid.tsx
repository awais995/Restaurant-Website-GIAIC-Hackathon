"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  onSale?: boolean;
  quantity?: number;
  dateAdded?: string; // For sorting by date
  popularity?: number; // For sorting by popularity
};

type ProductGridProps = {
  products: Product[];
};

type SortOption = "Newest" | "Oldest" | "Price: Low to High" | "Price: High to Low" | "Popularity";
type ShowOption = "Default" | "5 Items" | "10 Items" | "15 Items" | "20 Items";

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState<SortOption>("Newest");
  const [showOption, setShowOption] = useState<ShowOption>("Default");

  // Sort products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "Newest":
        return new Date(b.dateAdded!).getTime() - new Date(a.dateAdded!).getTime();
      case "Oldest":
        return new Date(a.dateAdded!).getTime() - new Date(b.dateAdded!).getTime();
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Popularity":
        return (b.popularity || 0) - (a.popularity || 0);
      default:
        return 0;
    }
  });

  // Filter products based on the show option
  const filteredProducts = showOption === "Default" ? sortedProducts : sortedProducts.slice(0, parseInt(showOption));

  return (
    <div className="p-4">
      {/* Sorting and Showing Options */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              className="border p-2 rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Popularity">Popularity</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="show" className="text-sm font-medium">
              Show:
            </label>
            <select
              id="show"
              className="border p-2 rounded"
              value={showOption}
              onChange={(e) => setShowOption(e.target.value as ShowOption)}
            >
              <option value="Default">Default</option>
              <option value="5 Items">5 Items</option>
              <option value="10 Items">10 Items</option>
              <option value="15 Items">15 Items</option>
              <option value="20 Items">20 Items</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} legacyBehavior>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;