//components
import { getAllSheets, getRowsBySheetId } from "libs/google";
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
  //function that will resolve all sheets

  const getAll = async () => {
    const sheets = await getAllSheets(["0", "1955007726", "1941806095"]);

    sheets &&
      Promise.allSettled(sheets)
        .then((resSheets: any) => {
          const updated = resSheets.map((sheet: any) => sheet.value);
          // const updated = resSheets.map((sheet: any) => sheet.value.length);
          console.log("updated", updated);
        })
        .catch((e) => console.log("promise error", e));
  };
  return (
    <main>
      <button onClick={getAll}>show all</button>
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
