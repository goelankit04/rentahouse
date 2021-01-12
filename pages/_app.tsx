import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='antialiased font-body scrolling-touch'>
      <Head>
        <title>nurtr</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='https://s3.ap-south-1.amazonaws.com/nurtr-favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='https://s3.ap-south-1.amazonaws.com/nurtr-favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='https://s3.ap-south-1.amazonaws.com/nurtr-favicons/favicon-16x16.png'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
