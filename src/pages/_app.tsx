import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
    );

    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
