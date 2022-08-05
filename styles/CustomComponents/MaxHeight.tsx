import React, { ReactNode } from "react";
import Div100vh from "react-div-100vh";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export const MaxHeight = ({ children }: Props) => {
  return <SMaxHeight>{children}</SMaxHeight>;
};

const SMaxHeight = styled(Div100vh)`
  max-height: 100vh;
  transition: all 0.5s ease-in-out;
`;
