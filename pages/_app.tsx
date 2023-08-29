//libraries
import { Provider } from "react-redux";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
//components
import { HeadSelector } from "@/shared";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
//styles
import { GlobalStyles } from "../styles/GlobalStyles";
//types
import type { AppProps } from "next/app";
//redux
import { store } from "@/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Analytics />
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <GlobalStyles />
      <Header />
      <HeadSelector />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
