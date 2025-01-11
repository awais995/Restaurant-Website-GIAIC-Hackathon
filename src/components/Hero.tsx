import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <main className="w-full flex justify-center items-center bg-black relative z-10">
        {/* Background Image */}
        <Image
          src="/hero-bg.png"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-10"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-20 z-10"></div>

        <div className="relative w-full max-w-screen-xl h-[500px] flex flex-col md:flex-row justify-center items-center overflow-hidden px-4">
          {/* Content */}
          <div className="relative z-20 sm:w-full md:w-[50%] text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h3 className="text-primary font-sans text-base sm:text-lg md:text-xl">
              It&apos;s Quick & Amusing
            </h3>

            <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mt-2 flex flex-col sm:flex-row items-center sm:justify-start">
              <p>
                <span className="text-primary">The </span> Art of Speed{" "}
              </p>
            </h1>
            <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl pt-4">
              Food Quality
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start pt-5 pb-4 gap-4">
              <p className="text-white text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia facere voluptatum tempore massa conque.
              </p>
            </div>
            <button className="bg-primary hover:bg-orange-500 hover:text-white sm:px-3 w-[120px] h-[40px] md:w-[110px] md:h-[40px] md:px-4 sm:text-md py-2 text-gray-900 rounded-full">
             <Link href="/menu"> See Menu </Link>
            </button>
          </div>

          {/* Image Container */}
          <div className="relative sm:w-full md:w-[50%] lg:w-[40%] flex justify-center items-center mt-6 md:mt-0">
            <Image
              src="/hero-image.png"
              alt="Leaves"
              width={700}
              height={600}
              className="w-[180px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
