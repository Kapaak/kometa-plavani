//libraries
import Image from "next/image";
//styles
import * as S from "./Services.style";
import { Flex, Text } from "@/styles";

interface Props {
	headline: string;
	smallText: string;
	fullText: string;
	image: any;
}

const Service = ({ fullText, headline, smallText, image }: Props) => {
	return (
		<S.Service>
			<Flex justify="flex-end">
				<h3>{headline}</h3>
				<Text light>{smallText}</Text>
				<S.ImageContainer>
					<Image src={image} layout="fill" objectFit="cover" />
				</S.ImageContainer>
			</Flex>
		</S.Service>
	);
};

export default Service;
