import Div100vh from "react-div-100vh";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  $gradient?: boolean;
}

export const MaxHeight = ({ children, $gradient = false }: Props) => {
  return <SMaxHeight $gradient={$gradient}>{children}</SMaxHeight>;
};

const SMaxHeight = styled(Div100vh)<{ $gradient: boolean }>`
  position: relative;
  /* max-height: calc(100vh - 10.7rem); */ // - velikost headeru // mozna se to da vyresit v tom 100DIVu odpoctem od velikosti headeru
  max-height: 100vh;
  transition: all 0.5s ease-in-out;

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
