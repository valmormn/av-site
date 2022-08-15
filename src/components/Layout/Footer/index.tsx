// import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

import style from './footer.module.scss'

import dataCollection, { dataCollectionB } from './dataCollection'
//import dataCollectionB from "./dataCollection";
import dataCollectionPages from './dataCollectionPages'

import Image from 'next/image'
// import LinuxSvgIcon from '@/components/icons/linux'

// import styles from './footer.module.scss'

//type Props = {
//  children?: ReactNode
//  title?: string
//}

// text-base-content

const Footer = ({ items }: any) => {
  //console.log(items)
  return (
    <>
      <footer id="footer" className="p-5 footer bg-base-200">
        <div className="{style.wtf}">
          <Link href="/">
            <a className="link link-hover">
              <Image
                className={style.wtf}
                src="/assets/img/logo_av_2022.svg"
                alt=""
                width={300}
                height={100}
              />
            </a>
          </Link>
          <p>Árvore da Vida Confecções LTDA.</p>
          <p>
            CNPJ:{' '}
            <a
              target="_blank"
              href="http://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp"
              rel="noreferrer"
            >
              07.865.795/0001-40
            </a>
          </p>
        </div>
        <div>
          <ul className="">
            {' '}
            {dataCollection.map((item) =>
              item.title ? (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.path}>{item.text}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <ul>
            {' '}
            {dataCollectionB.map((item) =>
              item.title ? (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.path}>{item.text}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <ul>
            {' '}
            {dataCollectionPages.map((item) =>
              item.title ? (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.path}>{item.text}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer

export async function getStaticProps() {
  // get products from our api
  const query = `${process.env.CMS_HOST}/api/products?populate[Images][populate]=image`
  // console.log(query)

  // const query = `${process.env.}/api/products?populate[Images][populate]=image`

  const res = await fetch(query)
  const items = await res.json()
  // console

  return {
    props: { items }
  }
}
