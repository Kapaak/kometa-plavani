import styled from "styled-components";
import { Text as SText } from "@/styles";
import { dimensions } from "@/components/utils/breakpoints";

export const Text = styled(SText)`
  display: none;
  @media (${dimensions.desktop}) {
    display: block;
  }
`;
