import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='Description'
            content='nurtr is an online skilling platform focused on extra-curriculars. Learn from the world’s best mentors through cinematized videos and live interactive sessions.'
          />
          <meta
            name='keywords'
            content='learn chess online, learn cricket online, chess coaching online, cricket coaching online, chess coaching program, cricket coaching program, chess course online, cricket course online, chess best mentors, cricket best coach, Gary Kirsten, RB Ramesh, chess coach RB Ramesh, cricket coach Gary Kirsten'
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

export default MyDocument;

// TODO - warning -  <meta name='viewport' content='width=device-width, initial-scale=1' />
// Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta
