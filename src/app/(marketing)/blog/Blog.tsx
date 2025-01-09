"use client";
import { useState } from 'react';
import { BlogPosts } from './sidebarContent';
import BlogSidebar from './Sidebar';
import Link from 'next/link';
import Image from 'next/image';

const POSTS_PER_PAGE = 5; // Number of posts per page

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on search query
  const filteredPosts = BlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {post.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                      {post.description}
                    </p>
                    <Link href={`/blog/${post.id}`}>
                      <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-primary border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No posts found.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center space-x-4 mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === i + 1
                      ? 'bg--primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <BlogSidebar searchQuery={searchQuery} onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}