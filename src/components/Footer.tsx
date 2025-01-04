"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

// Define types for props (if any)
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle email subscription
  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Simulate subscription success
    setIsSubscribed(true);
    setError(null);
    console.log("Subscribed with:", email);
    setEmail(""); // Clear input after subscription
  };

  return (
    <footer className="bg-black">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-4 md:px-32 py-12">
        <div className="text-white w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-primary">St</span>ill Need Our Support?
          </h2>
          <p className="text-xs md:text-base font-normal mt-4">
            Don&apos;t wait! Make a smart & logical quote here. It&apos;s pretty easy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-2 mt-6 md:mt-0 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary text-white py-2 px-4 rounded-md w-full md:w-64"
            aria-label="Enter your email address"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-primary py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Subscribe to newsletter"
          >
            {isSubscribed ? "Subscribed!" : "Subscribe Now"}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <hr className="my-8 border-primary mx-4 md:mx-32" />

      {/* Middle Section */}
      <div className="mx-auto w-full bg-black text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 px-4 md:px-32 py-8">
          {/* About Us */}
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

          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Useful Links</h2>
            <ul className="text-white font-medium">
              {[
                { name: "About", path: "/about" },
                { name: "News", path: "/news" },
                { name: "Partner", path: "/partner" },
                { name: "Team", path: "/team" },
                { name: "Menu", path: "/menu" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="mb-4">
                  <Link href={link.path} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help? */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Help?</h2>
            <ul className="text-white font-medium">
              {[
                { name: "FAQ", path: "/faq" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Reporting", path: "/reporting" },
                { name: "Documentation", path: "/documentation" },
                { name: "Support Policy", path: "/support-policy" },
                { name: "Privacy", path: "/privacy" },
              ].map((link, index) => (
                <li key={index} className="mb-4">
                  <Link href={link.path} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Recent Posts</h2>
            <ul className="text-gray-500 font-medium space-y-4">
              {[1, 2, 3].map((post, index) => (
                <li key={index} className="flex gap-4">
                  <Image
                    src={`/footer-${post}.png`}
                    alt={`Post ${post}`}
                    width={72}
                    height={72}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-sm text-white opacity-50">20 Feb 2022</h3>
                    <h3 className="text-lg text-white">Keep Your Business</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-4 md:px-32 py-6 bg-primary flex flex-col sm:flex-row sm:gap-4 items-center justify-between">
        <span className="text-sm text-white text-center sm:text-left">
          Copyright @ 2024 All Rights Reserved.
        </span>

        <div className="flex gap-4">
          {[
            { icon: FaFacebookF, url: "https://facebook.com" },
            { icon: FaTwitter, url: "https://twitter.com" },
            { icon: FaInstagram, url: "https://instagram.com" },
            { icon: FaYoutube, url: "https://youtube.com" },
            { icon: FaPinterest, url: "https://pinterest.com" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.icon.name.replace("Fa", "")}`}
            >
              <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray-100 transition-colors">
                <span className="text-[#4F4F4F] text-xl">
                  <social.icon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;