//interfaces
import { Course, PageData } from "@/domains";
import { GetServerSideProps, NextPage } from "next";
import { PrihlaskyNameScreen, prihlaskyNameData } from "@/screens";

interface CoursePageProps {
  pageData: PageData;
}

const CoursePage: NextPage<CoursePageProps> = ({ pageData }) => {
  return (
    <main>
      <PrihlaskyNameScreen pageData={pageData} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<CoursePageProps> = async (
  ctx
) => {
  const courseName = ctx.query.courseName as Course;
  const pageData = prihlaskyNameData?.find((d) => d.name === courseName);

  if (!pageData)
    return {
      notFound: true,
    };

  return {
    props: {
      pageData,
    },
  };
};

export default CoursePage;
