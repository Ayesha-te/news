import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import hero1 from "../assets/New/6.jpg";
import hero2 from "../assets/New/22.jpg";
import hero3 from "../assets/New/15.jpg";
import hero4 from "../assets/New/1.jpg";

// Custom Next Arrow
const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
  >
    <FaChevronRight size={20} />
  </button>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
  >
    <FaChevronLeft size={20} />
  </button>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // 5s
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [hero1, hero2, hero3, hero4];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Centered Text */}
              <h1 className="relative z-10 text-white text-5xl lg:text-7xl font-bold tracking-wide drop-shadow-lg text-center">
                Kunjwal City
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
