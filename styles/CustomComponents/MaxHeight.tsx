import { useEffect, useState } from "react";
import Div100vh, { use100vh, measureHeight } from "react-div-100vh";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  $gradient?: boolean;
}

export const MaxHeight = ({ children, $gradient = false }: Props) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(measureHeight()!);
    console.log(height, "hei");
  }, []);

  // const height = measureHeight()!;

  return (
    <SMaxHeight $gradient={$gradient} height={height}>
      {children}
    </SMaxHeight>
  );
};

const SMaxHeight = styled.div<{ $gradient: boolean; height: number }>`
  position: relative;
  height: ${({ height }) =>
    height ? `calc(${height}px - var(--header-height))` : "100vh"};
  /* max-height: calc(100vh - 10.7rem); */ // - velikost headeru // mozna se to da vyresit v tom 100DIVu odpoctem od velikosti headeru
  max-height: 100vh;
  transition: all 0.5s ease-in;

  background: ${({ $gradient }) =>
    $gradient
      ? `linear-gradient(
    109.69deg,
    #2172dd -4.31%,
    rgba(33, 114, 221, 0.6) 62.89%,
    rgba(33, 114, 221, 0) 105.03%
  )`
      : "unset"};
`;
