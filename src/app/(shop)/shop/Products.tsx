
import { FaSearch } from "react-icons/fa";
import ProductGrid from "./ProductGrid";


// Sample products array
const products = [
  { id: 1, name: "Fresh Lime", price: 38.00, image: "/freshlime.png", originalPrice: 45.00 },
  { id: 2, name: "Chocolate Muffin", price: 55.00, image: "/muffin.png", onSale: true  },
  { id: 3, name: "Burger", price: 45.00, image: "/burger.png", originalPrice: 45.00 },
  { id: 4, name: "Country Burger", price: 45.00, image: "/cuntry-burger.png"},
  { id: 5, name: "Drink", price: 23.00, image: "/drink.png", originalPrice: 45.00 },
  { id: 6, name: "Pizza", price: 43.00, image: "/pizza.png"},
  { id: 7, name: "Cheese Butter", price: 10.00, image: "/cheese-butter.png"},
  { id: 8, name: "Sandwitches", price: 25.00, image: "/sandwich.png"},
  { id: 9, name: "Chicken Chup", price: 45.00, image: "/chicken-chup.png"},
  { id: 10, name: "Country Burger", price: 45.00, image: "/cuntry-burger.png"},
  { id: 11, name: "Drink", price: 23.00, image: "/drink.png", originalPrice: 45.00 },
  { id: 12, name: "Pizza", price: 43.00, image: "/pizza.png"},
  { id: 13, name: "Cheese Butter", price: 10.00, image: "/cheese-butter.png"},
  { id: 14, name: "Sandwitches", price: 25.00, image: "/sandwich.png"},
  { id: 15, name: "Chicken Chup", price: 45.00, image: "/chicken-chup.png"},
  
  // Add more products as needed
];

// pages/index.js
export default function Products() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto flex gap-8">
        <div className="flex-1">
          <ProductGrid products={products} />
          {/* Pagination */}
          <div className="flex justify-center gap-2 my-8">
            <button className="px-4 py-2 rounded border">&lt;</button>
            <button className="px-4 py-2 rounded border bg-orange-500 text-white">1</button>
            <button className="px-4 py-2 rounded border">2</button>
            <button className="px-4 py-2 rounded border">3</button>
            <button className="px-4 py-2 rounded border">&gt;</button>
          </div>
        </div>
        <div className="flex-col py-4">

        
        {/* Search Bar */}
        <div className="relative w-72">
            <input 
              type="text"
              placeholder="Search Product"
              className="w-full p-2 rounded-lg border bg-[#fdf7f2]"
            />
            <button className="absolute right-2 top-2 bg-orange-500 p-1 rounded">
              <FaSearch className="w-5 h-5 text-white" />
            </button>
          </div>
          </div>
      </main>
    </div>
    </>
  );
}