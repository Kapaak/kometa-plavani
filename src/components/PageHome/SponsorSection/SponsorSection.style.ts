import styled from "styled-components";

import { Flex as SFlex, SectionElement } from "~/styles";
import { dimensions } from "~/utils";

export const Flex = styled(SFlex)`
  overflow-y: auto;
`;

export const SponsorSection = styled(SectionElement)`
  padding: 4rem;

  @media (${dimensions.notebook}) {
    height: 25rem;
  }
`;
