import React from "react";
import placeholderImage from "@/assets/ays.png"; // replace with your image later

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 bg-black scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            AYS Developers (Pvt.) Ltd Building Trust, Creating Value
          </h2>
          <p className="text-white leading-relaxed text-primary space-y-4">
            Kunjwal City, Gujrat is proudly developed by AYS Developers (Pvt.)
            Ltd., a trusted name in the Pakistani real estate sector. With an
            unwavering commitment to quality, integrity, and long-term value,
            AYS Developers continue to set new standards in residential and
            commercial development.
            <br />
            <br />
            Backed by visionary leadership and a forward-looking approach to
            urban planning, the company focuses on customer satisfaction, modern
            infrastructure, and community-driven development. Every project by
            AYS Developers (Pvt.) Ltd. reflects excellence, transparency, and
            reliability.
            <br />
            <br />
            With a proven track record of delivering sustainable and well-planned
            communities, AYS Developers position Kunjwal City Gujrat not just as
            a place to live, but a place to thrive.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg">
          <img
            src={placeholderImage}
            alt="Kunjwal City"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
