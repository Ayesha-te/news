import React from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Content */}
     

      {/* Bottom Left Text */}
      <div className="absolute bottom-6 left-6 z-10">
         <h1 className="text-6xl lg:text-8xl font-bold text-foreground mb-4 tracking-wider text-primary">
            Kunjwal City
          </h1>
      </div>
    </section>
  );
};

export default HeroSection;
