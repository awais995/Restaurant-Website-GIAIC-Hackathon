import Hero2 from '@/app/(shop)/components/PagesHero';
import React from 'react'
import Aboutus from './Aboutus';

const About = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="About"
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
          { label: 'About', href: '/about' }
        ]}
      />

      <Aboutus />
    </div>
  )
}

export default About;
