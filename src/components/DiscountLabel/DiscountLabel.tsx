import { useEffect, useRef } from "react";

import * as S from "./DiscountLabel.style";

interface InformationBarProps {
  title?: string;
  description?: string;
}

export const InformationBar = ({ description, title }: InformationBarProps) => {
  const informationBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //maybe in future use context to get the information bar height
    const measureInformationBoxHeight = () => {
      const informationBar = informationBarRef.current;
      const height = informationBar ? informationBar.clientHeight : 0;
      // Set the CSS variable
      document.documentElement.style.setProperty(
        "--information-bar-height",
        `${height}px`
      );
    };

    measureInformationBoxHeight();

    window.addEventListener("resize", measureInformationBoxHeight);

    return () => {
      window.removeEventListener("resize", measureInformationBoxHeight);
    };
  }, []);

  return (
    <S.InformationBar ref={informationBarRef} className="information-bar">
      <S.BiggerText>{title}</S.BiggerText>
      <S.SmallerText>{description}</S.SmallerText>
    </S.InformationBar>
  );
};
