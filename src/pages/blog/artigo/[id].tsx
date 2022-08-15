import type { NextPage } from 'next'

//import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next/types'
//import { useEffect } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import Head from 'next/head'

import ProcessImage from 'react-imgpro'

const Cores = () => {
  const x = ['white', 'black', 'silver', 'green', 'red', 'blue', 'pink'].map(
    (value, index) => (
      <span
        key={index}
        className={`badge badge-lg m-1`}
        style={{ backgroundColor: value }}
      ></span>
    )
  )

  //console.log(x)
  return <div className="flex flex-row">{x}</div>
}

const Tamanhos = () => {
  const x = ['P', 'M', 'G', 'GG', 'XGG'].map((value, index) => (
    <div className="" key={index}>
      <label className="label mx-auto">
        <span className="label-text text-lg text-center">{value}</span>
      </label>
      <input
        type="number"
        placeholder=""
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  ))

  //console.log(x)
  return <div className="flex flex-row">{x}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `${process.env.CMS_HOST}/api/products`

  const res = await fetch(query)
  const items = await res.json()

  // É precso mapear o array de items para gerar os paths
  const pathx: Array<string> = items.data.map((value) => {
    return { params: { id: value.attributes.unique } }
  })

  return {
    paths: pathx,
    fallback: false // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const cmsQuery = `${process.env.CMS_HOST}/api/products?populate[Images][populate]=image&filters[unique][$eq]=${id}`

  const res = await fetch(cmsQuery)
  const item = await res.json()

  return {
    props: { item }
  }
}

const Article = ({ item }) => {
  //const src = useSrc('')
  //const err = useErr(null)
  //const router = useRouter()
  // console.log(item.data[0].attributes)
  const data = item.data[0].attributes

  useEffect(() => {
    //console.log(data)
  })

  return (
    <>
      <Head>
        <title>{`AV ${item.data[0].attributes.Title}`}</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-x-20">
          <div className="mx-auto">
            {/*<ProcessImage
							image={
								'http://192.168.0.123:1337' +
								item.data[0].attributes.Images.data[0].attributes.formats.medium
									.url
							}
							colors={{
								mix: {
									color: 'mistyrose',
									amount: 200
								}
							}}
							quality={15}
							greyscale={true}
							invert={true}
							resize={{ width: 400, height: 400 }}
							processedImage={(src, err) => this.setState({ src, err })}
						/>*/}
            <picture>
              <Image
                src={
                  'http://192.168.0.123:1337' +
                  item.data[0].attributes.Images.data[0].attributes.formats
                    .medium.url
                }
                alt={
                  item.data[0].attributes.Images.data[0].attributes
                    .alternativeText.height
                }
                width={
                  item.data[0].attributes.Images.data[0].attributes.formats
                    .medium.height
                }
                height={
                  item.data[0].attributes.Images.data[0].attributes.formats
                    .medium.width
                }
                loading="lazy"
              ></Image>
            </picture>
          </div>
          <div className="w-full lg:py-6 mt-6 lg:mt-0 mx-auto">
            <h1>{item.data[0].attributes.Title}</h1>
            <div className="price-tag pb-6">
              <p className="text-2xl text-center">
                Preço Unitário:{' '}
                <span className="text-4xl">R$ {data.Price.toFixed(2)}</span>
              </p>
              <p className="text-xs text-center">
                {' '}
                Preço para até 20 unidades.
              </p>
              <p className="text-xs text-center">
                Verifique nossos descontos para compras no atacado.
              </p>
            </div>

            <div className="cores flex flex-row w-full flex-">
              <Cores />
            </div>
            <div>
              <p className="text-xl font-bold">Tamanhos</p>
              <Tamanhos />
            </div>

            <div className="flex flex-row justify-center">
              <button className="btn w-72 m-6">Comprar</button>
            </div>
            <p className="text-xl font-bold">Descrição</p>
            <p>{data.Info}</p>
            <p className="text-xl font-bold">Detalhes</p>
            <p>{data.Details}</p>
            <p className="text-xl font-bold">Dimensões</p>
            <p>{data.Details}</p>
          </div>
        </div>
      </div>

      <hr></hr>
      <h3>Sugestão de produtos</h3>
    </>
  )
}

export default Article
