// import '../styles/globals.css'
import "$style/globals.scss";

import Layout from "$components/Layout";

import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '../store/store'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
