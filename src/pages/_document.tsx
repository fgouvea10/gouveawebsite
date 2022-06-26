import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta
            property="og:image"
            content="https://felipegouvea.com/images/thumbnail.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://felipegouvea.com/images/thumbnail.png"
          />
          <meta
            name="description"
            content="I'm a UI/UX designer and web developer who likes to combine my experience with the job market with what I most enjoy doing: developing things that make people happy. Get in touch and let's make your idea become the BIG IDEA"
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
