import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Particle from '../components/Particle'
import { useMemo } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const pariclesBack = useMemo(() => {
    return <Particle />
  }, [])
  return (
    <div className="overflow-x-hidden">
      {pariclesBack}
      <div className="fixed z-[-10] h-screen w-full bg-[#2b3539]"></div>
      <div className="hero-grid fixed z-[-10] h-screen w-full opacity-40"></div>
      <div className="gradient fixed h-screen w-full"></div>
      <div className="flex w-full flex-1  flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
