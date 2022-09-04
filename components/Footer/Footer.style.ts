import styled from "styled-components";
import { Flex as SFlex, MaxWidth as SMaxWidth } from "@/styles";
import { dimensions } from "../utils/breakpoints";

export const Footer = styled.div`
  padding: 2rem 0;
`;

export const MaxWidth = styled(SMaxWidth)`
  background-color: var(--col2);
  border-radius: 2rem;
  padding: 6rem;
`;

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8rem;
  }
`;
