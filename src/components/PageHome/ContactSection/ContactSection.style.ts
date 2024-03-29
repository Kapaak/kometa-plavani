import NextImage from "next/image";

import styled from "styled-components";

import { Flex, SectionElement } from "~/styles";
import { dimensions } from "~/utils";

export const ContactSection = styled(SectionElement)`
  padding: 8rem 0;
`;

export const ContactSectionWrapper = styled(Flex)`
  padding-top: 2rem;
  @media (${dimensions.notebook}) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const Image = styled(NextImage)`
  width: 100%;
  height: 30rem;
  border-radius: var(--small-border-rad);
  object-fit: cover;
  flex: 1;

  @media (${dimensions.notebook}) {
    flex-direction: row;
    height: 40rem;
  }
`;
