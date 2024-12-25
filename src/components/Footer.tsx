import React from "react";
import Image from "next/image";


import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-col md:flex-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center text-ellipsis bg-black px-4 md:px-32 py-12">
        <div className="text-white w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-primary">St</span>ill Need Our Support?
          </h2>
          <p className="text-xs md:text-base font-normal mt-4">
            Don&apos;t wait! Make a smart & logical quote here. It&apos;s pretty easy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-2 mt-6 md:mt-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-primary text-white py-2 px-4 rounded-md"
          />
          <button className="bg-white text-primary py-2 px-4 rounded-md">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-8 border-primary mx-4 md:mx-32" />

      <div className="mx-auto w-full max-w-screen-xl bg-black text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-12 px-4 md:px-32 py-8">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">About Us</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-white text-base font-normal">
                  Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-primary flex justify-center items-center w-16 h-16">
                  <span className="text-white text-2xl">
                    <PiClockClockwiseBold />
                  </span>
                </div>

                <div>
                  <h2 className="text-lg text-white font-normal">Opening Hours</h2>
                  <h3 className="text-sm font-normal text-white">Mon - Sat (8:00 - 18:00)</h3>
                  <h3 className="text-sm font-normal text-white">Sunday - Closed</h3>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold">Useful Links</h2>
            <ul className="text-white font-medium">
              <li className="mb-4"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">News</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Partner</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Team</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Menu</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold">Help?</h2>
            <ul className="text-white font-medium">
              <li className="mb-4"><a href="/FAQ" className="hover:underline">FAQ</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Reporting</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Documentation</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Support Policy</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold">Recent Posts</h2>
            <ul className="text-gray-500 font-medium space-y-4">
              <li className="flex gap-4">
                <Image src="/footer-1.png" alt="Post Image" width={72} height={72} />
                <div>
                  <h3 className="text-sm text-white opacity-50">20 Feb 2022</h3>
                  <h3 className="text-lg text-white">Keep Your Business</h3>
                </div>
              </li>
              <li className="flex gap-4">
                <Image src="/footer-2.png" alt="Post Image" width={72} height={72} />
                <div>
                  <h3 className="text-sm text-white opacity-50">20 Feb 2022</h3>
                  <h3 className="text-lg text-white">Keep Your Business</h3>
                </div>
              </li>
              <li className="flex gap-4">
                <Image src="/footer-3.png" alt="Post Image" width={72} height={72} />
                <div>
                  <h3 className="text-sm text-white opacity-50">20 Feb 2022</h3>
                  <h3 className="text-lg text-white">Keep Your Business</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full px-4 py-6 bg-primary flex flex-col sm:flex-row sm:gap-4 items-center justify-evenly">
          <span className="text-sm text-white text-center sm:text-left">
            Copyright @ 2024 All Rights Reserved.
          </span>

          <div className="flex gap-4 ">
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <span className="text-[#4F4F4F] text-xl">
              <FaFacebookF  />
              </span>
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <span className="text-[#4F4F4F] text-xl">
              <FaTwitter  />
              </span>
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <span className="text-[#4F4F4F] text-xl">
              <FaInstagram  />
              </span>
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <span className="text-[#4F4F4F] text-xl">
              <FaYoutube  />
              </span>
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <span className="text-[#4F4F4F] text-xl">
              <FaPinterest  />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;