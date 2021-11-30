import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="https://www.sports.info/assets/images/favicon.png"
          ></link>
          <link rel="apple-touch-icon" href="/favicon.png"></link>
          <link rel="manifest" href="/manifest.json"></link>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/vdl6tdy.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/acn5tjw.css"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
