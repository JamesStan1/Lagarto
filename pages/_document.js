import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(){
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Portfolio of Charizze C. Lagarto" />
          <link rel="icon" type="image/png" href="/images/profpic.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
