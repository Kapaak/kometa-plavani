//libraries
import styled from "styled-components";
//styles
import { Text as SText } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const Text = styled(SText)`
  display: none;
  @media (${dimensions.desktop}) {
    display: block;
  }
`;
