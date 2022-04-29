import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Particle from '../components/Particle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden">
      <Particle />
      <div className="fixed z-[-1] h-full w-full bg-[#2b3539]"></div>
      <div className="hero-grid fixed z-[-1] h-full w-full opacity-40"></div>

      <div className="gradient fixed z-10 h-full w-full"></div>

      <div className="z-20 flex w-full flex-1  flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
