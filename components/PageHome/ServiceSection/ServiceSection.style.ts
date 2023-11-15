//libraries
import styled from "styled-components";
//styles
import { Flex, SectionElement } from "@/styles";

export const Services = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
  gap: 4rem;
`;

export const ServiceSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;
