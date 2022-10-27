//libraries
import Image from "next/image";
import { ISponsor } from "../SponsorSection.interface";
//styles
import * as S from "./Sponsor.style";

const Sponsor = ({ href, image, name }: ISponsor) => {
  return (
    <S.Sponsor href={href}>
      <Image
        src={image}
        alt={name}
        objectFit="contain"
        height={100}
        width={120}
        priority
      />
    </S.Sponsor>
  );
};

export default Sponsor;
