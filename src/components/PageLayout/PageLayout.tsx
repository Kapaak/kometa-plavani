import { PropsWithChildren } from "react";

import { SanityInfoBar } from "~/domains";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
