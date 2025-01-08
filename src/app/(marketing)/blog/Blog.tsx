import BlogSidebar from "./Sidebar";
import Link from "next/link";
import { BlogPosts } from "./sidebarContent";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Blog Posts */}
          <div className="flex-1 space-y-8">
            {BlogPosts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                    className="object-cover rounded-t-lg"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-yellow-500 px-3 py-1 rounded text-black text-sm font-bold">
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
                    <span>{item.postDate}</span>
                    <span className="mx-2">/</span>
                    <span>{item.comments} Comments</span>
                    <span className="mx-2">/</span>
                    <span>{item.author}</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <Link href={`/blog/${item.id}`}>
                    <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
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