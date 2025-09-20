import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProjectSection from "@/components/ProjectSection";
import RegistrationForm from "@/components/RegistrationForm";
import VirtualTourSection from "@/components/VirtualTourSection";
import AboutSection from "@/components/AboutSection";
import KunjwalSection from "@/components/KunjwalSection";
import Footer from "@/components/Footer";
import AmenitiesSection from "@/components/AmenitiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <KunjwalSection />
                <VideoSection />


        <AmenitiesSection />
                {/* <ProjectSection /> */}

                <RegistrationForm />

        {/* <VirtualTourSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
