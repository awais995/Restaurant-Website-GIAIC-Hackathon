import Image from 'next/image';
import { FC } from 'react';

const ActiveProcess: FC = () => {
  return (
    <section className="relative w-full h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Active-process.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-end h-full px-4 md:px-8 lg:px-16 text-white text-right">
        <h4 className="text-sm md:text-md lg:text-lg italic">Restaurant Active Process</h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl w-1/2 font-bold mt-4">
          <span className="text-primary text-wrap">We</span> Document Every Food Bean Process until it is saved
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna.
        </p>
        <div className="mt-6 flex space-x-4 justify-end">
          <button className="bg-primary text-black px-4 py-2 rounded-md transition-transform transform hover:scale-105">Read More</button>
          <button className="flex items-center bg-gray-800 px-4 py-2 transition-transform transform hover:scale-105 rounded-md">
            <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActiveProcess;
