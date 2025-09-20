import React, { useRef, useState } from 'react';
import kunjwalImage from "@/assets/hero-background.jpg";
import gated from "@/assets/IMG-20250920-WA0010.jpg";
import Mosque from "@/assets/IMG-20250920-WA0012.jpg";
import play from "@/assets/IMG-20250920-WA0018.jpg";
import sports from "@/assets/inf_204_kohat-sports-complex-3_ih.jpg";
import security from "@/assets/closed-circuit-security-cameras.jpg";
import park from "@/assets/images.jpg";

const amenities = [
  { title: 'Gated Community', img: gated, key: 'gated-community' },
  { title: 'Grand Mosque', img: Mosque, key: 'grand-mosque' },
  { title: 'Kids Play Area', img: play, key: 'kids-play-area' },
  { title: 'Shopping Mall', img: kunjwalImage, key: 'shopping-mall' },
  { title: 'Sports Complex', img: sports, key: 'sports-complex' },
  { title: '24/7 Security', img: security, key: 'security' },
  { title: 'Park', img: park, key: 'park' },
];

const LeftArrow = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
    <path d="M24 30L12 18L24 6" stroke="#88B613" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrow = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
    <path d="M12 6L24 18L12 30" stroke="#88B613" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ITEMS_VISIBLE = 3;

const AmenitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = amenities.length - ITEMS_VISIBLE;

  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

  const getCardIndexFraction = (idx) => {
    return `${String(idx + 1).padStart(2, '0')}/${String(amenities.length).padStart(2, '0')}`;
  };

  return (
    <section id="amenities" className="py-16 bg-[#F9F9F9] relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2">
          <div>
            <h2 className="text-5xl lg:text-5xl font-bold text-primary leading-tight mb-1">
              Amenities
            </h2>
            <p className="text-gray-500 text-lg mt-3 mb-0 tracking-wide max-w-xl">
            
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 gap-6">
            <button onClick={handlePrev} disabled={currentIndex === 0}
              className={`rounded-full p-1 transition ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
              <LeftArrow />
            </button>
            <button onClick={handleNext} disabled={currentIndex === maxIndex}
              className={`rounded-full p-1 transition ${currentIndex === maxIndex ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
              <RightArrow />
            </button>
          </div>
        </div>
        <hr className="border-t border-gray-300 mb-8" />

        {/* Cards */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-12"
            style={{ transform: `translateX(-${currentIndex * 360}px)` }}
          >
            {amenities.map((amenity, idx) => (
              <div key={amenity.key} className="min-w-[320px] max-w-[340px] flex-shrink-0 relative">
                {/* Fraction + divider (top) */}
                <div className="flex flex-col items-start mb-5">
                  <span className="text-sm font-semibold text-gray-500 tracking-widest">{getCardIndexFraction(idx)}</span>
                  <hr className="w-full border-gray-300 mt-2" />
                </div>

                {/* Title (now above image like screenshot) */}
                <h3 className="text-xl md:text-2xl font-normal text-left tracking-wide uppercase text-primary mb-3 max-w-[260px]">
                  {amenity.title}
                </h3>

                {/* Image */}
                <div className="w-full h-[220px] md:h-[260px] rounded-md overflow-hidden">
                  <img src={amenity.img} alt={amenity.title} className="object-cover w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
