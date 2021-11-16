import '~/styles/global.scss';
import React from 'react';

import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar';
import Sidebar from '~/components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
