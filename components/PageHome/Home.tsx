//components
import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import { DocumentSection } from "./DocumentSection";
import { FAQSection } from "./FAQSection";
import HeroSection from "./HeroSection/HeroSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import SponsorSection from "./SponsorSection/SponsorSection";
//styles
import { Space } from "@/styles";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Space half />
      <AboutSection />
      <Space half />
      <ServiceSection />
      <Space />
      <FAQSection />
      <Space />
      <DocumentSection />
      <Space />
      <ContactSection />
      <Space />
      <SponsorSection />
    </main>
  );
};

export default Home;
