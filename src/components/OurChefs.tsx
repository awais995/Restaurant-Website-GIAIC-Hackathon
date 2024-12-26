"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurChefs = () => {
  // Dynamic data for chefs
  const chefs = [
    { id: 1, src: '/Chef-1.jpeg', alt: 'Chef 1', href: '/chef/1' },
    { id: 2, src: '/Chef-2.jpeg', alt: 'Chef 2', href: '/chef/2' },
    { id: 3, src: '/Chef-3.jpeg', alt: 'Chef 3', href: '/chef/3' },
    { id: 4, src: '/Chef-4.jpeg', alt: 'Chef 4', href: '/chef/4' },
  ];

  return (
    <div>
      <section className="bg-black md:px-[135px] py-[50px]">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center fade-in">
          <h1 className="md:text-[32px] text-[24px] font-normal text-primary whitespace-nowrap font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-primary">Me</span>et Our Chefs
          </h1>
        </div>

        {/* Chefs Images Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          {chefs.map((chef) => (
            <Link href={chef.href} key={chef.id} passHref>
              <div className="image-container fade-in">
                <Image
                  src={chef.src}
                  alt={chef.alt}
                  width={700}
                  height={600}
                  className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer rounded-lg object-cover transition-transform transform hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center py-6 fade-in">
          <Link href="/chefs">
            <button className="text-white p-3 rounded-3xl bg-black border border-primary shadow-lg hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-110">
              See More
            </button>
          </Link>
        </div>
      </section>

      {/* Simple CSS for Animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OurChefs;