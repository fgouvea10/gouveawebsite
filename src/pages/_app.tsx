import type { AppProps } from 'next/app';

import { Header, Footer } from 'components/layout';

import 'styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
