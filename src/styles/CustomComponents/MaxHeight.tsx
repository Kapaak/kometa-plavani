import { dimensions } from "~/utils";
import { useEffect, useState } from "react";
import { use100vh, measureHeight } from "react-div-100vh";
import styled, { css } from "styled-components";

interface Props {
  children: React.ReactNode;
  $gradient?: boolean;
}
//todo -> make it styleable like SectionElement using className, so that donthav eto pass the gradient prop and can style it anywhere
export const MaxHeight = ({ children, $gradient = false }: Props) => {
  const [fixedHeight, setFixedHeight] = useState(0);

  useEffect(() => {
    //@ts-ignore
    measureHeight() && setFixedHeight(measureHeight);
  }, [measureHeight]);

  //co pridat useHeight() a tim vyresit to initial a ulozit to do promenne
  //ale useEffect by pres jinou promennout nastavil maxHeight ... tim by se pak mozna vynulovalo skakani
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
  transition: all 0.2s linear;
  max-height: 80rem;
  background: ${({ $gradient }) =>
    $gradient
      ? `linear-gradient(
      109.69deg,
      #2172dd -4.31%,
      rgba(33, 114, 221, 0.6) 62.89%,
      rgba(33, 114, 221, 0) 105.03%
      )`
      : "unset"};

  ${({ $gradient }) =>
    $gradient &&
    css`
      @media (${dimensions.notebook}) {
        transition: none;
        border-radius: 2rem;
        min-height: 40rem;
        height: calc(100vh - var(--header-height) - 12rem);
        background: linear-gradient(
          47.76deg,
          rgba(33, 114, 221, 0.68) 29.07%,
          rgba(33, 114, 221, 0) 56.67%
        );
      }
    `}
`;
