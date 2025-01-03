import Link from "next/link";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  onSale?: boolean;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Link key={product.id} href={`/shop/${product.id}`} legacyBehavior>
          <a>
            <ProductCard product={product} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
