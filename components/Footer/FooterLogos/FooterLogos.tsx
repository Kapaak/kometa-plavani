import Image from "next/image";
//svgs
import LuzankyLogo from "@/public/icons/luzanky.svg";
import KometaLogo from "@/public/icons/kometa.svg";
//styles
import { Flex } from "@/styles";

const FooterLogos = () => {
  return (
    <Flex justify="space-between" direction="row">
      <Image src={LuzankyLogo} />
      <Image src={KometaLogo} />
    </Flex>
  );
};

export default FooterLogos;
