import React, { useState } from 'react';

const Slider = () => {
  const slides = [
    {
      title: 'FIRST CHAT FREE',
      description: 'Get free chat with free AI Astrologers',
      bg: 'bg-[#f8b58c]',
      buttonText: 'Chat Now',
      buttonColor: 'bg-red-600',
    },
    {
      title: 'Birat Kundali',
      description: 'One Solution FOR ALL Problems',
      bg: 'bg-violet-950 text-white',
      buttonText: 'Order Now',
      buttonColor: 'bg-yellow-600',
    },
    {
      title: 'Live Astrologers',
      description: 'Ask solutions, Get Answers',
      bg: 'bg-pink-200 text-gray-700',
      buttonText: 'Ask Now',
      buttonColor: 'bg-yellow-600',
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const { title, description, bg, buttonText, buttonColor } = slides[index];

  return (
    <div className={`h-64 w-auto text-center pt-10 px-6 mx-20 rounded-xl shadow ${bg}`}>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl pt-3 font-medium">{description}</p>
      <button className={`${buttonColor} text-white text-md px-4 py-2 mt-4 rounded`}>
        {buttonText}
      </button>

     
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
