"use client"
import Hero2 from '@/app/(shop)/components/PagesHero';
import React from 'react'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onClick }:any) => {
  return (
    <div className="border-b border-gray-200 py-4 mx-10">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <FaMinus className="h-5 w-5 text-gray-500" />
        ) : (
          <FaPlus className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      question: "How we serve food?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "How is our food quality?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "How do we give home delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
  ];

  const toggleItem = (index:any) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div>
      <Hero2
        logoText="Foodtuck"
        menuTitle="FAQ&apos;s"
        backgroundImage="/hero-page-bg.png"
        navigationLinks={[
          { label: 'Home', href: '/' },
          { label: 'Menu', href: '/menu' },
          { label: 'Blog', href: '/blog' },
          { label: 'About', href: '/about' },
          { label: 'Shop', href: '/shop' },
          { label: 'Contact', href: '/contact' }
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' }
        ]}
      />
      
      <section className="py-12 px-12 m-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Questions Looks Here
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>

    </div>
  )
}

export default FAQ;
