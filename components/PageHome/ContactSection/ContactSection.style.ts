//librarires
import styled from "styled-components";
//styles
import { SectionElement, Flex as SFlex } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const ContactSection = styled(SectionElement)``;

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    flex-direction: row-reverse;
  }
`;
