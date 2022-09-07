import { PropsWithChildren } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

interface Props {
  className?: string;
  name:string;
}
//element, that can be styled via styled-components -> thanks to passing className
export const SectionElement = ({ children,...rest }: PropsWithChildren<Props>) => {
    //@ts-ignore
  return <Section {...rest}>{children}</Section>;
};

const Section = styled(Element).attrs({ as: "section" })`

`;
