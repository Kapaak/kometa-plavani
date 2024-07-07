import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import { CookieConsent } from "~/components/CookieConsent";
import { HeadSelector } from "~/components/Shared";
import { AnalyticsProvider, PageContextProvider } from "~/contexts";

import { GlobalStyles } from "../styles/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

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
  return (
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <AnalyticsProvider>
          <PageContextProvider>
            <ToastContainer
              position="bottom-right"
              autoClose={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              theme="colored"
            />

            <GlobalStyles />
            <HeadSelector />
            <Component {...pageProps} />
            <CookieConsent />
          </PageContextProvider>
        </AnalyticsProvider>
      </QueryClientProvider>
    </PostHogProvider>
  );
}
