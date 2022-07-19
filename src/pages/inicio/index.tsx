// import type { NextPage } from 'next'

import Head from "next/head";
import { useEffect } from "react";

import Vercel from "$public/assets/img/vercel.svg";
// import file from './text.mdx'

const Inicio = () => {

  useEffect(() => {
    console.log("Inicio");
  }, []);

  return (
    <>

      <Head>
        <title>AV Início</title>
      </Head>
      <div id="Inicio">
        <h1>Inicio</h1>
        <Vercel />
        <p>x</p>
        {/* {file} */}
      </div>

    </>
  );
};

export default Inicio;
