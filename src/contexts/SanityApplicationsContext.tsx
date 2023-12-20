import { PropsWithChildren, createContext, useContext } from "react";

import {
  CoursesInformation,
  LectureDaysTimesCapacity,
  SanityCourse,
} from "~/domains";
import { useSanityApplications } from "~/hooks";

type SanityContext = {
  coursesInformation: CoursesInformation;
  lectureDaysTimesCapacity: LectureDaysTimesCapacity;
};

const SanityApplicationsContext = createContext<SanityContext>({
  coursesInformation: {},
  lectureDaysTimesCapacity: {},
});

export const SanityApplicationsContextProvider = ({
  children,
  courses,
}: PropsWithChildren<{
  courses: SanityCourse[];
}>) => {
  const { lectureDaysTimesCapacity, coursesInformation } =
    useSanityApplications(courses);

  return (
    <SanityApplicationsContext.Provider
      value={{ coursesInformation, lectureDaysTimesCapacity }}
    >
      {children}
    </SanityApplicationsContext.Provider>
  );
};

export function useSanityApplicationsContext() {
  return useContext(SanityApplicationsContext);
}
