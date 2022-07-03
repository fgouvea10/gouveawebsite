import type { AppProps } from 'next/app';

import { Footer, Header } from 'components/shared';

import 'styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
