import { PropsWithChildren, createContext, useContext } from "react";

import { SanityBlog } from "~/domains";

type SanityContext = {
  blogs: SanityBlog[];
};

const SanityBlogsContext = createContext<SanityContext>({
  blogs: [],
});

export const SanityBlogsContextProvider = ({
  children,
  sanityData,
}: PropsWithChildren<{
  sanityData: SanityContext;
}>) => {
  return (
    <SanityBlogsContext.Provider value={sanityData}>
      {children}
    </SanityBlogsContext.Provider>
  );
};

export function useSanityBlogContext() {
  return useContext(SanityBlogsContext);
}
