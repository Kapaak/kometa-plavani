//libraries
import Image from "next/image";
//styles
import * as S from "./Navigation.style";
import LogoWhite from "@/public/icons/logo-white.svg";
import { Flex } from "@/styles";
//components
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

const Navigation = () => {
	return (
		<S.Navigation>
			<Flex direction="row" justify="space-between" align="center">
				<Image src={LogoWhite} height={75} width={75} />
				<NavLinks />
				<Hamburger />
			</Flex>
		</S.Navigation>
	);
};

export default Navigation;
