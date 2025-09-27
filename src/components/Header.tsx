import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side routing
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons
import logo from '@/assets/logo.png'; // Replace with your actual logo path

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
            {/* Desktop Navigation */}
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="hamburger-button lg:hidden text-white hover:text-red-500 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="mobile-menu fixed top-20 left-0 right-0 bg-[#0a0a0a] border-t border-gray-800 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => handleNavClick('top')} 
                className="text-white hover:text-red-500 hover:bg-gray-900 transition-colors font-medium px-6 py-4 text-left border-b border-gray-800"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-white hover:text-red-500 hover:bg-gray-900 transition-colors font-medium px-6 py-4 text-left border-b border-gray-800"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('kunjwal')} 
                className="text-white hover:text-red-500 hover:bg-gray-900 transition-colors font-medium px-6 py-4 text-left border-b border-gray-800"
              >
                Kunjwal
              </button>
              <button 
                onClick={() => handleNavClick('amenities')} 
                className="text-white hover:text-red-500 hover:bg-gray-900 transition-colors font-medium px-6 py-4 text-left border-b border-gray-800"
              >
                Amenities
              </button>
              <button 
                onClick={() => handleNavClick('register')} 
                className="text-white hover:text-red-500 hover:bg-gray-900 transition-colors font-medium px-6 py-4 text-left border-b border-gray-800"
              >
                Register
              </button>
              <button 
                onClick={() => handleNavClick('video')} 
                className="text-white hover:text-red-500 hover:bg-gray-900 transition-colors font-medium px-6 py-4 text-left"
              >
                Video
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
