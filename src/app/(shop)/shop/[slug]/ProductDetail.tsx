"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import products from "../../products.json";
import { SimilarProducts } from "../[slug]/PDSections"
import { useParams, useRouter } from "next/navigation";
import { useCart } from "../context/CartContext"; // Import useCart

// Define Product type with quantity
type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number; // Ensure price is a number
  stock: number;
  imagesList: string[];
  quantity: number; // Add this property
};

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { addToCart } = useCart(); // Use the addToCart function from CartContext
  const router = useRouter(); // Initialize useRouter
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    if (slug) {
      const foundProduct: any = products.find((prod) => prod.id.toString() === slug);
      if (foundProduct) {
        // Ensure price is a number
        const price = typeof foundProduct.price === "string" ? parseFloat(foundProduct.price) : foundProduct.price;
        // Ensure imagesList is defined and has at least one image
        const imagesList = foundProduct.imagesList ||  [foundProduct.image];
        setProduct({ ...foundProduct, price, quantity: 1, imagesList }); // Initialize quantity and imagesList
        setCurrentImage(imagesList[0]); // Set the first image as the current image
      }
    }
  }, [slug]);

  // Handle changing the quantity
  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(Math.max(1, Number(newQuantity))); // Ensure quantity is a number
  };

  // Handle product change
  const handleProductChange = (newProduct: Product) => {
    setProduct({ ...newProduct, quantity: newProduct.quantity ?? 1 }); // Ensure quantity is included
  };

  // If the product is not found, show a loading message
  if (!product) return <div>Loading...</div>;

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (product.stock >= quantity) {
      addToCart({ ...product, quantity }, quantity); // Pass the product with updated quantity
      alert("Product added to cart!"); // Show a success message
      router.push("/cart"); // Navigate to the cart page
    } else {
      alert("Insufficient stock available"); // Show an error message if the product is out of stock
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Thumbnail Gallery and Main Image */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          {/* Thumbnail Gallery */}
          <div className="flex flex-row md:flex-col gap-2 md:mr-4">
            {(product.imagesList || []).slice(0, 4).map((src, index) => (
              <div
                key={index}
                className="aspect-w-1 aspect-h-1 w-20 h-20 md:w-full md:h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-75"
                onClick={() => setCurrentImage(src)}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow relative">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt="Main Product Image"
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
            <span className={`px-3 py-1 rounded-md ${product.stock > 0 ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'}`}>
              {product.stock > 0 ? 'In stock' : 'Out of stock'}
            </span>
            <div className="flex gap-2">
              <button className="text-gray-500">← Prev</button>
              <button className="text-gray-500">Next →</button>
            </div>
          </div>

          {/* Product Title */}
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>

          {/* Description */}
          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          {/* Price */}
          <div className="text-3xl font-bold mt-6">
            ${typeof product.price === "number" ? product.price.toFixed(2) : "N/A"}
          </div>

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
                onClick={() => handleChangeQuantity(quantity - 1)}
                disabled={quantity <= 1} // Disable if quantity is 1
              >
                −
              </button>
              <input
                type="number"
                className="w-16 text-center"
                value={quantity}
                onChange={(e) => handleChangeQuantity(parseInt(e.target.value, 10))}
                min="1"
                max={product.stock}
              />
              <button
                className="px-4 py-2 border-l"
                onClick={() => handleChangeQuantity(quantity + 1)}
                disabled={quantity >= product.stock} // Disable if quantity exceeds stock
              >
                +
              </button>
            </div>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-md"
              onClick={handleAddToCart}
              disabled={product.stock === 0} // Disable if product is out of stock
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-gray-500 hover:text-gray-700"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-700"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-700"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-700"><FaYoutube size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-700"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <section className="px-6 py-8 mx-20 m-6">
        <div className="flex space-x-4 border-b pb-2">
          <button className="text-md font-semibold border-b-2 p-3 text-white rounded-lg bg-orange-500">Description</button>
          <button className="text-lg text-gray-500">Reviews (24)</button>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed ">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed ">
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="px-6 py-4 mx-20">
        <h2 className="text-lg font-semibold mb-2">Key Benefits</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </section>

      <SimilarProducts onProductChange={(product) => handleProductChange({ ...product, quantity: 1 })} />
    </div>
  );
};

export default ProductDetailPage;