import { PropsWithChildren, createContext, useContext } from "react";

import { SanityActuality, SanityDocument, SanityFaq } from "~/domains";

type SanityContext = {
  actualities: SanityActuality[];
  faqs: SanityFaq[];
  documents: SanityDocument[];
};

const SanityHomeContext = createContext<SanityContext>({
  actualities: [],
  faqs: [],
  documents: [],
});

export const SanityHomeContextProvider = ({
  children,
  sanityData,
}: PropsWithChildren<{
  sanityData: SanityContext;
}>) => {
  return (
    <SanityHomeContext.Provider value={sanityData}>
      {children}
    </SanityHomeContext.Provider>
  );
};

export function useSanityHomeContext() {
  return useContext(SanityHomeContext);
}
