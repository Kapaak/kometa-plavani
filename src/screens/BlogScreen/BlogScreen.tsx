import { useMemo, useState } from "react";

import { ArrowLeft } from "@phosphor-icons/react";

import { BLOG_CATEGORIES } from "~/constants/category";
import { useSanityBlogContext } from "~/contexts";
import { Category, SanityBlog } from "~/domains";
import {
  Headline,
  MaxWidth,
  PageIconLink,
  Scrollable,
  Text,
  VerticalStack,
} from "~/styles";

import { BlogArticle, BlogFilter } from "./components";

import * as S from "./BlogScreen.style";

interface BlogScreenProps {}

export function BlogScreen({}: BlogScreenProps) {
  const [selectedFilter, setSelectedFilter] =
    useState<Category[]>(BLOG_CATEGORIES);

  const { blogs } = useSanityBlogContext();

  const handleChange = (filterValue: Category) => {
    if (selectedFilter.includes(filterValue)) {
      return setSelectedFilter((prev) =>
        prev.filter((item) => item !== filterValue)
      );
    }

    setSelectedFilter((prev) => [...prev, filterValue]);
  };

  const getFilterCategoryActive = (filterCategory: Category) => {
    return selectedFilter.includes(filterCategory);
  };

  const filteredBlogs: SanityBlog[] = useMemo(() => {
    return blogs?.filter((blog) =>
      blog.tags?.some((tag) => selectedFilter.includes(tag as Category))
    );
  }, [blogs, selectedFilter]);

  return (
    <S.BlogSection>
      <MaxWidth>
        <VerticalStack gap="2rem">
          <PageIconLink
            href="/"
            icon={<ArrowLeft size={18} weight="bold" />}
            label="Zpět na hlavní stránku"
          />
          <VerticalStack gap="2rem">
            <Headline headlineType="h1">Blog</Headline>
            <Scrollable direction="horizontal">
              <BlogFilter
                onChange={handleChange}
                getIsCategoryActive={getFilterCategoryActive}
              />
            </Scrollable>

            {blogs.length > 0 &&
              filteredBlogs?.map((blog) => (
                <BlogArticle
                  key={blog?.slug?.current}
                  title={blog?.title}
                  description={blog?.shortDescription}
                  imageAlt={blog?.image?.alt}
                  date={blog?.createdAt}
                  author={blog?.author}
                  readTime={blog?.readTime}
                  image={blog?.image}
                  href={`/blog/${blog?.slug?.current}`}
                  categories={blog?.tags}
                />
              ))}

            {filteredBlogs.length === 0 && (
              <S.EmptyFilterResults>
                <Text variant="dark" center>
                  Nebyly nalezeny žádné články. Zkuste vybrat jinou kategorii.
                </Text>
              </S.EmptyFilterResults>
            )}
          </VerticalStack>
        </VerticalStack>
      </MaxWidth>
    </S.BlogSection>
  );
}
