import { PropsWithChildren, createContext, useContext } from "react";

import _ from "lodash";

import {
  GoogleSheets,
  LectureDaysTimesCapacity,
  SanityCourse,
} from "~/domains";
import { useGoogleSheets, useSanityApplications } from "~/hooks";

type CompleteLecture = LectureDaysTimesCapacity & GoogleSheets;

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
  const { lectureDaysTimesCapacity } = useSanityApplications(courses);

  const { googleSheets, isError, isLoading } = useGoogleSheets();

  const lectures: CompleteLecture = _.mergeWith(
    lectureDaysTimesCapacity,
    googleSheets
  );

  return (
    <CoursesContext.Provider
      value={{
        lectures,
        isLoading,
        isError,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export function useCoursesContext() {
  return useContext(CoursesContext);
}
