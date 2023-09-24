import { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { SanityInfoBar } from "@/domains";

interface PageLayoutProps {
  infoBar?: SanityInfoBar;
}

export const PageLayout = ({
  infoBar,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <>
      <Header infoBar={infoBar} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
