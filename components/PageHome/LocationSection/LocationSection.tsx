//components
import { MaxWidth } from "@/styles";

import ContactMap from "./ContactMap/ContactMap";
import * as S from "./LocationSection.style";
import ContactItems from "./LocationSectionItems/LocationSectionItems";

export const LocationSection = () => {
  return (
    <S.LocationSection name="location">
      <MaxWidth>
        <S.Flex>
          <ContactItems />
          <ContactMap />
        </S.Flex>
      </MaxWidth>
    </S.LocationSection>
  );
};
