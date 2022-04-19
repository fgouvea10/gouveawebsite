import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/fonts/Etoile-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link rel="icon" type="image/x-png" href="/images/favicon.png" />
          <meta
            name="keywords"
            content="felipegouvea, gouvea, felipe gouvea web development, felipe gouvea uiux, web designer, web development, portfolio web designer, portfolio web developer, portfolio develop, website, web, ui/ux, ui, ui design, ux design, portfolio, frontend developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://felipegouvea.com" />
          <meta
            property="og:image"
            content="https://www.felipegouvea.com/images/thumbnail.png"
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
