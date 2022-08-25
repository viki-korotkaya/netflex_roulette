import type { AppProps } from "next/app";
import { wrapper } from "store/store";
import GlobalStyle from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
