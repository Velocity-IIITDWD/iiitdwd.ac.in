import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import data from '../mockData/homePageData.json'; // Import the JSON file

interface SliderProps {
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Slider: React.FC<SliderProps> = ({
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Extract the URLs from the slider-images array in the JSON file
  const images = data['slider-images'];

  useEffect(() => {
    const handleAutoplay = () => {
      if (autoplay && sliderRef.current) {
        intervalRef.current = setInterval(() => {
          goToNext();
        }, autoplayInterval);
      }
    };

    handleAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, autoplayInterval]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <div className="relative overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="flex-none w-full relative h-80 md:h-96 lg:h-[65vh]" key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-800"
          onClick={goToPrev}
        >
          <span className="sr-only">Previous Slide</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-800"
          onClick={goToNext}
        >
          <span className="sr-only">Next Slide</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">About IIIT Dharwad</h2>
        <p className="text-lg">
          IIIT Dharwad is an institute of national importance established under an Act of Parliament. The institute offers undergraduate and postgraduate programs in various fields of technology and engineering. The vision of IIIT Dharwad is to become a globally recognized institution for its excellence in teaching, research, and innovation.
        </p>
      </div>
    </div>
  );
};

export default Slider;
