//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const Flex = styled(SFlex)`
  padding: 4rem 0;
  @media (${dimensions.desktop}) {
    gap: 14rem;
    padding: 8rem 0;
  }
`;
