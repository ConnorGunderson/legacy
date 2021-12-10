import { NextSeo } from 'next-seo';

import '@/styles/tailwind.css';
import '@/styles/globals.css';
import SEOConfig from '@/config/next-seo.config';
import { EmailProvider } from '@/lib/email';

function MyApp({ Component, pageProps }) {
  return (
    <EmailProvider>
      <NextSeo openGraph={SEOConfig} />
      <Component {...pageProps} />
    </EmailProvider>
  );
}

export default MyApp;
