//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, SectionElement } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const Flex = styled(SFlex)`
  overflow-y: auto;
`;

export const SponsorSection = styled(SectionElement)`
  padding: 4rem;
  background-color: #dce9fa;

  @media (${dimensions.notebook}) {
    height: 25rem;
  }
`;
