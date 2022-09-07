import { dimensions} from "@/components/utils/breakpoints";
import { useEffect, useState } from "react";
import { use100vh ,measureHeight} from "react-div-100vh";
import styled, { css } from "styled-components";

interface Props {
  children: React.ReactNode;
  $gradient?: boolean;
}

export const MaxHeight = ({ children, $gradient = false }: Props) => {
  const [fixedHeight,setFixedHeight] = useState(0)

  useEffect(()=>{
    //@ts-ignore
    measureHeight() && setFixedHeight(measureHeight)
  },[measureHeight])

  // const height = use100vh()!;
  return (
    <SMaxHeight $gradient={$gradient} height={fixedHeight}>
      {children}
    </SMaxHeight>
  );
};

const SMaxHeight = styled.div<{ $gradient: boolean; height: number }>`
  position: relative;
  height: ${({ height }) =>
    height ? `calc(${height}px - var(--header-height))` : "100vh"};
  max-height: calc(100vh - var(--header-height));
  transition: all 0.3s ease-in;

  background: ${({ $gradient }) =>
    $gradient
      ? `linear-gradient(
      109.69deg,
      #2172dd -4.31%,
      rgba(33, 114, 221, 0.6) 62.89%,
      rgba(33, 114, 221, 0) 105.03%
      )`
      : "unset"};

  ${({ $gradient, height }) =>
    $gradient &&
    css`
      @media (${dimensions.desktop}) {
        transition: none;
        border-radius: 2rem;
        overflow: hidden;
        height: ${height
          ? `calc(${height}px - var(--header-height) - 6rem)`
          : "100vh"};
      }
    `}
`;
