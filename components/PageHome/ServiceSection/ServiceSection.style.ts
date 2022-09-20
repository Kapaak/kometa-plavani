//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const Flex = styled(SFlex)`
  @media (${dimensions.notebook}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ServiceSection = styled.section`
  padding: 1.5rem 0;
`;
