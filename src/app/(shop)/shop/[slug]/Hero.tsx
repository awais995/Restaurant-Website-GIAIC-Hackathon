import React from 'react'
import Hero2 from '../../components/PagesHero'

const ProductDetailHero = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Product Detail"
        backgroundImage="/hero-page-bg.png"
        navigationLinks={[
          { label: 'Home', href: '/' },
          { label: 'Menu', href: '/menu' },
          { label: 'Blog', href: '/blog' },
          { label: 'About', href: '/about' },
          { label: 'Shop', href: '/shop' },
          { label: 'Contact', href: '/contact' }
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' }
        ]}
      />

    </div>
  )
}

export default ProductDetailHero