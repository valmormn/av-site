import style from './main.module.scss'

//type Props = {
//  title: string
//  description: string
//}
//
//const props = {
//  title: 'React Advanced',
//  description:
//    'NextJS, ReactJS, TypeScript, Styled Components, TailwindCSS, daisyUI'
//}

// const Main = ({
//   title = 'React Advanced',
//   description = 'NextJS, ReactJS, TypeScript, Styled Components, TailwindCSS, daisyUI'
// }) => <main>{children}</main>

const TailwindCSS = 'place-items-center'

const Main = ({ children }: any) => (
  <>
    <main className={`${style.main} ${TailwindCSS}`}>{children}</main>
  </>
)

export default Main
