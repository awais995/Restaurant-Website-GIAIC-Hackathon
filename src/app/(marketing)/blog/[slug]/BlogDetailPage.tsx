"use client"
import { useParams } from 'next/navigation'; // Use `useParams` for App Router
import { BlogPosts } from '../sidebarContent';
import Image from 'next/image';
import BlogSidebar from '../Sidebar';

export default function BlogDetailPage() {
  const params = useParams(); // Access route parameters
  const slug = params?.slug; // Get the `slug` parameter

  // Find the blog post by id
  const blogPost = BlogPosts.find((post) => post.id === parseInt(slug as string));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Blog Post Details */}
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image */}
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                  className="object-cover rounded-t-lg"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 px-3 py-1 rounded text-black text-sm font-bold">
                  {blogPost.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
                  <span>{blogPost.postDate}</span>
                  <span className="mx-2">/</span>
                  <span>{blogPost.comments} Comments</span>
                  <span className="mx-2">/</span>
                  <span>{blogPost.author}</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {blogPost.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {blogPost.description}
                </p>
                {/* Full Content */}
                <div className="prose max-w-none">
                  <p>{blogPost.content}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}