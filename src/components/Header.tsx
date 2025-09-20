import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import logo from '@/assets/logo.png'; // Replace with your logo path

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-[#0a0a0a] bg-gradient-to-r from-[#0a0a0a] to-[#0a0a0a]/90 backdrop-blur-md shadow-md'
      : 'bg-transparent bg-gradient-to-r from-transparent via-black/70 to-black/95'
  }`}
>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Kunjwal City Logo"
              className="w-[6rem] h-[6rem] object-contain"
            />
          </div>

          {/* Navigation + Contact on the right */}
          <div className="ml-auto flex items-center gap-x-8">
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors font-medium">Home</a>
              <a href="#about" className="text-white hover:text-red-500 transition-colors font-medium">About</a>
              <a href="#kunjwal" className="text-white hover:text-red-500 transition-colors font-medium">Kunjwal</a>
              <a href="#amenities" className="text-white hover:text-red-500 transition-colors font-medium">Amenities</a>
              <a href="#register" className="text-white hover:text-red-500 transition-colors font-medium">Register</a>
              <a href="#video" className="text-white hover:text-red-500 transition-colors font-medium">Video</a>
              <a href="#projects" className="text-white hover:text-red-500 transition-colors font-medium">Projects</a>
            </nav>

            {/* Contact */}
            <div className="flex items-center space-x-2 text-white">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+92 68 111-99-88-77</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
