"use client"
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/Al-amin.png",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: 4
  },

  {
    id: 1,
    name: "Awais",
    role: "Food Specialist",
    image: "/Awais.jpg",
    quote: "Food is very delicious and unique taste i have ever tried. Very Delicious food every one must try once in a life.",
    rating: 5
  },

  // Add more testimonials here...
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-black min-h-screen relative py-2 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="flex text-primary font-cursive text-2xl mb-2">
            Testimonials
          </h3>
          <h2 className="text-white flex text-4xl font-bold">
            What our client are saying
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 relative">
          {/* Quote Mark */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <span className="text-primary text-8xl">&quot;</span>
          </div>

          {/* Avatar */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center pt-12">
            <p className="text-gray-600 mb-6">
              {testimonials[currentSlide].quote}
            </p>

            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {testimonials.map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < testimonials[currentSlide].rating
                      ? 'text-primary'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <h4 className="text-xl font-semibold">
              {testimonials[currentSlide].name}
            </h4>
            <p className="text-gray-500">
              {testimonials[currentSlide].role}
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? 'bg-primary'
                  : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;