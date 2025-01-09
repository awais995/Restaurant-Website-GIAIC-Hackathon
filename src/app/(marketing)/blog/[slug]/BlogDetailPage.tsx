"use client";
import { useParams } from 'next/navigation';
import { BlogPosts } from '../sidebarContent';
import Image from 'next/image';
import BlogSidebar from '../Sidebar';
import CommentSection from '../../components/Comments';
import { useState } from 'react';
import Link from 'next/link';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const [searchQuery, setSearchQuery] = useState('');

  const blogPost = BlogPosts.find((post) => post.id === parseInt(slug as string));
  const relatedPosts = BlogPosts.filter((post) => post.id !== blogPost?.id).slice(0, 3); // Get 3 related posts

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {blogPost.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {blogPost.description}
                </p>
                <div className="prose max-w-none">
                  <p>{blogPost.content}</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Related Posts</h2>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
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
                ))}
              </div>
            </div>

            {/* Comment Section */}
            <CommentSection postId={blogPost.id} />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <BlogSidebar searchQuery={searchQuery} onSearch={setSearchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}