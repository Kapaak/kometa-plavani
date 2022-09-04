import { IData } from "../Footer.interface";
import FooterSection from "./FooterSection/FooterSection";

interface Props {
  data: IData[];
}

const FooterSections = ({ data }: Props) => {
  return (
    <>
      {data.map((d: IData, i) => {
        return (
          <FooterSection key={i} headline={d.headline} fragment={d.fragment} />
        );
      })}
    </>
  );
};

export default FooterSections;
