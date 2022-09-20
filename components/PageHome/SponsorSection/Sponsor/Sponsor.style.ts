import { dimensions } from "@/utils/breakpoints";
import styled from "styled-components";

export const Sponsor = styled.a`
  flex: 1;
  min-width: 8rem;

  ${dimensions.desktop} {
    min-width: 0;
  }
`;
