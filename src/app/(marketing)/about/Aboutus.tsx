import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      {/* First Section: Content and Buttons */}
      <section className="text-white body-font bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 py-24 px-6">
          {/* Left Section: Images */}
          <div className="flex flex-col md:w-1/2 space-y-8 mb-8 md:mb-0">
            <div className="flex justify-center md:justify-start">
              <Image
                className="object-cover object-center rounded-lg"
                alt="hero"
                src="/aboutpage/1.png"
                width={250}
                height={250}
              />
            </div>
            <div className="relative flex space-x-4 justify-center md:justify-start">
              <Image
                className="  object-cover object-center rounded-lg"
                alt="image2"
                src="/aboutpage/yougart.png"
                width={250}
                height={250}
              />
              <Image
                className=" absolute bottom-28 right-16 object-cover object-center rounded-lg"
                alt="image3"
                src="/aboutpage/crunch.png"
                width={250}
                height={250}
              />
            </div>
          </div>

          {/* Right Section: Text and Buttons */}
          <div className="flex flex-col md:w-1/2 space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
                About Us
              </h1>
              <p className="text-black title-font text-3xl font-bold">
                Food is an important part of a balanced diet
              </p>
              <p className="mb-8 mt-4 text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
                velit in consequat.
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Why Choose Us */}
      <section className="text-white body-font bg-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-black text-3xl font-bold">Why Choose Us</h1>
          <p className="text-black text-lg mt-2 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10 object-cover object-center w-full md:w-[1320px] mx-auto rounded-lg"
            alt="hero"
            src="/aboutpage/banner.png"
            width={1320}
            height={386}
          />
        </div>
      </section>

      {/* Third Section: Features */}
      <section className="text-white body-font bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-wrap justify-center md:justify-start -m-4">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full flex justify-center items-center flex-col border-2 rounded-lg overflow-hidden p-6 bg-white">
                <Image
                  src="/aboutpage/Student.png"
                  width={80}
                  height={80}
                  alt="BEST CHEF"
                  className="mb-4"
                />
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  BEST CHEF
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden p-6 bg-white">
                <Image
                  src="/aboutpage/Coffee.png"
                  width={80}
                  height={80}
                  alt="120 Item food"
                  className="mb-4"
                />
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  120 Item Food
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden p-6 bg-white">
                <Image
                  src="/aboutpage/Person.png"
                  width={80}
                  height={80}
                  alt="Clean Environment"
                  className="mb-4"
                />
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  Clean Environment
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
