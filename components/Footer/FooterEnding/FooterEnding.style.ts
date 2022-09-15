//libraries
import styled from "styled-components";
//styles
import { Flex } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

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
