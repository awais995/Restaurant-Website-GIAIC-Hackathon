// components/LatestBlog.jsx
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
    image: '/home-blog-1.png',
    date: '24 February 2024',
    comments: 4
  },
  {
    id: 2,
    title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
    image: '/home-blog-2.png',
    date: '24 February 2024',
    comments: 3
  },
  {
    id: 3,
    title: 'Curabitur rutrum velit ac congue malesuada',
    image: '/home-blog-3.png',
    date: '24 February 2024',
    comments: 5
  }
];

const LatestBlog = () => {
  return (
    <section className="bg-black py-8 px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Blog Pod</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            <span className="text-primary">L</span>atest News & Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                {/* Image Container */}
                <Link href={`${post.id}`}>
                <div className="aspect-w-12 aspect-h-12 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={700}
                    height={600}
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                </Link>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="text-gray-300 text-sm mb-2">
                    {post.date} | {post.comments} Comments
                  </div>
                  <h3 className="text-white text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                  <Link 
                    href="/blog" 
                    className="inline-block text-primary mt-3 hover:text-orange-400"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;