import { LectureDaysTimesCapacity, SanityCourse } from "@/domains";
import { useSanityApplications } from "hooks/useSanityApplications";
import { PropsWithChildren, createContext, useContext } from "react";

type SanityContext = {
  courses: SanityCourse[];
  lectureDaysTimesCapacity: LectureDaysTimesCapacity;
};

const SanityApplicationsContext = createContext<SanityContext>({
  courses: [],
  lectureDaysTimesCapacity: {},
});

export const SanityApplicationsContextProvider = ({
  children,
  courses,
}: PropsWithChildren<{
  courses: SanityCourse[];
}>) => {
  const { lectureDaysTimesCapacity } = useSanityApplications(courses);

  return (
    <SanityApplicationsContext.Provider
      value={{ courses, lectureDaysTimesCapacity }}
    >
      {children}
    </SanityApplicationsContext.Provider>
  );
};

export function useSanityApplicationsContext() {
  return useContext(SanityApplicationsContext);
}
