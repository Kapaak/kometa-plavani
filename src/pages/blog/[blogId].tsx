import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { groq } from "next-sanity";

import { PageLayout } from "~/components/PageLayout";
import { SanityBlog, SanityInfoBar } from "~/domains";
import { client } from "~/libs";
import { BlogItemScreen } from "~/screens";

interface BlogItemPageProps
  extends InferGetServerSidePropsType<typeof getStaticProps> {}

export default function BlogItemPage({ infoBar, blog }: BlogItemPageProps) {
  return (
    <PageLayout infoBar={infoBar}>
      <BlogItemScreen blog={blog} />
    </PageLayout>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext<any>) => {
  const { blogId } = ctx.params;

  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;
  const queryBlog = groq`*[_type == "blog" && slug.current == "${blogId}"][0]{title,shortDescription,description,createdAt,author,readTime,image{asset->{...,metadata}},tags,slug}`;

  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);
  const blog: SanityBlog = await client.fetch(queryBlog);

  return {
    props: {
      infoBar,
      blog,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const queryBlog = groq`*[_type == "blog"]{slug}`;

  const blogs: SanityBlog[] = await client.fetch(queryBlog);

  const paths = blogs.map((blog) => ({
    params: { blogId: blog.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};
