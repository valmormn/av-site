// import type { NextPage } from 'next'

import Head from 'next/head'
import { useEffect } from 'react'

import style from './auth.module.scss'

//import Vercel from '$public/assets/img/vercel.svg'
// import file from './text.mdx'

const Auth = () => {
  useEffect(() => {
    console.log('Auth')
  }, [])

  // + 'container mx-auto w-72'
  return (
    <>
      <Head>
        <title>AV Autenticação</title>
      </Head>
      <section id="auth" className={style.wrapper}>
        <h1>Autenticação</h1>

        <div className="form-control">
          <input
            placeholder="email"
            className="input input-bordered"
            type="text"
          />
          {/*
          <input
            placeholder="senha"
            className="input input-bordered"
            type="text"
          />
          */}
        </div>

        <button className="btn btn-primary btn-disabled">Avançar</button>

        <button className="btn btn-secondary">Cadastrar</button>

        <button className="btn btn-ghost">Recuperar Acesso</button>
      </section>
    </>
  )
}

export default Auth
