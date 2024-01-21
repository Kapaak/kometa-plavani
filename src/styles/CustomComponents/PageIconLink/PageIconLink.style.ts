import NextLink from "next/link";

import styled from "styled-components";

import { dimensions } from "~/utils";

import { Text } from "../Text";

export const PageIconLink = styled(NextLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled(Text)`
  font-size: 1.4rem;

  @media (${dimensions.notebook}) {
    font-size: 1.6rem;
  }
`;
