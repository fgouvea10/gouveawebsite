import { Header } from 'components/layout';
import type { AppProps } from 'next/app';

import 'styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
