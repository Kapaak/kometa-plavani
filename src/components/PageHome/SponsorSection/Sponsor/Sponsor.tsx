import { Sponsor } from "~/domains";

import * as S from "./Sponsor.style";

const Sponsor = ({ href, image, name }: Sponsor) => {
  return (
    <S.Sponsor href={href}>
      <S.Img src={image} alt={name} height={80} width={100} priority />
    </S.Sponsor>
  );
};

export default Sponsor;
