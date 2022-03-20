import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOptions= {
  "client-id": "AZcTKWgTTFBFjMcdeJuG_5B2jiRsm6qNgiQ4smSnwyxhUmn2qHl6tftOlpptCVULGWvlrBe1a3f_20r_",
  currency: "BRL",
  intent: "capture"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
