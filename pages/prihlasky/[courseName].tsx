//interfaces
import { Course } from "@/domains";
import { GetServerSideProps, NextPage } from "next";
import { PrihlaskyNameScreen, prihlaskyNameData } from "@/screens";

interface CoursePageProps {
  courseName: Course;
  spreadsheet: string;
}

const CoursePage: NextPage<CoursePageProps> = ({ courseName, spreadsheet }) => {
  return (
    <main>
      <PrihlaskyNameScreen courseName={courseName} spreadsheet={spreadsheet} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<{
  courseName: Course;
}> = async (ctx) => {
  const courseName = ctx.query.courseName as Course;
  const spreadsheet = prihlaskyNameData?.find(
    (d) => d.name === courseName
  )?.spreadsheetId;

  if (!courseName)
    return {
      notFound: true,
    };

  return {
    props: {
      courseName,
      spreadsheet,
    },
  };
};

export default CoursePage;
