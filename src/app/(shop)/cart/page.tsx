import React from 'react'
import Hero2 from '../components/PagesHero';
import Bill from './Bills';
import CartItems from './Cart';

const Cart = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Cart"
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
          { label: 'cart', href: '/cart' }
        ]}
      />

      <CartItems />
      <Bill />
    </div>
  )
}

export default Cart;
