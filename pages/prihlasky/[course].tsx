//interfaces
import { SchoolSectionForm } from "@/components/PagePrihlasky/SchoolSectionForm";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ErrorPage from "pages/404";
//sanity
import { client } from "sanity";

const CoursePage: NextPage = () => {
  return (
    <div>
      <h1>whatever</h1>
      <SchoolSectionForm spreadsheet={"0"} />
    </div>
  );
};
export default CoursePage;
