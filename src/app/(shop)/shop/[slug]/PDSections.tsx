"use client"
import Image from "next/image";
import products from "../../products.json"
import { useParams } from "next/navigation";



type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
  imagesList: string[];
};

type SimilarProductsProps = {
  onProductChange: (product: Product) => void;
};

export const SimilarProducts: React.FC<SimilarProductsProps> = ({ onProductChange }) => {
  const { slug } = useParams();

  return (
    <section className="px-6 py-8 mx-20">
      <h2 className="text-lg font-semibold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product:any, index:number) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm cursor-pointer"
            onClick={() => onProductChange(product)}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={256}
              height={256}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


