import { Footer } from 'components/shared/Footer';
import { Header } from 'components/shared/Header';
import type { AppProps } from 'next/app';

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
