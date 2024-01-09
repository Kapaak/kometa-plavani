import { Headline, MaxWidth, VerticalStack } from "~/styles";

import { BlogArticle } from "./components";

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
    categories: [1, 3],
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
    categories: [2, 4],
  },
];

export function BlogScreen({}: BlogScreenProps) {
  return (
    <MaxWidth>
      <p>kategorie ....</p>
      <Headline>Blog</Headline>

      <VerticalStack gap="2rem">
        {DUMMYBLOGS?.map((blog) => (
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
      </VerticalStack>
    </MaxWidth>
  );
}
