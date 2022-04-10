import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-us'>
        <Head>
          {/* SEO */}
          <meta charSet='UTF-8' />
          <meta name='language' content='en' />

          <link rel='shortcut icon' href='favicon.ico' />
          <meta name='theme-color' content='#0f172a' />
          <meta name='author' content='Eduardo Dusik' />
          <meta name='title' content='Eduardo Dusik - Pictures Gallery' />
          <meta name='description' content='Photo gallery of my works' />
          <meta name='keywords' content='eduardo, dusik, picture, photo, gallery, painting, work' />

          <meta property='og:type' content='website' />
          <meta property='og:title' content='Eduardo Dusik - Pictures Gallery' />
          <meta property='og:description' content='Photo gallery of my works' />
          <meta property='og:site_name' content='Eduardo Dusik - Pictures Gallery' />

          {/* Font */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
