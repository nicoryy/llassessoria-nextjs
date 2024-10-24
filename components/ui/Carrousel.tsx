'use client'

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useCallback } from "react";

interface Item {
  id: number;
  title: string;
  sub: string;
  img: StaticImageData;
}

const AutoCarousel = ({ items }: { items: Item[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, nextSlide]);

  return (
    <div 
      className="relative w-full h-[calc(100vh-68px)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-full h-full relative grid place-items-center"
          >
            <Image
              placeholder="blur"
              width={1920}
              height={1080}
              loading="lazy"
              quality={80}
              src={item.img}
              alt={item.title}
              className="absolute h-full w-full object-cover"
            />
            <span className="bg-black/50 absolute left-0 top-0 h-full w-full" />
            <div className="text-white flex-col items-center justify-center transform w-96 lg:w-[60em] text-center z-10">
              <h1 className="text-3xl font-bold mb-10 uppercase">{item.title}</h1>
              <p className="text-xl">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="btn btn-circle text-3xl text-[#f3f3f3] bg-black/30 hover:bg-black/50 border-none"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="btn btn-circle text-3xl text-[#f3f3f3] bg-black/30 hover:bg-black/50 border-none"
        >
          ❯
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;