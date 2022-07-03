import type {NextPage} from 'next'
import Head from 'next/head'
import {motion} from 'framer-motion'
import Tile from "../components/Tile";

const Home: NextPage = () => {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <Head>
                <title>Heinz 2.0</title>
                <link rel="icon" href="/favicon.ico"/>
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
                            Coming Soon...
                        </h1>
                    </motion.div>
                    <div
                        className={"z-10 flex bg-bgMain/40 shadow-3xl backdrop-blur-md flex-wrap h-min mt-12 justify-center "}>

                        <Tile title={"Deepfakes"}
                              imgSrc={"/realesBsp.png"}
                              text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        <Tile title={"About Us"}
                              imgSrc={"/abouUsThumbnail.png"}
                              text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        <Tile title={"Heinz 2.0"}
                              imgSrc={"/logo.png"}
                              text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        <Tile title={"Software"}
                              imgSrc={"/vorschaufenster.png"}
                              text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        <Tile title={"Tutorials"}
                              imgSrc={"/limitationen.png"}
                              text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        <div
                            className={"flex opacity-50 transition duration-400 hover:opacity-100 hover:opacity-100 hover:bg-heinzBlau w-1/2 justify-center pt-4"}>
                            <div className={"flex-column"}>
                                <h1 className={"justify-self-center text-3xl"}>FAQ</h1>
                                <p className={"max-h-96 justify-self-center p-8 text-9xl"}>?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
