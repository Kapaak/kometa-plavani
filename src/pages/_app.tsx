import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CookieConsent } from "~/components/CookieConsent";
import { HeadSelector } from "~/components/Shared";
import { AnalyticsProvider, PageContextProvider } from "~/contexts";

import { GlobalStyles } from "../styles/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
