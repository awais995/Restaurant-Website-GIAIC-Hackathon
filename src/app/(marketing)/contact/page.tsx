
import Hero2 from '@/app/(shop)/components/PagesHero'
import React from 'react'
import ContactPage from './contact';

const Contact = () => {
  return (
    <div>
        <Hero2
        logoText="Foodtuck"
        menuTitle="Contact US"
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
      <ContactPage />
    </div>
  )
}

export default Contact;