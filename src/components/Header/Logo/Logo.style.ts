import Image from "next/image";

import styled from "styled-components";

import { dimensions } from "~/utils";

export const Img = styled(Image)`
  position: relative;
  display: inline-block;
  z-index: 10;
  padding: 1rem 1.6rem;
  cursor: pointer;
  width: 11rem;
  height: 100%;
  z-index: 2;
  vertical-align: middle;

  @media (${dimensions.notebook}) {
    width: 10rem;
    padding: 0;
    margin: 0;
  }

  @media (${dimensions.desktop}) {
    width: 11rem;
    padding: 0;
    margin: 0;
  }
`;
