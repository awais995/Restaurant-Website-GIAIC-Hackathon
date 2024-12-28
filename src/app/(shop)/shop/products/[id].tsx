// pages/products/[id].js
import { useRouter } from 'next/router';

// Sample products array (you can replace this with a fetch from your API)
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
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((product) => product.id === parseInt(`${id}`));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      {product.originalPrice && <p>Original Price: ${product.originalPrice}</p>}
    </div>
  );
};

export default ProductPage;
