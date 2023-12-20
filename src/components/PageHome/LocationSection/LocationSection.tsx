import { MaxWidth } from "~/styles";

import { ContactMap, LocationSectionItems } from "./parts";

import * as S from "./LocationSection.style";

export const LocationSection = () => {
  return (
    <S.LocationSection name="location">
      <MaxWidth>
        <S.Flex>
          <LocationSectionItems />
          <ContactMap />
        </S.Flex>
      </MaxWidth>
    </S.LocationSection>
  );
};
