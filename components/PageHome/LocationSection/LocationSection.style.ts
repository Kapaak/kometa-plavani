//librarires
import styled from "styled-components";

//styles
import { Flex as SFlex, SectionElement } from "@/styles";
import { dimensions } from "@/utils";

export const LocationSection = styled(SectionElement)`
  background-color: rgba(220, 233, 250, 0.25);
  padding-block: 8rem;
`;

export const Flex = styled(SFlex)`
  gap: 4rem;

  @media (${dimensions.notebook}) {
    flex-direction: row;
    gap: 10rem;
  }
`;
