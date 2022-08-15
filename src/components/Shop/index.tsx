// import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Card from '$components/Card'

type Props = {
  items?: any
  section?: any
}

const Explorer = ({ items, section }: Props) => {
  return (
    <>
      {/* <h1>Explorer</h1> */}
      {/* <div>{args.filter && <h2>Filter Data by Categories</h2>}</div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 place-content-center place-items-center m-8">
        {items.data.map((item: any, index: number) => (
          <Card data={item} args={''} key={index} />
        ))}
      </div>
    </>
  )
}

export default Explorer
