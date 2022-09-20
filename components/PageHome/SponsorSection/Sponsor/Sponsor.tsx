//libraries
import Image, { StaticImageData } from "next/image";
//styles
import * as S from "./Sponsor.style";

interface Props {
  href: string;
  image: StaticImageData;
}

const Sponsor = ({ href, image }: Props) => {
  const sponsorName = href.split("/").at(-1)?.split(".")[1];

  return (
    <S.Sponsor href={href}>
      <Image
        src={image}
        alt={sponsorName}
        objectFit="contain"
        height={140}
        width={140}
      />
    </S.Sponsor>
  );
};

export default Sponsor;
