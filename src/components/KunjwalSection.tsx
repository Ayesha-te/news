import React from "react";
import kunjwalImage from "@/assets/New/6.jpg"; // replace with your actual image file

const KunjwalSection = () => {
  return (
    <section id="kunjwal" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
            Kunjwal City Gujrat
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-black"> 
              Kunjwal City Gujrat is a premium, master-planned residential
              community, strategically located at one of the most accessible and
              desirable locations in Gujrat, Punjab. Developed across 200+
              kanals, this gated community is designed to offer a modern lifestyle
              in a secure and serene environment.
            </p>

            <h3 className="text-2xl font-semibold text-primary">
              Residential & Commercial Opportunities
            </h3>
            <p className="text-black">
              Kunjwal City offers a diverse range of plot sizes to suit every need:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>Residential plots: 3 Marla to 13 Marla</li>
              <li>Commercial plots: 4 Marla to 8 Marla</li>
            </ul>
            <p className="text-black">
              Whether you're planning to build a home or grow your business,
              Kunjwal City provides the perfect platform for investment and living.
            </p>

           
          </div>
        </div>

        {/* Right Image with Hover Effect */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <img
            src={kunjwalImage}
            alt="Kunjwal City Gujrat"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default KunjwalSection;
