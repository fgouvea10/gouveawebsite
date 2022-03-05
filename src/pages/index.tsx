import React from 'react';

import Head from 'next/head';

import Navbar from '~/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Enthusiast web development and UI designer. Uniting experience and passion with a single purpose."
        />
      </Head>

      <Navbar />

      <div></div>
    </>
  );
}
