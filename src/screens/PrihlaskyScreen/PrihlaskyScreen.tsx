import { ArrowLeft } from "@phosphor-icons/react";

import {
  Headline,
  MaxWidth,
  PageIconLink,
  SectionElement,
  VerticalStack,
} from "~/styles";

import { LecturesSection } from "./components";

export const PrihlaskyScreen = () => {
  return (
    <MaxWidth>
      <SectionElement name="application">
        <VerticalStack gap="2rem">
          <PageIconLink
            href="/"
            icon={<ArrowLeft size={18} weight="bold" />}
            label="Zpět na hlavní stránku"
          />
          <Headline headlineType="h1">Dostupné lekce</Headline>
          <LecturesSection />
        </VerticalStack>
      </SectionElement>
    </MaxWidth>
  );
};
