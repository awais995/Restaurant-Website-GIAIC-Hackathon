"use client";
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from 'react-icons/fa';
import { recentPosts, menuItems, galleryPhotos } from './sidebarContent';
import Link from 'next/link';
import Image from 'next/image';

interface BlogSidebarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const BlogSidebar = ({ searchQuery, onSearch }: BlogSidebarProps) => {
  const [email, setEmail] = useState(''); // State for newsletter subscription

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <aside className="bg-white text-black p-4 md:w-80 w-full shadow-lg rounded-lg">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex items-center border border-primary rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search Blog Posts..."
            className="w-full p-3 bg-white text-black focus:outline-none placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="bg-primary p-4 hover:bg-orange-600 transition-colors">
            <FaSearch className="text-black" />
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="mb-4">
          <Image
            src="/Profile-Pic.jpg"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full mx-auto border-4 border-primary"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">Muhammad Awais</h2>
        <p className="text-sm text-gray-600">Blogger/Photographer</p>
        <p className="text-primary text-sm mt-2">★★★★★ (1 Review)</p>
        <p className="text-gray-500 text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-gray-600 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-gray-600 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-gray-600 hover:text-primarytransition-colors" />
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="w-6 h-6 text-gray-600 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Subscribe to Our Newsletter</h3>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg--primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Recent Posts</h3>
        {recentPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="flex items-center mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={post.src}
                  alt={`Post ${post.id}`}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-semibold">{post.date}</h4>
                <p className="text-sm text-gray-500">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Filter by Menu */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Filter By Menu</h3>
        {menuItems.map((item) => (
          <Link key={item.id} href={`/menu/${item.id}`}>
            <div className="flex items-center justify-between mb-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                </div>
                <span className="ml-4 text-gray-700">{item.name}</span>
              </div>
              <span className="text-gray-500">{item.count}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Popular Tags */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Sandwich", "Tikka", "Blog", "Restaurant", "Chicken Shawarma", "Pizza"].map(
            (tag, idx) => (
              <Link key={idx} href={`/tags/${tag.toLowerCase()}`}>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  {tag}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {galleryPhotos.map((photo) => (
            <Link key={photo.id} href={`/gallery/${photo.id}`}>
              <div className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 text-gray-600 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-8 h-8 text-gray-600 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 text-gray-600 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="w-8 h-8 text-gray-600 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;