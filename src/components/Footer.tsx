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
    <footer className="bg-[#014b76] border-t border-border text-white">
      <div className="container mx-auto px-4 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Kunjwal City" className="h-16 md:h-20 w-auto rounded-md" />
            </div>
            <p className="text-gray-200 leading-relaxed">
              Kunjwal City offers premium residential plots in Gujrat with modern amenities and transparent dealing.
            </p>

            <button
              onClick={() => {
                const a = document.createElement('a');
                a.href = paymentPdf;
                a.download = 'payment.pdf';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
              className="mt-2 inline-block bg-gradient-to-r from-[#b38c2e] to-[#e4c152] hover:opacity-90 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-[0_0_15px_rgba(228,193,82,0.5)] transition-all"
            >
              Payment Plan
            </button>

            <button
              onClick={() => {
                const a = document.createElement('a');
                a.href = mapPdf;
                a.download = 'map.pdf';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
              className="ml-8 mt-2 inline-block bg-gradient-to-r from-[#b38c2e] to-[#e4c152] hover:opacity-90 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-[0_0_15px_rgba(228,193,82,0.5)] transition-all"
            >
              Map
            </button>
          </div>

          {/* Our Location */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#e4c152]">Our Location</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-[#e4c152] font-semibold mb-2">Head Office</h4>
                <p className="text-gray-200 text-sm">
                  13-km, Sargodha Road<br />Gujrat, Punjab
                </p>
              </div>
              <div>
                <h4 className="text-[#e4c152] font-semibold mb-2">Office Hours</h4>
                <p className="text-gray-200 text-sm">Mon - Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#e4c152]">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-[#e4c152] font-semibold mb-1">Email</h4>
                <p className="text-gray-200">info@kunjwalcity.pk</p>
              </div>
              <div>
                <h4 className="text-[#e4c152] font-semibold mb-1">Phone</h4>
                <p className="text-gray-200">+92 3111786602</p>
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
                  />
                  <div className="absolute inset-0 bg-[#014b76]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Home className="text-white w-10 h-10" />
                  </div>
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/f6oJER8r31X2gmcYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-gradient-to-r from-[#b38c2e] to-[#e4c152] hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(228,193,82,0.5)] transition-all"
              >
                View Map
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579390076883" className="w-12 h-12 bg-[#b38c2e] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/kunjwalcity.gujrat?igsh=MW02NzUxMWxqMHlkMw==" className="w-12 h-12 bg-gradient-to-br from-[#b38c2e] to-[#e4c152] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#b38c2e] to-[#e4c152] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(228,193,82,0.5)] hover:opacity-90 transition-all z-40"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
