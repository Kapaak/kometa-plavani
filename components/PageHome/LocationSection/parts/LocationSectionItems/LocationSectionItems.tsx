//components
import { Flex, Headline } from "@/styles";
import { locationInformation } from "../../constants";
import { LocationSectionItem } from "../LocationSectionItem";

//styles
import * as S from "./LocationSectionItems.style";

export const LocationSectionItems = () => {
  return (
    <Flex gap="2rem">
      <Headline>Adresa</Headline>
      <S.Text variant="dark" bold style={{ textTransform: "uppercase" }}>
        Sportovní 486/4, Brno 602 00
      </S.Text>

      <S.Text variant="dark">
        Areál poskytuje skvělé podmínky pro milovníky plavání. Nachází se zde 25
        metrový bazén a také revitalizovaný 50 metrový bazén.
      </S.Text>
      <S.Container>
        {locationInformation?.map((locationInfo) => (
          <LocationSectionItem
            key={locationInfo.title}
            title={locationInfo.title}
            icon={locationInfo.icon}
            description={locationInfo.description}
          />
        ))}
      </S.Container>
    </Flex>
  );
};
