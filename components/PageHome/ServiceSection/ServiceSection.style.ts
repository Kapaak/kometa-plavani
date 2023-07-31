//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, SectionElement } from "@/styles";
import { dimensions } from "@/utils";

export const Flex = styled(SFlex)`
  @media (${dimensions.tabletX}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ServiceSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;
