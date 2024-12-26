import { Coffee } from 'lucide-react';
import Image from "next/image";

interface MenuItem {
  name: string;
  price: number;
  description: string;
  calories: number;
  highlight?: boolean;
}

interface StarterMenuProps {
  title: string;
  imageSrc: string;
  menuItems: MenuItem[];
}

export default function MenuComponent({ title, imageSrc, menuItems }: StarterMenuProps) {
  return (
    <section className="w-full mx-auto py-8 mt-[20px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={`${title} image`}
            width={448}
            height={626}
            className="w-full h-[450px] max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex items-center mb-8 space-x-2">
            <Coffee className="text-[#FF9F0D]" size={24} />
            <h1 className="text-[40px] leading-[40px]  text-[#333333] font-bold pb-2">
              {title}
            </h1>
          </div>
          <div className="space-y-6 ">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-2"
              >
                <div className="flex justify-between items-center pb-2">
                  <h3
                    className={`text-md sm:text-lg md:text-xl font-bold ${
                      item.highlight ? 'text-[#FF9F0D]' : 'text-gray-900'
                    }`}
                  >
                    <h1 className='text-primary'>{item.name} </h1>
                  </h3>
                  <span className="text-md sm:text-lg md:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 ">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 pb-2">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
