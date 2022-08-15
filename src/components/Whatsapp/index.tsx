import { IoLogoWhatsapp } from 'react-icons/io5'
import style from './whatsapp.module.scss'

import Link from 'next/link'

let classyStyle = [
  'btn',
  'btn-circle',
  'bg-green-500',
  'border-transparent',
  'hover: bg-green-400',
  'hover: border-transparent',
  style.whatsapp,
  'bounce'
].join(' ')

const urlencodedtext = encodeURIComponent('Oi Árvore da Vida!')

const whatsappLink = `https://wa.me/5521999324792?text=${urlencodedtext}`

const Whatsapp = () => {
  return (
    <>
      <Link href={whatsappLink} target="_blank">
        <button className={classyStyle}>
          <IoLogoWhatsapp />
        </button>
      </Link>
    </>
  )
}

export default Whatsapp
