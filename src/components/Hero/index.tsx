// import style from './hero.module.scss'

import Link from 'next/link'

// let classNameyStyle = [
// min-h-screen
// ].join(' ')

const Hero = () => {
  return (
    <>
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">AV Customize</h1>
            <p className="py-6">Escolha um item e customize como quizer. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
