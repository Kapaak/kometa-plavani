import { PropsWithChildren, createContext, useContext } from "react";

//TODO -> doplnit typy
const SanityHomeContext = createContext<{
  actualities: any[];
  faq: any[];
  document: any[];
}>({
  actualities: [],
  faq: [],
  document: [],
});

export const SanityHomeContextProvider = ({
  children,
  sanityData,
}: PropsWithChildren<{
  sanityData: {
    actualities: any[];
    faq: any[];
    document: any[];
  };
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
