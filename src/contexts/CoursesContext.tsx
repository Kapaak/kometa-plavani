import { PropsWithChildren, createContext, useContext, useMemo } from "react";

import _ from "lodash";

import {
  CoursesInformation,
  GoogleSheets,
  LectureDaysTimesCapacity,
  SanityCourse,
} from "~/domains";
import { useGoogleSheets, useSanityApplications } from "~/hooks";

type CompleteLecture = LectureDaysTimesCapacity & GoogleSheets;

type SanityContext = {
  coursesInformation: CoursesInformation;
  lectureDaysTimesCapacity: LectureDaysTimesCapacity;
};

const SanityDataContext = createContext<SanityContext>({
  coursesInformation: {},
  lectureDaysTimesCapacity: {},
});

const CoursesContext = createContext<{
  lectures?: CompleteLecture;
  isLoading: boolean;
  isError: boolean;
}>({
  lectures: {},
  isLoading: false,
  isError: false,
});

export const CoursesContextProvider = ({
  children,
  courses,
}: PropsWithChildren<{
  courses: SanityCourse[];
}>) => {
  const { lectureDaysTimesCapacity, coursesInformation } =
    useSanityApplications(courses);

  const { googleSheets, isError, isLoading } = useGoogleSheets();

  const lectures: CompleteLecture = _.mergeWith(
    lectureDaysTimesCapacity,
    googleSheets
  );

  const sanityDataValue = useMemo(() => {
    return { coursesInformation, lectureDaysTimesCapacity };

    //I need to also listen for changes in gooogleSheets
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coursesInformation, lectureDaysTimesCapacity, googleSheets]);

  const coursesValue = useMemo(() => {
    return { lectures, isLoading, isError };
  }, [isError, isLoading, lectures]);

  return (
    <SanityDataContext.Provider value={sanityDataValue}>
      <CoursesContext.Provider value={coursesValue}>
        {children}
      </CoursesContext.Provider>
    </SanityDataContext.Provider>
  );
};

export function useCoursesContext() {
  return useContext(CoursesContext);
}

export function useSanityDataContext() {
  return useContext(SanityDataContext);
}
