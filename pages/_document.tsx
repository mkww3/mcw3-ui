import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="initirn dal-scale=1.0, width=device-width" />
        <meta name="title" content="Make Chang3 | ETHPorto" />
        <meta
          name="description"
          content="Make Chang3 | ETHPorto"
        />

        <meta
          property="og:title"
          content="Make Chang3 | ETHPorto"
        />
        <meta property="og:site_name" content="makechang3" />
        <meta
          property="og:description"
          content="Make Chang3 | ETHPorto"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Make Chang3 | ETHPorto"
        />
        <meta
          property="twitter:description"
          content="Make Chang3 | ETHPorto"
        />

        <meta name="theme-color" content="#000" />

        <link rel="icon" href="/logo.png" type="image/svg+xml" />
        <link rel="shortcut icon" href="logo.png" />
        <link rel="shortcut icon" href="logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
