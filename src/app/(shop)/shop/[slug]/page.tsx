import React from 'react'
import ProductDetailHero from './Hero'
import ProductDetailPage from './ProductDetail'
import { KeyBenefits, ProductDescription, SimilarProducts } from './PDSections'

const ProductDetail = () => {
  return (
    <div>
      <ProductDetailHero />
      <ProductDetailPage />
      <ProductDescription />
      <KeyBenefits />
      <SimilarProducts />
    </div>
  )
}

export default ProductDetail 