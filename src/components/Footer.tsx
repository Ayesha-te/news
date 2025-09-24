import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Home, ChevronUp } from 'lucide-react';
import paymentPdf from "@/assets/payment.pdf";
import mapPdf from "@/assets/map.pdf";
import mapThumb from "@/assets/New/1.jpg";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Kunjwal City" className="h-16 md:h-20 w-auto rounded-md" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
Kunjwal City offers premium residential plots in Gujrat with modern amenities and transparent dealing.            </p>

<button
              onClick={() => {
                const a = document.createElement('a');
                a.href = paymentPdf; // local asset
                a.download = 'payment.pdf';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
              className="mt-2 inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-lg font-medium shadow-gold transition-colors"
            >
              Payment Plan
            </button>
<button
              onClick={() => {
                const a = document.createElement('a');
                a.href = mapPdf; // local asset
                a.download = 'map.pdf';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
              className="ml-8 mt-2 inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-lg font-medium shadow-gold transition-colors"
            >
              Map
            </button>

          </div>


          {/* Our Location */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Our Location</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-primary font-semibold mb-2">Head Office</h4>
                <p className="text-muted-foreground text-sm">
13-km, Sargodha Road
Gujrat, Punjab                </p>
              </div>
              
              <div>
                <h4 className="text-primary font-semibold mb-2">Office Hours</h4>
                <p className="text-muted-foreground text-sm">
Mon - Sun: 9:00 AM - 6:00 PM                </p>
              </div>
              
             
              
              
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Get In Touch</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-primary font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">info@kunjwalcity.pk</p>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">Phone</h4>
                <p className="text-muted-foreground">+92 3111786602</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative group w-40 h-28 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <a
                  href="https://maps.app.goo.gl/f6oJER8r31X2gmcYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                  title="Open Map"
                >
                  <img
                    src={mapThumb}
                    alt="Kunjwal City Map"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `url(${mapThumb}) center/cover, #eee` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Home className="text-white w-10 h-10" />
                  </div>
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/f6oJER8r31X2gmcYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-gold transition-colors"
              >
                View Map
              </a>
            </div>
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579390076883" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/kunjwalcity.gujrat?igsh=MW02NzUxMWxqMHlkMw==" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-gold hover:bg-primary/90 transition-colors z-40"
      >
        <ChevronUp className="w-6 h-6 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;