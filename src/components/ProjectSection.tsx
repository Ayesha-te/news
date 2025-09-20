import React from 'react';
import { Button } from '@/components/ui/button';
import placeholderImage from '@/assets/hero-background.jpg'; // Replace with your image

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              KUNJWAL CITY
            </h2>
            <p className="text-lg text-muted-foreground">
              Every aspect of Kunjwal City has been meticulously planned to deliver lifestyle excellence and robust investment returns.
            </p>
          </div>

          {/* Right Content with Background Image + Overlay Text */}
          <div className="text-center">
            <div className="relative w-full h-[250px] lg:h-[300px] rounded-xl overflow-hidden shadow-lg mb-6">
              <img
                src={placeholderImage}
                alt="Kunjwal City"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
             
            </div>

            {/* Button just below image */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-gold"
            >
              Payment Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
