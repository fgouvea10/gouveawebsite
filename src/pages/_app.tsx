import '~/styles/global.scss';
import React from 'react';

import type { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Sidebar from '~/components/Sidebar';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
