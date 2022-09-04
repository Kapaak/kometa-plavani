import { dimensions } from "@/components/utils/breakpoints";
import { Flex } from "@/styles";
import styled from "styled-components";

export const Creator = styled.p`
  color: var(--colw);
  @media (${dimensions.desktop}) {
    text-align: right;
  }
`;

export const ImageFlexContainer = styled(Flex)`
  @media (${dimensions.desktop}) {
    justify-content: flex-end;
  }
`;
