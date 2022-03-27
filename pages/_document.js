import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date());

    gtag("config", "G-MTB3BGJQCG");
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MTB3BGJQCG"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
        dataLayer.push(arguments)
        }
        gtag('js', new Date());

        gtag("config", "G-MTB3BGJQCG");
      </script>
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