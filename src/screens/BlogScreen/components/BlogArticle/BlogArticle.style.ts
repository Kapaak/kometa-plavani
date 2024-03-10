import styled from "styled-components";

import { Button } from "~/components/Shared";
import { Chip, Text, VerticalStack } from "~/styles";
import { dimensions } from "~/utils";

export const BlogChip = styled(Chip)`
  background-color: var(--col3);
  color: var(--col2);
`;

export const BlogArticle = styled.article`
  display: grid;
  box-shadow: var(--shadow);
  border-radius: 1rem;
  overflow: hidden;

  @media (${dimensions.tabletX}) {
    gap: 5rem;
  }

  @media (${dimensions.desktop}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const BlogArticleHeadline = styled.h2`
  font-family: var(--font1);
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;

  @media (${dimensions.tabletX}) {
    font-size: 3rem;
  }
`;

export const BlogArticleButton = styled(Button)`
  color: var(--colb);
  border-color: var(--colb);
  font-weight: 300;
  margin-top: 2rem;

  &:hover {
    color: var(--colw);
    background-color: var(--colb);
  }
`;

export const BlogArticleDescription = styled(Text).attrs({
  variant: "dark",
})`
  display: none;

  @media (${dimensions.tabletX}) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (${dimensions.tabletX}) {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    padding: 3.3rem 5.1rem;
  }

  @media (${dimensions.desktop}) {
    padding: 3.3rem 0 3.3rem 5.1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  @media (${dimensions.tabletX}) {
    align-items: flex-end;
  }

  @media (${dimensions.desktop}) {
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  height: 17.4rem;

  img {
    object-fit: cover;
    object-position: top;
  }

  @media (${dimensions.tabletX}) {
    display: none;
  }

  @media (${dimensions.desktop}) {
    display: block;
    height: 100%;
    order: 3;
  }
`;

export const CategoryContainer = styled(VerticalStack)`
  position: absolute;
  align-items: flex-end;
  width: initial;
  top: 2rem;
  right: 2rem;
  gap: 1rem;
  z-index: 10;
`;
