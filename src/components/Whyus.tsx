import Image from 'next/image';
import { FaHamburger, FaPizzaSlice, FaWineGlassAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
          <div className="row-span-2 col-span-2 h-full">
            <Image
              src="/whyus-1.png"
              alt="Tacos"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <Image
              src="/whyus-2.png"
              alt="Burger"
              layout="responsive"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <Image
              src="/whyus-3.png"
              alt="Fries"
              layout="responsive"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <Image
              src="/whyus-4.png"
              alt="Salad"
              layout="responsive"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <Image
              src="/whyus-5.png"
              alt="Pasta"
              layout="responsive"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 col-span-1 h-full">
            <Image
              src="/whyus-6.png"
              alt="Dessert"
              layout="responsive"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h3 className="text-primary text-lg md:text-xl font-semibold">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Extra <span className="text-primary">ordinary taste</span> <br />
            And Experienced
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu et in consequat.
          </p>

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-3 rounded-full">
                <FaHamburger className="text-white text-xl md:text-2xl" />
              </div>
              <span className="text-sm md:text-base">Fast Food</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-3 rounded-full">
                <FaPizzaSlice className="text-white text-xl md:text-2xl" />
              </div>
              <span className="text-sm md:text-base">Lunch</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-3 rounded-full">
                <FaWineGlassAlt className="text-white text-xl md:text-2xl" />
              </div>
              <span className="text-sm md:text-base">Dinner</span>
            </div>
          </div>

          {/* Years of Experience Section */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="bg-white flex gap-4 w-70 items-center justify-between text-primary font-bold text-2xl md:text-3xl px-6 py-4 rounded-lg">
              30+
              <div>
              <div className="text-gray-400 text-sm md:text-base">Years of<br /> <span className='text-black'>Experienced</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;