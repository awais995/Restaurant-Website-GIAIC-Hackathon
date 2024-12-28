import Image from "next/image";

// components/ProductCard.jsx
const ProductCard = ({ product }: any) => {[
    { id: 1, name: "Fresh Lime", price: 38.00, image: "/shopimages/freshlime.png", originalPrice: 45.00 },
    { id: 2, name: "Chocolate Muffin", price: 55.00, image: "/shopimages/muffin.png", onSale: true  },
    { id: 3, name: "Burger", price: 45.00, image: "/shopimages/burger.png", originalPrice: 45.00 },
    { id: 4, name: "Country Burger", price: 45.00, image: "/shopimages/cuntry-burger.png"},
    { id: 5, name: "Drink", price: 23.00, image: "/shopimages/drink.png", originalPrice: 45.00 },
    { id: 6, name: "Pizza", price: 43.00, image: "/shopimages/pizza.png"},
    { id: 7, name: "Cheese Butter", price: 10.00, image: "/shopimages/cheese-butter.png"},
    { id: 8, name: "Sandwitches", price: 25.00, image: "/shopimages/sandwich.png"},
    { id: 9, name: "Chicken Chup", price: 45.00, image: "/shopimages/chicken-chup.png"},
    { id: 10, name: "Country Burger", price: 45.00, image: "/shopimages/cuntry-burger.png"},
    { id: 11, name: "Drink", price: 23.00, image: "/shopimages/drink.png", originalPrice: 45.00 },
    { id: 12, name: "Pizza", price: 43.00, image: "/shopimages/pizza.png"},
    { id: 13, name: "Cheese Butter", price: 10.00, image: "/shopimages/cheese-butter.png"},
    { id: 14, name: "Sandwitches", price: 25.00, image: "/shopimages/sandwich.png"},
    { id: 15, name: "Chicken Chup", price: 45.00, image: "/shopimages/chicken-chup.png"},
    
    
    
    // Add more products as needed
  ];
  
    return (
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative">
          <Image 
            src={product.image} 
            alt={product.name}
            width={256}
            height={256}
            className="w-full h-64 object-cover"
          />
          {product.onSale && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded">
              Sell
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="line-through text-gray-400">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  