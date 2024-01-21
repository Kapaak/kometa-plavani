import { ArrowLeft, CalendarBlank, Timer, User } from "@phosphor-icons/react";

import { Button } from "~/components/Shared";
import { SanityBlog } from "~/domains";
import {
  Hidden,
  IconText,
  LabelDesc,
  MaxWidth,
  NextSanityImage,
  PageIconLink,
  TextBuilder,
} from "~/styles";
import { convertDateToString } from "~/utils";

import * as S from "./BlogItemScreen.style";

interface BlogItemScreenProps {
  blog: SanityBlog;
}

export function BlogItemScreen({ blog }: BlogItemScreenProps) {
  return (
    <section>
      <MaxWidth>
        <PageIconLink
          href="/blog"
          icon={<ArrowLeft size={18} weight="bold" />}
          label="Zpět na blog"
        />

        <MaxWidth maxWidth="80rem">
          <S.BlogItemContainer gap="2rem">
            <S.Title>{blog?.title}</S.Title>
            <Hidden up="tablet">
              <IconText icon={User} text={blog?.author} />
              <IconText icon={Timer} text={`${blog?.readTime} min`} />
              <IconText
                icon={CalendarBlank}
                text={convertDateToString(new Date(blog?.createdAt))}
              />
            </Hidden>
            <Hidden down="tablet">
              <LabelDesc label="Autor" desc={blog?.author} />
              <LabelDesc label="Doba čtení" desc={`${blog?.readTime} min`} />
              <LabelDesc
                label="Datum"
                desc={convertDateToString(new Date(blog?.createdAt)) ?? ""}
              />
            </Hidden>
            <S.BlogItemImageContainer>
              <NextSanityImage
                image={blog?.image}
                alt="Obrázek popisující článek"
                placeholder="blur"
                loading="eager"
                draggable={false}
                sizes="(max-width: 768px) 50vw, 80vw"
                fill
                objectFit="cover"
              />
            </S.BlogItemImageContainer>
            <TextBuilder
              value={blog?.description}
              options={{ paragraph: { color: "dark" } }}
            />
            <S.PreviousPageLink href="/blog">
              <Button>Vrátit na předchozí stránku</Button>
            </S.PreviousPageLink>
          </S.BlogItemContainer>
        </MaxWidth>
      </MaxWidth>
    </section>
  );
}
