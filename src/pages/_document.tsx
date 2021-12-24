import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-png" href="/images/favicon.png" />
          <meta
            name="keywords"
            content="felipegouvea, gouvea, web designer, web development, website, web, ui/ux, ui, ui design, ux design, portfolio, frontend developer"
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
