import React from 'react'
import Hero2 from '../components/PagesHero';

const Checkout = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Checkout"
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
          { label: 'Cart', href: '/cart' },
          { label: 'Checkout', href: '/checkout' }
        ]}
      />
    </div>
  )
}

export default Checkout;
