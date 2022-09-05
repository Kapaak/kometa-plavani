import { use100vh } from "react-div-100vh";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  $gradient?: boolean;
}

export const MaxHeight = ({ children, $gradient = false }: Props) => {
  const height = use100vh()!;
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
`;
