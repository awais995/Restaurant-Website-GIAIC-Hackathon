import Hero2 from '@/app/(shop)/components/PagesHero';
import React from 'react'

const Signin = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Sign in"
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
          { label: 'Signup', href: '/signup' },
          { label: 'Signin', href: '/signin' }
        ]}
      />
    </div>
  )
}

export default Signin;