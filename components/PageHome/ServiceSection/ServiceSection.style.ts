import styled from "styled-components";
import { dimensions } from "@/components/utils/breakpoints";

import { Flex as SFlex } from "@/styles";

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ServiceSection = styled.section`
  padding: 1.5rem 0;
`;
