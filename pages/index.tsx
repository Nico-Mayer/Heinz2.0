import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <Head>
        <title>Heinz 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center text-white">
        <div className="mb-80">
          <h1 className="mb-10 text-7xl font-bold">
            Heinz<sup className="text-5xl">2.0</sup>
          </h1>
          <h1 className="ml-24 text-xl font-bold">Coming Soon...</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
