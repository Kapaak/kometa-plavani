import { dimensions } from "@/utils";
import styled from "styled-components";

export const Sponsor = styled.a`
  flex: 1;
  min-width: 10rem;
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
