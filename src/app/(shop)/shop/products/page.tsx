import React from 'react'
import ProductDetail from './ProductDetail';
import { KeyBenefits, ProductDescription, SimilarProducts } from './PDSections';

const ProductPage = () => {
  return (
    <div>
    <ProductDetail />
    <ProductDescription />
    <KeyBenefits />
    <SimilarProducts />
    </div>
  )
}

export default ProductPage;