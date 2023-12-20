import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

import { Analytics } from "@vercel/analytics/react";
import { HeadSelector } from "~/components/Shared";
import { PageContextProvider } from "~/contexts";

import { GlobalStyles } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <Analytics />
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <GlobalStyles />
      <HeadSelector />
      <Component {...pageProps} />
    </PageContextProvider>
  );
}

export default MyApp;
