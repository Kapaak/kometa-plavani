import React from "react";
import Scroll,{ Link as ScrollLink, Element,scroller } from "react-scroll";
import styled from "styled-components";
import {SectionElement} from "@/styles";
import { useRouter } from "next/router";

const Testovani = () => {
  const scroll = Scroll.animateScroll
  const router = useRouter()
  const clickHandler = async() => {
    await router.push("/")
    scroller.scrollTo("about",{smooth:true})

  }

  return (
    <div>
      <h1>Testovani</h1>
      <ScrollLink smooth={true} to="about" onClick={clickHandler}>
        <div>scroll to pepega</div>
      </ScrollLink>
      {/*
      <ScrollLink smooth={true} to="ele">scroll to ele</ScrollLink>
      <FullPageDiv bg="red">
        <h2>I am not a pepega</h2>
      </FullPageDiv>
      <FullPageDiv id="pepega" bg="green">
        <h2>I am a pepega</h2>
      </FullPageDiv>
      <SectionEle name="ele">Whaat</SectionEle> */}
<SSectionElement name="ror">
    <h2>I am a goddamn sectioon</h2>
</SSectionElement>
    </div>
  );
};

const SSectionElement = styled(SectionElement)`
    border:1px solid red;
    height: 20vh;
`


const SectionEle = styled(Element).attrs({
    as:"section"
})`
border: 1px solid red;
height:20rem;
`

const FullPageDiv = styled.div<{ bg: string }>`
  height: 100vh;
  background-color: ${({ bg }) => bg && bg};
`;

export default Testovani;
