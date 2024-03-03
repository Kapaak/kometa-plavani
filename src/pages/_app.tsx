import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Analytics } from "@vercel/analytics/react";
import posthog from "posthog-js";

import { CookieConsent } from "~/components/CookieConsent";
import { HeadSelector } from "~/components/Shared";
import { PageContextProvider } from "~/contexts";

import { GlobalStyles } from "../styles/GlobalStyles";

//disable posthog in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <PageContextProvider>
      <Analytics />
      {/* <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      /> */}
      <GlobalStyles />
      <HeadSelector />
      <Component {...pageProps} />
      <CookieConsent />
    </PageContextProvider>
  );
}
