import React from 'react';
import { Play } from 'lucide-react';
import promoVideo from '@/assets/video.mp4'; // <-- import your video here

const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-soft">
            <video 
              src={promoVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Logo Overlay */}
            <div className="absolute top-6 left-6 flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <div>
                <p className="text-primary font-bold text-sm">KUNJWAL</p>
                <p className="text-primary text-xs">CITY</p>
              </div>
            </div>

            {/* Title Overlay */}
            

            {/* YouTube Actions */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <button className="text-white/80 hover:text-white text-sm">Watch Later</button>
              <button className="text-white/80 hover:text-white text-sm">Share</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
