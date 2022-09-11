//libraries
import styled from "styled-components";
import Image from "next/image";
//icons
import WaveYellow from "@/public/icons/wave-yellow.svg";
//interfaces
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Headline = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <div>
      <SHeadline {...rest}>{children}</SHeadline>
      <Image src={WaveYellow} />
    </div>
  );
};

const SHeadline = styled.h2`
  color: var(--col2);
  font-family: var(--font1);
  font-size: var(--fheadline);
  letter-spacing: 0.2rem;
`;
