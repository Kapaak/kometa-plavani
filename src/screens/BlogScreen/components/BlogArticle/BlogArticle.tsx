import ServiceSchool from "~/public/images/service-school.jpg";

import NextImage from "next/image";
import NextLink from "next/link";

import { CalendarBlank, Timer, User } from "@phosphor-icons/react";

import { categoryTranslation } from "~/domains";
import { Chip, IconText } from "~/styles";
import { convertDateToString } from "~/utils";

import * as S from "./BlogArticle.style";

interface BlogArticleProps {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  readTime?: number;
  image?: string;
  imageAlt?: string;
  href?: string;
  categories?: number[];
}

export function BlogArticle({
  author,
  categories,
  date,
  description,
  image,
  imageAlt,
  readTime,
  href,
  title,
}: BlogArticleProps) {
  return (
    <S.BlogArticle>
      <S.ImageContainer>
        <S.CategoryContainer>
          {categories?.map((category) => {
            return <Chip key={category}>{categoryTranslation(category)}</Chip>;
          })}
        </S.CategoryContainer>
        <NextImage src={ServiceSchool} alt={imageAlt} fill />
        {/* <NextImage src={image} fill /> */}
      </S.ImageContainer>
      <S.Container>
        <S.TextContainer>
          <S.BlogArticleHeadline>{title}</S.BlogArticleHeadline>
          <S.BlogArticleDescription>{description}</S.BlogArticleDescription>
        </S.TextContainer>
        <S.InfoContainer>
          <div>
            <IconText icon={User} text={author} />
            <IconText
              icon={CalendarBlank}
              text={convertDateToString(new Date(date ?? ""))}
            />
            <IconText icon={Timer} text={`${readTime} min`} />
          </div>
          <NextLink href={href ?? "#"} passHref>
            <S.BlogArticleButton>Číst článek</S.BlogArticleButton>
          </NextLink>
        </S.InfoContainer>
      </S.Container>
    </S.BlogArticle>
  );
}
