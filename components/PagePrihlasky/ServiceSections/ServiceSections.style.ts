import styled from "styled-components";
import { Flex as SFlex } from "@/styles";
import { dimensions } from "@/components/utils/breakpoints";

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    gap: 14rem;
    padding: 8rem 0;
  }
`;
