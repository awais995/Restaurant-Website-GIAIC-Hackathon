import React from 'react'
import Hero2 from '../../components/PagesHero'

const ProductPage = () => {
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
          { label: 'Shop', href: '/shop' },
          { label: 'Product Detail', href: '/productpage' }
        ]}
      />
    </div>
  )
}

export default ProductPage
