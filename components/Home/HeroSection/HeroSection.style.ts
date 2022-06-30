import { MaxHeight } from "@/styles";
import Div100vh from "react-div-100vh";
import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(
    109.69deg,
    #2172dd -4.31%,
    rgba(33, 114, 221, 0.6) 62.89%,
    rgba(33, 114, 221, 0) 105.03%
  );
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: -1;
`;

export const Gradient = styled.div`
  position: absolute;
  background-color: var(--col2);
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
`;

export const ImageButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const MaxHeightWithBG = styled(Div100vh)`
  background-image: url(./images/hero-img.JPG);
  background-position: 50% 50%;
  background-size: cover;
`;
