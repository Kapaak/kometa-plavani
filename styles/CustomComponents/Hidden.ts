import styled from "styled-components";
import { dimensions, maxDimensions } from "@/utils";

type HiddenProps = {
  down?: keyof typeof dimensions;
  up?: keyof typeof dimensions;
};

export const Hidden = styled.div<HiddenProps>`
  display: block;
  ${({ down }) => {
    switch (down) {
      case "tablet":
        return `@media (${dimensions.tablet}) { display: none; }`;
      case "tabletX":
        return `@media (${dimensions.tabletX}) { display: none; }`;
      case "notebook":
        return `@media (${dimensions.notebook}) { display: none; }`;
      case "desktop":
        return `@media (${dimensions.desktop}) { display: none; }`;
      case "desktopX":
        return `@media (${dimensions.desktopX}) { display: none; }`;
      default:
        return "";
    }
  }}

  ${({ up }) => {
    switch (up) {
      case "tablet":
        return `@media (${maxDimensions.tablet}) { display: none; }`;
      case "tabletX":
        return `@media (${maxDimensions.tabletX}) { display: none; }`;
      case "notebook":
        return `@media (${maxDimensions.notebook}) { display: none; }`;
      case "desktop":
        return `@media (${maxDimensions.desktop}) { display: none; }`;
      case "desktopX":
        return `@media (${maxDimensions.desktopX}) { display: none; }`;
      default:
        return "";
    }
  }}
`;