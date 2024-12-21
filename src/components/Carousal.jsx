import React, { useState, useEffect } from 'react';

import { companies } from '../asset/companies/companies';

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === companies.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, [companies.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? companies.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === companies.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='py-20 bg-blue-800'>
<div className=' m-15'>
      <h1 className='text-center text-white text-5xl font-serif font-bold py-10'>Get Job In Top MNC</h1>
      <div className="relative w-full  mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {companies.map((image, index) => (
          <div key={index} className="min-w-full flex justify-center">
           <div className='pb-20'>
           <img src={image.path} alt={`Slide ${index + 1}`} className="h-14 justify-center items-center" />
           </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {companies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
    </div>

    </div>
  );
};

export default Carousel;
