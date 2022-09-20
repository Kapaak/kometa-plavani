import { dimensions } from "@/utils/breakpoints";
import styled from "styled-components";

export const Sponsor = styled.a`
  flex: 1;
  min-width: 8rem;
  filter: grayscale(50);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0);
    transition: all 0.3s ease;
  }

  ${dimensions.desktop} {
    min-width: 0;
  }
`;
