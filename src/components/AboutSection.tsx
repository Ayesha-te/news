import React from "react";
import placeholderImage from "@/assets/he.jpg"; // replace with your image later

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 bg-[#014b76] scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b38c2e] to-[#e4c152] bg-clip-text text-transparent">
            AYS Developers (Pvt.) Ltd Building Trust, Creating Value
          </h2>

          <p className="text-white leading-relaxed space-y-4">
            Kunjwal City, Gujrat is proudly developed by{" "}
            <span className="text-[#e4c152] font-semibold">
              AYS Developers (Pvt.) Ltd.
            </span>{" "}
            — a trusted name in the Pakistani real estate sector. With an
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
        <div className="relative w-full overflow-hidden rounded-xl shadow-[0_0_20px_rgba(227,193,82,0.4)] flex justify-center">
          <img
            src={placeholderImage}
            alt="Kunjwal City"
            className="object-contain w-auto h-auto max-w-full max-h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
