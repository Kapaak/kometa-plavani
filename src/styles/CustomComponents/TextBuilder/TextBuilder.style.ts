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
