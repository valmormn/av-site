import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'
import Explorer from '$components/Explorer'
// import { useEffect } from 'react'
// import Hero from '$components/Hero'

const Home: NextPage = ({ items }: any) => {
  const router = useRouter()

  // useEffect(() => {
  //   router.push('/inicio')
  // })

  return (
    <>
      <Head>
        <title>AV Customize</title>
      </Head>
      {/* <h1>Árvore da Vida Confecção & Estamparia</h1> */}
      {/* <Hero/> */}
      <Explorer items={items} section="shop" />

      <ul>
        <li>Escolha o item desejado</li>
        <li>Personalize adicionando sua arte com a técnica deseja.</li>
        <li>Descontos para compras no atacado</li>
        <li>Escolha a quantidade</li>
        <li>Confirme o pedido</li>
        <li>
          Pronto! Agora é só aguardar o prazo de produção e entrega para receber
          seu produto.
        </li>
      </ul>
    </>
  )
}

export default Home

export async function getStaticProps() {
  // get products from our api
  const query = `${process.env.CMS_HOST}/api/products?populate[Images][populate]=image=*&randomSort=true`
  //console.log('Home')
  //console.log(query)

  // const cmsQuery = `${process.env.}/api/products?populate[Images][populate]=image`

  const res = await fetch(query)
  const items = await res.json()

  return {
    props: { items }
  }
}
