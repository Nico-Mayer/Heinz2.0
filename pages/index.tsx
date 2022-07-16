import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Tile from '../components/Tile'
import router from "next/router";

const Home: NextPage = () => {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <Head>
        <title>Heinz 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex h-full w-full max-w-7xl flex-col  text-center text-white">
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
              Tauche ein in die Welt der Deepfakes!
            </h1>
          </motion.div>
          <div
            className={
              'z-10 mt-12 flex h-min flex-wrap justify-center bg-bgMain/40 shadow-3xl backdrop-blur-md '
            }
          >
            <Tile
              title={'Deepfakes'}
              imgSrc={'/realesBsp.png'}
              text={'Alles was man über Deepfakes wissen sollte!'}
              url={'/sub/deepfakes'}
            />
            <Tile
              title={'About Us'}
              imgSrc={'/abouUsThumbnail.png'}
              text={'Lernt das Team kennen!'}
              url={'/sub/aboutus'}
            />
            <Tile
              title={'Heinz 2.0'}
              imgSrc={'/logo.png'}
              text={'Wer ist eigentlich Heinz und warum gibt es Heinz 2.0?'}
              url={'/sub/heinzzweinull'}
            />
            <Tile
              title={'Software'}
              imgSrc={'/vorschaufenster.png'}
              text={'Links zur verwendeten Software und Infos dazu'}
              url={'/sub/software'}
            />
            <Tile
              title={'Tutorials'}
              imgSrc={'/limitationen.png'}
              text={'Dein Weg zum ersten Deepfake!'}
              url={'/sub/tutorials'}
            />
            <div
              className={
                'duration-400 flex w-1/2 cursor-pointer justify-center pt-4 opacity-50 transition hover:bg-heinzBlau hover:opacity-100 hover:opacity-100'
              }
            >
              <div className={'flex-column'} onClick={() => {
                router.push('/sub/faq')
              }}>
                <h1 className={'justify-self-center text-3xl'}>FAQ</h1>
                <p className={'max-h-96 justify-self-center p-8 text-9xl'}>?</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
