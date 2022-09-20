//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, MaxWidth as SMaxWidth } from "@/styles";
import { dimensions } from "../../utils/breakpoints";

export const Footer = styled.div`
  padding: 2rem 0;
  background-color: var(--col2);

  @media (${dimensions.desktop}) {
    background-color: unset;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  @media (${dimensions.desktop}) {
    background-color: var(--col2);
    border-radius: 2rem;
    padding: var(--side-padding) var(--side-padding) 2rem;
  }
`;

export const Flex = styled(SFlex)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (${dimensions.desktop}) {
    /* flex-direction: row;
    flex-wrap: wrap; */
    gap: 8rem;
  }
`;
