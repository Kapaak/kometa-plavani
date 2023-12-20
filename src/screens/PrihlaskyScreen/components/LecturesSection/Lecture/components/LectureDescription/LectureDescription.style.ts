import { Flex } from "~/styles";
import styled from "styled-components";
import { dimensions } from "~/utils";
import Link from "next/link";

export const LectureSection = styled(Flex)`
  align-items: flex-start;
  flex: 1 1 50%;
  gap: 2rem;
`;

export const Container = styled.div`
  margin-top: auto;
`;

export const Headline = styled.h2`
  font-size: 3rem;
  font-family: var(--font1);
  font-weight: 500;
  letter-spacing: 0.08rem;
  color: var(--col2);

  @media (${dimensions.notebook}) {
    font-size: 4rem;
  }
`;

export const DocumentLink = styled(Link)`
  text-decoration: underline;
`;

export const LectureDescriptionItem = styled(Flex)`
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  height: initial;
`;
