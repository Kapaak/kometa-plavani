import { NextPage } from "next";
import { PrihlaskyScreen } from "@/screens";
import { LecturesContextProvider } from "@/contexts";

const PrihlaskyPage: NextPage = () => {
  return (
    <LecturesContextProvider>
      <main>
        <PrihlaskyScreen />
      </main>
    </LecturesContextProvider>
  );
};

export default PrihlaskyPage;
