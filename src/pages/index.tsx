import React from 'react';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Web development and UI/UX enthusiast. Uniting experience and passion with a single purpose."
        />
      </Head>

      <main>
        {Array.from({ length: 190 }, () => (
          <div>olá</div>
        ))}
      </main>
    </>
  );
}
