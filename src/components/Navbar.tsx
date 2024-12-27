"use client";

import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

interface NavbarProps {
  brandName: string;
  links: { name: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-black text-white p-4 w-full">
      {/* Brand */}
      <div className="flex justify-center items-center text-2xl font-bold">
        <span className="text-primary">Food</span>
        <span className="text-white">tuck</span>
      </div>

      <section className="flex items-center justify-between px-4 md:px-[15px] lg:px-[135px]">
        {/* Links */}
        <ul
          ref={menuRef}
          className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-30 text-white md:static md:flex md:flex-row md:items-center md:justify-center md:w-auto md:bg-transparent space-y-8 md:space-y-0 md:space-x-6 text-sm transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } md:transform-none md:opacity-100`}
        >
          {/* Close Button */}
          <button
            aria-label="Close Menu"
            className="absolute top-4 right-4 text-primary text-xl md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <HiX className="w-6 h-6" />
          </button>

          {links.map((item) => (
            <li
              key={item.name}
              className="hover:text-primary cursor-pointer text-[18px] px-4 md:px-0"
              onClick={() => setMenuOpen(false)}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Search Box and Cart Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-primary rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <CiSearch className="absolute top-2.5 right-3 w-5 h-5" />
          </div>
          <Link href="/cart">
            <IoBagHandle className="w-6 h-6" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          aria-label="Toggle Menu"
          className="text-primary md:hidden cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenuAlt3 className="w-6 h-6" />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;