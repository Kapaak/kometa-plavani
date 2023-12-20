import { HeadlineFragment } from "~/domains";
import FooterSection from "./FooterSection/FooterSection";

interface FooterSectionsProps {
  data: HeadlineFragment[];
}

const FooterSections = ({ data }: FooterSectionsProps) => {
  return (
    <>
      {data.map((d: HeadlineFragment, i) => {
        return (
          <FooterSection key={i} headline={d.headline} fragment={d.fragment} />
        );
      })}
    </>
  );
};

export default FooterSections;
