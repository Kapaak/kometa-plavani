import { RootState } from "@redux/store";
import { useEffect, useState } from "react";
import Div100vh, { use100vh, measureHeight } from "react-div-100vh";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  $gradient?: boolean;
}

export const MaxHeight = ({ children, $gradient = false }: Props) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const navbarHeight = useSelector(
    (state: RootState) => state.navigation.navbarHeight
  );

  const calcHeaderHeight = () => {
    //@ts-ignore
    const heightMinusHeader = measureHeight() - navbarHeight;
    setHeaderHeight(heightMinusHeader);
  };

  useEffect(() => {
    calcHeaderHeight();
  }, [navbarHeight]);

  return (
    <SMaxHeight $gradient={$gradient} height={headerHeight}>
      {children}
    </SMaxHeight>
  );
};

const SMaxHeight = styled.div<{ $gradient: boolean; height: number }>`
  position: relative;
  height: ${({ height }) => (height ? height + "px" : "90vh")};
  /* max-height: calc(100vh - 10.7rem); */ // - velikost headeru // mozna se to da vyresit v tom 100DIVu odpoctem od velikosti headeru
  max-height: 100vh;
  /* transition: all 0.5s ease-in-out; */

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
