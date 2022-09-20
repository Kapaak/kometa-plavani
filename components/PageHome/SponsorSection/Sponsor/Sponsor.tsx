//libraries
import Image, { StaticImageData } from "next/image";
//styles
import * as S from "./Sponsor.style";

interface Props {
  href: string;
  image: StaticImageData;
}

const Sponsor = ({ href, image }: Props) => {
  return (
    <S.Sponsor href={href}>
      <Image src={image} alt="" />
    </S.Sponsor>
  );
};

export default Sponsor;
