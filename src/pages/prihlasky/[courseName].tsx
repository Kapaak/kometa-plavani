//interfaces
import { GetStaticPropsContext, NextPage } from "next";
import { groq } from "next-sanity";

import { PageLayout } from "~/components/PageLayout";
import { LecturesContextProvider } from "~/contexts";
import { Course, PageData, SanityCourse } from "~/domains";
import { client } from "~/libs";
import { PrihlaskyNameScreen, prihlaskyNameData } from "~/screens";

interface CoursePageProps {
  pageData: PageData;
  courses: SanityCourse[];
}

const CoursePage: NextPage<CoursePageProps> = ({ pageData, courses }) => {
  return (
    <LecturesContextProvider courses={courses}>
      <PageLayout>
        <PrihlaskyNameScreen pageData={pageData} />
      </PageLayout>
    </LecturesContextProvider>
  );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const queryCourse = groq`*[_type == "course"]{pondeli[]{start,capacity},utery[]{start,capacity},streda[]{start,capacity},ctvrtek[]{start,capacity},patek[]{start,capacity},duration,price,title,value,age,file{asset->{url}}}`;

  const courseName = ctx.params?.courseName as Course;
  const pageData = prihlaskyNameData?.find((d) => d.name === courseName);

  const courses = await client.fetch(queryCourse);

  if (!pageData)
    return {
      notFound: true,
      revalidate: 10,
    };

  return {
    props: {
      pageData,
      courses,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const paths = prihlaskyNameData.map((data) => ({
    params: {
      courseName: data?.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default CoursePage;
