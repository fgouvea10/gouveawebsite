import React from 'react';

import '~/styles/global.scss';

import type { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
