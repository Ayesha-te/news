import React from 'react';

const VirtualTourSection = () => {
  return (
    <section className="py-20 bg-kunjwal-navy-light">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-12">
          VIRTUAL TOUR OF KUNJWAL CITY PHASE - III
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Video/Image Container */}
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="Aerial view of Kunjwal City development site"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto shadow-gold">
                  <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-foreground text-lg font-medium">Watch Virtual Tour</p>
              </div>
            </div>
            
            {/* Logo Overlay */}
            <div className="absolute top-6 left-6 flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <div>
                <p className="text-primary font-bold text-sm">KUNJWAL</p>
                <p className="text-primary text-xs">PHASE - III</p>
              </div>
            </div>
            
            {/* Date Badge */}
            <div className="absolute bottom-6 left-6 bg-primary px-4 py-2 rounded shadow-gold">
              <p className="text-primary-foreground font-bold text-sm">JUL - 2025</p>
            </div>
            
            {/* Contact Info */}
            <div className="absolute top-6 right-6 text-foreground text-right">
              <p className="text-sm font-medium">(068) 111 99 88 77</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;