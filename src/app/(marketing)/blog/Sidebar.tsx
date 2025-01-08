import Image from 'next/image';
import Link from 'next/link';
import { recentPosts } from './sidebarContent';
import { menuItems } from './sidebarContent';
import { galleryPhotos } from './sidebarContent';
import { FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from 'react-icons/fa';

const BlogSidebar = () => {
    return (
 <aside className="bg-white text-black p-4 md:w-80 w-full">
 {/* Search Bar */}
 <div className="mb-6">
   <div className="flex items-center border border-yellow-500 rounded overflow-hidden">
     <input
       type="text"
       placeholder="Search Your Keyword..."
       className="w-full p-2 bg-white text-black focus:outline-none"
     />
     <button className="bg-yellow-500 p-4">
       <FaSearch className=" text-black" />
     </button>
   </div>
 </div>

 {/* Profile Section */}
 <div className="text-center mb-6">
   <div className="mb-4">
     <Image
       src="/profile Pic.jpg"
       alt="Profile"
       width={100}
       height={100}
       className="rounded-full mx-auto"
     />
   </div>
   <h2 className="text-lg font-semibold">Muhammad Awais</h2>
   <p className="text-sm">Blogger/Photographer</p>
   <p className="text-yellow-500">★★★★★ (1 Review)</p>
   <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
   <div className="flex justify-center space-x-4 mt-4">
   <Link href="https://www.facebook.com/"><FaFacebook className='w-6 h-6' /> </Link>
     <Link href="https://www.twitter.com/"><FaTwitter className='w-6 h-6'  /> </Link>
     <Link href="https://www.instagram.com/"><FaInstagram className='w-6 h-6'  /></Link>
     <Link href="https://www.pinterest.com/"><FaPinterest className='w-6 h-6'  /></Link>
   </div>
 </div>
 
 {/* Recent Posts */}
 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Recent Posts</h3>
 {recentPosts.map((post) => (
   <div key={post.id} className="flex items-center mb-4">
     {/* Image */}
     <div className="relative w-16 h-16 flex-shrink-0">
       <Image
         src={post.src}
         alt={`Post ${post.id}`}
         layout="fill"
         objectFit="cover"
         className="rounded"
       />
     </div>
     {/* Content */}
     <div className="ml-4">
       <h4 className="text-sm font-semibold">{post.date}</h4>
       <p className="text-sm text-gray-400">{post.description}</p>
     </div>
   </div>
 ))}
</div>

 {/* Filter by Menu */}
 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Filter By Menu</h3>
 {menuItems.map((item) => (
   <div key={item.id} className="flex items-center justify-between mb-3">
     {/* Image and Name */}
     <div className="flex items-center">
       <div className="relative w-12 h-12 flex-shrink-0">
         <Image
           src={item.src}
           alt={item.name}
           layout="fill"
           objectFit="cover"
           className="rounded"
         />
       </div>
       <span className="ml-4">{item.name}</span>
     </div>
     {/* Count */}
     <span className="text-gray-400">{item.count}</span>
   </div>
 ))}
</div>

 {/* Popular Tags */}
 <div className="mb-6">
   <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Popular Tags</h3>
   <div className="flex flex-wrap gap-2">
     {["Sandwich", "Tikka", "Blog", "Restaurant", "Chicken Shawarma", "Pizza"].map(
       (tag, idx) => (
         <span
           key={idx}
           className="bg-gray-200 shadow-sm px-2 py-1 rounded text-sm"
         >
           {tag}
         </span>
       )
     )}
   </div>
 </div>

 {/* Photo Gallery */}
 <div className="mb-6">
 <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Photo Gallery</h3>
 <div className="grid grid-cols-3 gap-2">
   {galleryPhotos.map((photo) => (
     <div key={photo.id} className="relative aspect-square">
       <Image
         src={photo.src}
         alt={photo.alt}
         layout="fill"
         objectFit="cover"
         className="rounded"
       />
     </div>
   ))}
 </div>
</div>

 {/* Follow Us */}
 <div className="text-center">
   <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Follow Us</h3>
   <div className="flex justify-center space-x-4">
    <Link href="https://www.facebook.com/"><FaFacebook className='w-8 h-8' /> </Link>
     <Link href="https://www.twitter.com/"><FaTwitter className='w-8 h-8' /> </Link>
     <Link href="https://www.instagram.com/"><FaInstagram className='w-8 h-8' /></Link>
     <Link href="https://www.pinterest.com/"><FaPinterest className='w-8 h-8' /></Link>
   </div>
 </div>
</aside>

);
};

 
export default BlogSidebar;