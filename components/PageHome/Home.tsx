//components
import AboutSection from "./AboutSection/AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import ServiceSection from "./ServiceSection/ServiceSection";

const Home = () => {
  return (
    <main style={{ position: "relative" }}>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      {/* contat page */}
    </main>
  );
};

export default Home;
