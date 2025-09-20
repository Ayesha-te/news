import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side routing
import logo from '@/assets/logo.png'; // Replace with your actual logo path

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Kunjwal City Logo"
              className="w-24 h-24 object-contain"
            />
          </Link>

          {/* Navigation */}
          <div className="ml-auto flex items-center gap-x-8">
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => handleNavClick('top')} className="text-white hover:text-red-500 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => handleNavClick('about')} className="text-white hover:text-red-500 transition-colors font-medium">
                About
              </button>
              <button onClick={() => handleNavClick('kunjwal')} className="text-white hover:text-red-500 transition-colors font-medium">
                Kunjwal
              </button>
              <button onClick={() => handleNavClick('amenities')} className="text-white hover:text-red-500 transition-colors font-medium">
                Amenities
              </button>
              <button onClick={() => handleNavClick('register')} className="text-white hover:text-red-500 transition-colors font-medium">
                Register
              </button>
              <button onClick={() => handleNavClick('video')} className="text-white hover:text-red-500 transition-colors font-medium">
                Video
              </button>
             
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
