//librarires
import styled from "styled-components";
//styles
import { SectionElement, Flex as SFlex } from "@/styles";
import { dimensions } from "@/utils";

export const ContactSection = styled(SectionElement)``;

export const Flex = styled(SFlex)`
  gap: 4rem;
  @media (${dimensions.notebook}) {
    flex-direction: row-reverse;
    gap: 10rem;
  }
`;
