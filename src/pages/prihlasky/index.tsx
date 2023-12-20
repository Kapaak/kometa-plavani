import { InferGetServerSidePropsType, NextPage } from "next";
import { groq } from "next-sanity";

import { PageLayout } from "~/components/PageLayout";
import {
  GoogleSheetsContextProvider,
  LecturesContextProvider,
  SanityApplicationsContextProvider,
} from "~/contexts";
import { SanityInfoBar } from "~/domains";
import { client } from "~/libs";
import { PrihlaskyScreen } from "~/screens";

interface Props extends InferGetServerSidePropsType<typeof getStaticProps> {}

const PrihlaskyPage: NextPage<Props> = ({ courses, infoBar }) => {
  return (
    <SanityApplicationsContextProvider courses={courses}>
      <GoogleSheetsContextProvider>
        <LecturesContextProvider courses={courses}>
          <PageLayout infoBar={infoBar}>
            <PrihlaskyScreen />
          </PageLayout>
        </LecturesContextProvider>
      </GoogleSheetsContextProvider>
    </SanityApplicationsContextProvider>
  );
};

export default PrihlaskyPage;

export const getStaticProps = async () => {
  const queryCourse = groq`*[_type == "course"]{pondeli[]{start,capacity},utery[]{start,capacity},streda[]{start,capacity},ctvrtek[]{start,capacity},patek[]{start,capacity},duration,price,title,value,age,file{asset->{url}}}`;
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;

  const courses = await client.fetch(queryCourse);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);

  return {
    props: {
      courses,
      infoBar,
    },
    revalidate: 10,
  };
};
