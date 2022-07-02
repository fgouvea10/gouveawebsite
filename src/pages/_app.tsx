import { Fragment } from 'react';
import { Header } from 'components/shared/Header';
import type { AppProps } from 'next/app';

import 'styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
