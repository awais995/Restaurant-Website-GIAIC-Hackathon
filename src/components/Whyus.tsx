"use client"
import Image from 'next/image';
import { FaHamburger, FaPizzaSlice, FaWineGlassAlt } from 'react-icons/fa';
import { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
// Modal.setAppElement('#__next');

// Define the Item interface
interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
}

const WhyChooseUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (item: Item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const items: Item[] = [
    { id: 1, name: 'Tacos', image: '/whyus-1.png', description: 'Delicious tacos with a variety of fillings.' },
    { id: 2, name: 'Burger', image: '/whyus-2.png', description: 'Juicy burgers made with fresh ingredients.' },
    { id: 3, name: 'Fries', image: '/whyus-3.png', description: 'Crispy fries seasoned to perfection.' },
    { id: 4, name: 'Salad', image: '/whyus-4.png', description: 'Healthy salads with a mix of greens and toppings.' },
    { id: 5, name: 'Pasta', image: '/whyus-5.png', description: 'Creamy pasta dishes with rich flavors.' },
    { id: 6, name: 'Dessert', image: '/whyus-6.png', description: 'Decadent desserts to satisfy your sweet tooth.' },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16" id="why-choose-us">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(items[0])}>
              <Image
                src={items[0].image}
                alt={items[0].name}
                layout="responsive"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-1 grid gap-4 relative left-4 right-0 top-10">
            <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(items[1])}>
              <Image
                src={items[1].image}
                alt={items[1].name}
                layout="responsive"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(items[2])}>
              <Image
                src={items[2].image}
                alt={items[2].name}
                layout="responsive"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(items[3])}>
              <Image
                src={items[3].image}
                alt={items[3].name}
                layout="responsive"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(items[4])}>
                <Image
                  src={items[4].image}
                  alt={items[4].name}
                  layout="responsive"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(items[5])}>
                <Image
                  src={items[5].image}
                  alt={items[5].name}
                  layout="responsive"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
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
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => alert('Fast Food selected!')}>
              <div className="bg-primary p-3 rounded-full transform transition-transform duration-300 hover:scale-110">
                <FaHamburger className="text-white text-xl md:text-2xl" />
              </div>
              <span className="text-sm md:text-base">Fast Food</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => alert('Lunch selected!')}>
              <div className="bg-primary p-3 rounded-full transform transition-transform duration-300 hover:scale-110">
                <FaPizzaSlice className="text-white text-xl md:text-2xl" />
              </div>
              <span className="text-sm md:text-base">Lunch</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => alert('Dinner selected!')}>
              <div className="bg-primary p-3 rounded-full transform transition-transform duration-300 hover:scale-110">
                <FaWineGlassAlt className="text-white text-xl md:text-2xl" />
              </div>
              <span className="text-sm md:text-base">Dinner</span>
            </div>
          </div>

          {/* Years of Experience Section */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="bg-white flex gap-4 w-70 items-center justify-between text-primary font-bold text-2xl md:text-3xl px-6 py-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              30+
              <div className="text-gray-400 text-sm md:text-base">
                Years of<br />
                <span className='text-black'>Experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Item Details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Item Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedItem && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700">{selectedItem.description}</p>
            <button onClick={closeModal} className="mt-4 bg-primary text-white px-4 py-2 rounded-lg">
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default WhyChooseUs;