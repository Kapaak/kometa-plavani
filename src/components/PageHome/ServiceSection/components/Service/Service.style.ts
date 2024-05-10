import Image from "next/image";

import styled from "styled-components";

import { Flex as SFlex, Text } from "~/styles";
import { dimensions } from "~/utils";

export const Service = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 30%;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
`;

export const Flex = styled(SFlex)`
  padding: 1.4rem 2.4rem 2.4rem;
  flex: 1;
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 3rem;
  background-color: var(--col3);
  color: var(--col2);
  padding: 0.8rem 2rem;
  min-width: 10.6rem;
  border-radius: 0px 3.5rem 3.5rem 0px;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
`;

export const Label = styled(Text).attrs({ as: "h3" })`
  font-family: var(--font1);
  font-size: 3rem;
  line-height: 1.4;
`;

export const Description = styled(Text)`
  line-height: 2.4rem;
  margin-bottom: auto;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: var(--small-border-rad);
  overflow: hidden;
  flex: 1;
`;

export const Img = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 18rem;

  @media (${dimensions.notebook}) {
    height: 26rem;
  }
`;
