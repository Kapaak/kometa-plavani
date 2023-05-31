//libraries
import { Provider } from "react-redux";
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
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `}
      </Script>
      <GlobalStyles />
      <Header />
      <HeadSelector />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
