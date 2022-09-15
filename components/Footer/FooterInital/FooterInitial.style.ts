//libraries
import styled from "styled-components";
//styles
import { Text as SText, Flex as SFlex } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const Text = styled(SText)`
  flex: 100%;
`;

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    flex: 20%;
    max-width: 40rem;
    & > span {
      flex: 1 1 30%;
    }
  }
`;
