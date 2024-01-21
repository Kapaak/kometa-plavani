import NextLink from "next/link";

import { CalendarBlank, Timer, User } from "@phosphor-icons/react";

import { Category, SanityImage, categoryTranslation } from "~/domains";
import { IconText, NextSanityImage } from "~/styles";
import { convertDateToString } from "~/utils";

import * as S from "./BlogArticle.style";

interface BlogArticleProps {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  readTime?: number;
  image: SanityImage;
  imageAlt: string;
  href?: string;
  categories?: Category[];
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
            return (
              <S.BlogChip key={category}>
                {categoryTranslation(category)}
              </S.BlogChip>
            );
          })}
        </S.CategoryContainer>
        <NextSanityImage
          image={image ?? ""}
          alt={imageAlt}
          placeholder="blur"
          loading="eager"
          draggable={false}
          sizes="(max-width: 768px) 25vw, 20vw"
          fill
          objectFit="contain"
        />
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
