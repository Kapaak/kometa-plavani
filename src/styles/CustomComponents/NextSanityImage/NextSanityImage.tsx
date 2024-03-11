import { SanityImage } from "~/domains";
import { urlForImage } from "~/utils/sanity";

import * as S from "./NextSanityImage.style";

interface NextSanityImageProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"
  > {
  image: SanityImage;
  className?: string;
  alt: string;
  sizes?: string;
  fill?: boolean;
  height?: number;
  width?: number;
  loading?: "eager" | "lazy";
  objectFit?: string;
  placeholder?: "blur" | "empty";
}

export function NextSanityImage({
  className,
  image,
  sizes,
  objectFit = "contain",
  ...props
}: NextSanityImageProps) {
  return (
    <S.NextSanityImage
      {...props}
      src={urlForImage(image).url()}
      objectFit={objectFit}
      //className is here so we can style the image via styled-components
      className={className}
      //sizes = (max-width: breakpoint when we want to apply some style) + the size of the image on that breakpoint
      sizes={sizes}
      draggable={false}
      blurDataURL={image.asset.metadata.lqip}
    />
  );
}
