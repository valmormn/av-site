import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Hero from '$components/Hero'



const Home: NextPage = () => {

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
      <Hero></Hero>
      <ul>
        <li>Escolha o item desejado</li>
        <li>Escolha a técnica de customização</li>
        <li>Adicone sua arte</li>
        <li>Escolha a quantidade</li>
        <li>Confirme o pedido</li>
        <li>Pronto! Agora é só aguardar o prazo de produção e entrega para receber seu produto.</li>
      </ul>
    </>
  )
}

export default Home
