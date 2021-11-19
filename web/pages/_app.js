import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import '../styles/fonts.css';
import '../styles/globals.css';

const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

const MyApp = ({ Component, pageProps }) => {
  const [innerHeight, setInnerHeight] = useState('0');
  useEffect(() => {
    function setPageHeight() {
      setInnerHeight(`${window.innerHeight + 1}px`);
    }

    window.addEventListener('resize', setPageHeight);

    setPageHeight();

    return () => window.removeEventListener('resize', setPageHeight);
  }, []);

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === '/') {
      document.body.classList.remove('page');
      document.body.classList += 'index';
    } else {
      document.body.classList.remove('index');
      document.body.classList += 'page';
    }
  }, [pathname]);

  return (
    <div style={{ height: innerHeight }}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fdb141" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#34B5DE" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Component {...pageProps} />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaTrackingId}');
        `}
      </Script>
    </div>
  );
};

export default MyApp;
