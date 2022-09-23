//libraries
import Image, { StaticImageData } from "next/image";
//styles
import * as S from "./Sponsor.style";

interface Props {
  href: string;
  image: StaticImageData;
  alt: string;
}

const Sponsor = ({ href, image, alt }: Props) => {
  return (
    <S.Sponsor href={href}>
      <Image
        src={image}
        alt={`${alt} logo`}
        objectFit="contain"
        height={100}
        width={120}
        priority
      />
    </S.Sponsor>
  );
};

export default Sponsor;
