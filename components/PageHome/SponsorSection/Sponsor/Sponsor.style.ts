import { dimensions } from "@/utils";
import Image from "next/image";
import styled from "styled-components";

export const Sponsor = styled.a`
  flex: 1;
  display: flex;
  min-width: 10rem;
  height: 11rem;
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

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
