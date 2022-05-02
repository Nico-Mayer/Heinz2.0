import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <Head>
        <title>Heinz 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center text-white">
        <div className="">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <h1 className="mb-6 text-7xl font-bold">Heinz 2.0</h1>
            <h1 className="ml-64 animate-pulse text-xl font-bold">
              Coming Soon...
            </h1>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Home
