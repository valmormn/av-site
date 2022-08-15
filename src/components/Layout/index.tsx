import React, { ReactNode } from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
import Header from '$components/Layout/Header'
import Main from '$components/Layout/Main'
import Footer from '$components/Layout/Footer'
import Whatsapp from '$components/Whatsapp'

import styles from './layout.module.css'

//import type { chi } from 'next/app'

//type Props = {
//  children?: ReactNode
//  title?: string
//}

// ?
interface Props {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => (
  <>
    {/* 
		<Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    */}
    <Header />
    <Main>{children}</Main>
    {/* <main className={styles.main}>{children}</main> */}
    <Footer />
    <Whatsapp />
  </>
)

export default Layout
