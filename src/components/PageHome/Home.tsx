import { Space } from "~/styles";

import AboutSection from "./AboutSection/AboutSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { DocumentSection } from "./DocumentSection";
import { FAQSection } from "./FAQSection";
import HeroSection from "./HeroSection/HeroSection";
import { LocationSection } from "./LocationSection/LocationSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import SponsorSection from "./SponsorSection/SponsorSection";

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
      <LocationSection />
      <ContactSection />
      <Space />
      <SponsorSection />
    </main>
  );
};

export default Home;
