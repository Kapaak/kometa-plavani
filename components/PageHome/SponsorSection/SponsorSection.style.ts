//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, SectionElement } from "@/styles";
//data
import { data } from "./SponsorSection.data";

export const Flex = styled(SFlex)`
  overflow-y: scroll;

  /* a {
    //tohle presun do sponzora a 14 tam vloz jako length
    min-width: calc(100% / ${data.length});
  } */
`;

export const SponsorSection = styled(SectionElement)`
  padding: 4rem;
  background-color: #dce9fa;
`;
