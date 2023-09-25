import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { PrihlaskyScreen } from "@/screens";
import { SanityApplicationsContextProvider } from "@/contexts";
import { client } from "@/libs";
import { GoogleSheetsContextProvider } from "@/contexts";
import { PageLayout } from "@/components/PageLayout";
import { groq } from "next-sanity";
import { SanityInfoBar } from "@/domains";

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const PrihlaskyPage: NextPage<Props> = ({ courses, infoBar }) => {
  console.log("🚀 ~ file: index.tsx:18 ~ courses:", courses);
  return (
    <SanityApplicationsContextProvider courses={courses}>
      <GoogleSheetsContextProvider>
        <PageLayout infoBar={infoBar}>
          <PrihlaskyScreen />
        </PageLayout>
      </GoogleSheetsContextProvider>
    </SanityApplicationsContextProvider>
  );
};

export default PrihlaskyPage;

export const getServerSideProps = async () => {
  const queryCourse = groq`*[_type == "course"]{pondeli[]{start,capacity},utery[]{start,capacity},streda[]{start,capacity},ctvrtek[]{start,capacity},patek[]{start,capacity},duration,price,title,value,age,file{asset->{url}}}`;
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;

  const courses = await client.fetch(queryCourse);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);

  return {
    props: {
      courses,
      infoBar,
    },
  };
};
