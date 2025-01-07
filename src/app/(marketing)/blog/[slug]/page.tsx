import Hero2 from '@/app/(shop)/components/PagesHero'
import React from 'react'
import BlogDetailPage from './BlogDetailPage';

const BlogDetail = () => {
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="Blog-Detail"
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
          { label: 'Blogs', href: '/blog' },
          { label: 'Blog-Detail', href: '/blog/blog-detail' }
        ]}
      />
      <BlogDetailPage />
    </div>
  )
}

export default BlogDetail
