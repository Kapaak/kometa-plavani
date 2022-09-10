//components
import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import HeroSection from "./HeroSection/HeroSection";
import ServiceSection from "./ServiceSection/ServiceSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection/>
    </main>
  );
};

export default Home;
