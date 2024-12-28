// components/ProductGrid.js
import Link from 'next/link';

const ProductGrid = ({ products }:any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products.map((product:any) => (
      <div key={product.id}>
        <Link href={`/products/${product.id}`} legacyBehavior>
          <a>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default ProductGrid;
