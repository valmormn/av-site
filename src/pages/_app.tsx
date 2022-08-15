// import '../styles/globals.css'
import "$style/globals.scss";

import Layout from "$components/Layout";

import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
// import store from '../store/store'
import Head from "next/head";
// store={store}
//{/* <Provider> */}
//{/* </Provider> */}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

// MyApp.getInitialProps = async (appContext) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   // console.log(json)
//   return { stars: json.stargazers_count }
// }
