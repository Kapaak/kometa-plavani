import { SectionElement } from "@/styles";
import styled from "styled-components";
import { Flex as SFlex } from "@/styles";
import { dimensions } from "@/components/utils/breakpoints";

export const ContactSection = styled(SectionElement)``;

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    flex-direction: row-reverse;
  }
`;
