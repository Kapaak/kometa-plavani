import styled from "styled-components";
import { SectionElement } from "@/styles";
import Marquee from "react-fast-marquee";
import { data } from "./PageHome/SponsorSection/SponsorSection.data";
import Sponsor from "./PageHome/SponsorSection/Sponsor/Sponsor";

const Testovani = () => {
  return (
    <div>
      <Marquee pauseOnHover>
        <div style={{ display: "flex", gap: "12rem" }}>
          {data.map((d, i) => (
            <Sponsor image={d.image} href={d.href} key={i} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

const SSectionElement = styled(SectionElement)`
  border: 1px solid red;
  height: 20vh;
`;

const Box = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
`;

export default Testovani;
