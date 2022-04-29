import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="z-20 flex min-h-screen flex-1 flex-col items-center justify-center pt-[6rem]">
      <Head>
        <title>Heinz 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt=""
          className="max-w-2xl"
        />
        <h1 className="text-6xl font-bold text-white">Heinz 2.0</h1>
        <div className="h-[5000px] w-10"></div>
      </main>
    </div>
  )
}

export default Home
