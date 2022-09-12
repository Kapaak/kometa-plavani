//components
import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import HeroSection from "./HeroSection/HeroSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import SponsorSection from "./SponsorSection/SponsorSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <SponsorSection />
    </main>
  );
};

export default Home;
