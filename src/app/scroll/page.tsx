/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/globals.css';
import Layout from '@/app/layout';

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;