import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import hero1 from "../assets/New/6.jpg";
import hero2 from "../assets/inf_204_kohat-sports-complex-3_ih.jpg";
import hero3 from "../assets/New/15.jpg";
import hero4 from "../assets/hero-background.jpg";

// Arrows
const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition duration-300"
  >
    <FaChevronRight size={20} />
  </button>
);
const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition duration-300"
  >
    <FaChevronLeft size={20} />
  </button>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [hero1, hero3, hero4];

  const handleScroll = () => {
    const section = document.getElementById("register");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden font-['Inter']">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="min-h-screen bg-cover bg-center flex items-center justify-start relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>

              {/* Text */}
              <div className="relative z-10 text-left px-6 md:px-12 max-w-2xl ml-12 animate-fadeInUp">
                <h1 className="text-white font-extrabold leading-tight mb-4 text-[clamp(40px,6vw,80px)] tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                  Kunjwal City
                </h1>

                <p className="bg-gradient-to-r from-[#b38c2e] to-[#e4c152] bg-clip-text text-transparent text-[clamp(20px,3vw,32px)] font-bold uppercase tracking-wide drop-shadow-[0_0_25px_rgba(228,193,82,0.6)] mb-8">
                  Building Dreams, Securing Tomorrow!
                </p>

                <button
                  onClick={handleScroll}
                  className="relative overflow-hidden bg-gradient-to-r from-[#b38c2e] to-[#e4c152] text-white font-bold uppercase tracking-wider px-10 py-4 rounded-xl shadow-lg transition-all duration-300 min-w-[220px]
                  hover:from-[#e4c152] hover:to-[#b38c2e] hover:shadow-2xl hover:-translate-y-1"
                >
                  Schedule Site Visit
                </button>

                {/* Accent */}
                <div className="flex items-center gap-4 mt-10">
                  <div className="w-16 h-[3px] bg-gradient-to-r from-[#b38c2e] to-transparent"></div>
                  <span className="text-sm text-white/80 uppercase tracking-widest">
                    Premium Living
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
