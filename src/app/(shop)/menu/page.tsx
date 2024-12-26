import React from 'react'
import Hero2 from '../components/PagesHero'
import StarterMenu from './Startetmenu'

const menupage = () => {
  return (
    <div>
        <Hero2
        logoText="Foodtuck"
        menuTitle="Our Delicious Menu"
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
          { label: 'Menu', href: '/menu' }
        ]}
      />
      <StarterMenu />
    </div>
  )
}

export default menupage;