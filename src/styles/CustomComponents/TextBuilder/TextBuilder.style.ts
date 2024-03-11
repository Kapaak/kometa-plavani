import NextImage from "next/image";

import styled from "styled-components";

export const ListItem = styled.li`
  margin-left: 2rem;
`;

export const ImageContainer = styled.div<{ aspectRatio: string }>`
  position: relative;
  width: 100%;
  max-height: 45rem;
  aspect-ratio: ${(props) => props.aspectRatio};
`;

export const TextBuilderImage = styled(NextImage)`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

export const H2 = styled.h2<{ center?: boolean }>`
  font-size: 3.2rem;
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: var(--color-primary);
`;

export const H3 = styled.h3<{ center?: boolean }>`
  font-size: 2.2rem;
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: var(--color-primary);
`;
