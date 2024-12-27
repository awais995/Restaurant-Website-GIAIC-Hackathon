import Hero2 from '@/app/(shop)/components/PagesHero';
import React from 'react'

const Signup = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Sign up"
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
          { label: 'Signin', href: '/signin' },
          { label: 'Signup', href: '/signup' }
        ]}
      />
    </div>
  )
}

export default Signup;