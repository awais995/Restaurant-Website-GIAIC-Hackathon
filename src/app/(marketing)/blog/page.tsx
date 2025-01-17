import Hero2 from '@/app/(shop)/components/PagesHero';
import React from 'react'
import BlogCard from './Blog';

const Blog = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Blogs"
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
          { label: 'Blog', href: '/blog' }
        ]}
      />

      <BlogCard />
    </div>
  )
}

export default Blog;
