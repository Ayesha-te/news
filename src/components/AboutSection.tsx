import React from "react";
import placeholderImage from "@/assets/ays.png"; // replace with your image later

const AboutSection = () => {
  return (
    <section className="relative py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
AYS Developers
          </h2>
          <p className="text-lg leading-relaxed text-primary space-y-4">
            Kunjwal City, Gujrat is proudly developed by AYS Developers (Pvt.) Ltd., a trusted name in the Pakistani real estate sector. Known for their commitment to quality, integrity, and long-term value, AYS Developers continue to set new standards in residential and commercial development.
            <br /><br />
            The company is led by Mr. Amjad and Mr. Yahya Amjad, whose leadership brings a visionary approach to urban development. With a focus on customer satisfaction, modern infrastructure, and community-driven planning, AYS Developers (Pvt.) Ltd. ensures that every project reflects excellence, transparency, and reliability.
            <br /><br />
            Their reputation for delivering sustainable and well-planned communities positions Kunjwal City Gujrat as not just a place to live, but a place to thrive.
            <br /><br />
          </p>
        </div>

        {/* Right Image with Text */}
        <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg">
          <img
            src={placeholderImage}
            alt="Kunjwal City"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
