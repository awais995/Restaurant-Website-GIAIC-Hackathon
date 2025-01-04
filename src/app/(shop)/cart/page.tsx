"use client";
import { useState } from "react";
import Hero2 from '../components/PagesHero';
import CartItem from "./Cart";
import Bill from "./Bills";

export default function CartPage() {
  const [subtotal, setSubtotal] = useState(0);

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
        ]}/>
        
      <CartItem />
      <Bill subtotal={subtotal} />
    </div>
  );
}

