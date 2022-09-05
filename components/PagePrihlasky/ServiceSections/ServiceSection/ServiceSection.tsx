import Image, { StaticImageData } from "next/image";

interface Props {
  headline: string;
  fullText: string;
  image: StaticImageData;
}

const ServiceSection = ({ headline, fullText, image }: Props) => {
  return (
    <div>
      <h1>{headline}</h1>
      <p>{fullText}</p>
      <Image width={130} height={50} src={image} />
    </div>
  );
};

export default ServiceSection;
