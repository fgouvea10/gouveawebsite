import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta
            property="og:image"
            content="https://felipegouvea.com/images/thumbnail.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://felipegouvea.com/images/thumbnail.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
