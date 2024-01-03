import styled from "styled-components";

import { Flex } from "~/styles";
import { dimensions } from "~/utils";

export const CookieSettingsActions = styled(Flex)`
  gap: 1rem;
  margin-top: 3.4rem;

  @media (${dimensions.tabletX}) {
    flex-direction: row;
    justify-content: end;
  }

  @media (${dimensions.notebook}) {
    margin-top: 0;
  }
`;
