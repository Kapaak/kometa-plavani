//librarires
import styled from "styled-components";

//styles
import { Flex as SFlex, SectionElement } from "@/styles";
import { dimensions } from "@/utils";

export const LocationSection = styled(SectionElement)``;

export const Flex = styled(SFlex)`
  gap: 4rem;

  @media (${dimensions.notebook}) {
    flex-direction: row;
    gap: 10rem;
  }
`;
