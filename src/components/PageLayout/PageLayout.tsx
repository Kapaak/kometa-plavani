import { PropsWithChildren } from "react";

import { SanityInfoBar } from "~/domains";
import { UpperLevel } from "~/styles";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type UpperLevel = {
  href: string;
  label: string;
};
interface PageLayoutProps {
  infoBar?: SanityInfoBar;
  upperLevel?: UpperLevel;
}

export const PageLayout = ({
  infoBar,
  upperLevel,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <>
      <Header infoBar={infoBar} />
      <main>
        {upperLevel && (
          <UpperLevel href={upperLevel.href} label={upperLevel.label} />
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};
