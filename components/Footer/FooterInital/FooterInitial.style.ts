import styled from "styled-components";
import { Text as SText, Flex as SFlex } from "@/styles";
import { dimensions } from "@/components/utils/breakpoints";

export const Text = styled(SText)`
  flex: 100%;
`;

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    flex: 30%;
    max-width: 40rem;
  }
`;
