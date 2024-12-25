import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu-3.jpeg' },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu-4.jpeg' },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu-5.jpeg' },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu-6.jpeg' },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu-7.jpeg' },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu-8.jpeg' },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu-9.jpeg' },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu-10.jpeg' },
];

const Menu = () => {
  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      <div className="container mx-auto">
        <h2 className="text-md text-primary font-bold text-center mb-2">Choose & Pick</h2>
        <h1 className="text-3xl font-bold text-center mb-8"><span className='text-primary'>Fr</span>om Our Menu</h1>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Breakfast</li>
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Lunch</li>
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Dinner</li>
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Dessert</li>
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Drink</li>
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Snack</li>
            <li className="cursor-pointer hover:text-yellow-500 transition duration-300">Soups</li>
          </ul>
        </div>

        <div className='flex flex-col lg:flex-row'>
          {/* Left Section: Decorative Image */}
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            <Image src="/menu-1.png" alt="Menu Decor" width={500} height={500} layout="responsive" />
          </div>

          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 flex-grow">
            {menuItems.map((item, index) => (
              <Link href="#" key={index} passHref>
                <div className="flex rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-1/3">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={100} 
                      height={100} 
                      className="object-cover h-[80%] transition-transform transform hover:scale-105" 
                    />
                  </div>
                  <div className="p-4 w-2/3">
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                    <p className="text-[11px] text-gray-400 mb-2">{item.description}</p>
                    <h2 className="text-primary font-bold">{item.price}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;