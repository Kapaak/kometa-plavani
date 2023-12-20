//components
import { Flex, Headline } from "~/styles";

import LocationSectionItem, {
  LocationSection,
} from "./LocationSectionItem/LocationSectionItem";

//styles
import * as S from "./LocationSectionItems.style";

const LocationSectionItems = () => {
  return (
    <Flex gap="2rem">
      <Headline>Adresa</Headline>
      <S.Text variant="dark" bold style={{ textTransform: "uppercase" }}>
        Sportovní 486/4, Brno 602 00
      </S.Text>

      <S.Text variant="dark"></S.Text>
      <S.Container></S.Container>
    </Flex>
  );
};

export default LocationSectionItems;
