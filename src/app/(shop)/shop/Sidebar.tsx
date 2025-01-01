"use client"
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface Product {
  name: string;
  price: string;
  image: string;
  rating: number;
}

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(0);

  const categories: string[] = [
    'Sandwich',
    'Burger',
    'Chicken Chup',
    'Drink',
    'Pizza',
    'Tahi',
    'Non Veg',
    'Uncategorized',
  ];

  const latestProducts: Product[] = [
    { name: 'Pizza', price: '$35.00', image: '/pizza.png', rating: 3 },
    { name: 'Sandwich', price: '$20.00', image: '/sandwich.png', rating: 4 },
    { name: 'CupCake', price: '$35.00', image: '/Dessert.png', rating: 3 },
    { name: 'Burger', price: '$35.00', image: '/menu-10.jpeg', rating: 2 },
  ];

  const productTags: string[] = [
    'Services',
    'Our Menu',
    'Pizza',
    'Cupcake',
    'Burger',
    'Cookies',
    'Our Shop',
    'Tandoori Chicken',
  ];

  const toggleCategory = (category: string): void => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPriceRange(Number(e.target.value));
  };

  return (
    <div className="w-64 p-4 hidden sm:block">
      {/* Category Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Category</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <Image
          src="/perfectTaste.png"
          alt="Perfect Taste Classic Restaurant"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-start">
          <h3 className="text-white font-bold">Perfect Taste</h3>
          <p className="text-white">Classic Restaurant</p>
          <span className="text-orange-500">$45.00</span>
          <div className="flex py-24 items-end">
            <button className="text-white px-4 py-2 rounded mt-2">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Filter By Price</h2>
        <input
          type="range"
          className="w-full"
          min="0"
          max="8000"
          value={priceRange}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between">
          <span>$0</span>
          <span>${priceRange}</span>
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Latest Products</h2>
        <div className="space-y-4">
          {latestProducts.map((product) => (
            <div key={product.name} className="flex items-center gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <h3 className="text-sm font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
                <div className="flex text-orange-500">
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags */}
      <div>
        <h2 className="text-xl font-bold mb-4">Product Tags</h2>
        <div className="flex flex-wrap gap-2">
          {productTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
