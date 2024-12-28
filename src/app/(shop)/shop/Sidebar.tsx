 
 import Image from "next/image";
 export const Sidebar = () => {
      const categories = ['Sandwich', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Tahi', 'Non Veg', 'Uncategorized']; // Define your categories here
    
      return (
        <div className="w-64 p-4">
          {/* Category Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Category</h2>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
    
          {/* Promo Banner */}
          <div className="relative h- rounded-lg overflow-hidden mb-8">
            <Image 
              src="/shopimages/banner.png " 
              alt="Perfect Taste Classic Restaurant"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-start">
              <h3 className="text-white font-bold">Perfect Taste</h3>
              <p className="text-white">Classic Restaurant</p>
              <span className="text-orange-500">45.00$</span>
              <div className="flex py-24 items-end">
              <button className=" text-white px-4 py-2  rounded mt-2">
                Shop Now
              </button>
              </div>
            </div>
          </div>
    
          {/* Price Filter */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Filter By Price</h2>
            <input type="range" className="w-full" />
            <div className="flex justify-between">
              <span>$0</span>
              <span>$8000</span>
            </div>
          </div>
        </div>
      );
    };
    