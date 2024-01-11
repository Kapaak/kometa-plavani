import { useMemo, useState } from "react";

import { BLOG_CATEGORIES } from "~/constants/category";
import { Category } from "~/domains";
import { Headline, MaxWidth, Scrollable, Text, VerticalStack } from "~/styles";

import { BlogArticle, BlogFilter } from "./components";

import * as S from "./BlogScreen.style";

interface BlogScreenProps {}

const DUMMYBLOGS = [
  {
    id: "1",
    title: "Jak porbíhá výka plavání",
    description:
      "Cílem naší výuky u dětí předškolního věku je adaptovat na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj.konkrétně zahrnuje odstranění strachu z vody, ",
    date: "2021-03-21",
    author: "Bara Novakova",
    readTime: 5,
    image: "",
    categories: ["tips", "training"],
  },
  {
    id: "2",
    title: "Co se stalo s ploutvema",
    description:
      "Cílem naší výuky u dětí předškolního věku je adaptovat na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj.konkrétně zahrnuje odstranění strachu z vody, ",
    date: "2022-06-15",
    author: "Pavle Zapletal",
    readTime: 5,
    image: "",
    categories: ["equipment", "funFact"],
  },
];

export function BlogScreen({}: BlogScreenProps) {
  const [selectedFilter, setSelectedFilter] =
    useState<Category[]>(BLOG_CATEGORIES);

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

  const filteredBlogs = useMemo(() => {
    return DUMMYBLOGS.filter((blog) =>
      blog.categories?.some((category) =>
        selectedFilter.includes(category as Category)
      )
    );
  }, [selectedFilter]);

  return (
    <MaxWidth>
      <VerticalStack gap="2rem">
        <VerticalStack gap="2rem">
          <Headline>Blog</Headline>
          <Scrollable direction="horizontal">
            <BlogFilter
              onChange={handleChange}
              getIsCategoryActive={getFilterCategoryActive}
            />
          </Scrollable>

          {DUMMYBLOGS.length > 0 &&
            filteredBlogs?.map((blog) => (
              <BlogArticle
                key={blog.id}
                title={blog?.title}
                description={blog?.description}
                date={blog?.date}
                author={blog?.author}
                readTime={blog?.readTime}
                image={blog?.image}
                href={`/blog/${blog?.id}`}
                categories={blog?.categories}
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
  );
}
