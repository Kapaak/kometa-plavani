//libraries
import Image from "next/image";

import styled from "styled-components";

//styles
import { Button } from "~/components/Shared";
import { A as SA, Flex as SFlex } from "~/styles";
import { dimensions } from "~/utils";

export const Service = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 30%;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
  font-family: var(--font1);
`;

export const Flex = styled(SFlex)`
  padding: 3rem;
  flex: 1;

  @media (${dimensions.tablet}) {
    padding: 3rem 4rem;
  }

  @media (${dimensions.notebook}) {
    padding: 3rem;
  }
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

export const Btn = styled(Button)`
  align-self: end;
`;
