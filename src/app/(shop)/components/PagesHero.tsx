"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { PiHandbag, PiUser } from 'react-icons/pi';


function Hero2({
  logoText = 'Foodtuck',
  menuTitle = 'Our Menu',
  backgroundImage = '/heropic.png',
  navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pages', href: '/pages' },
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
  ],
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
  ],
}) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
  };

  return (
    <section
      className="relative w-full bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-white">
            {logoText && (
              <div className="text-primary">
                Food<span className="text-white">tuck</span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search Input - Hidden on small screens */}
            <button className="relative hidden lg:block text-white hover:text-orange-500">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
              />
              <CiSearch className="absolute top-2.5 right-3 h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            {/* Search Icon - Visible on small screens */}
            <button className="block lg:hidden text-white hover:text-orange-500">
              <CiSearch className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>

            {/* User Icon with Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-orange-500"
                onClick={toggleUserMenu}
              >
                <PiUser className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-black text-white shadow-lg rounded-md">
                  <Link
                    href="/signin"
                    className="block px-4 py-2 hover:bg-orange-500"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 hover:bg-orange-500"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <Link href="/cart">
              <button className="text-white hover:text-orange-500">
                <PiHandbag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
            {menuTitle}
          </h1>
          <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.href}>
                <Link
                  href={breadcrumb.href}
                  className={
                    index === 1
                      ? 'text-[#FF9F0D]'
                      : 'text-white hover:text-[#FF9F0D] transition-colors duration-300'
                  }
                >
                  {breadcrumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="text-white">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
