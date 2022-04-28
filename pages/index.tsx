import type {NextPage} from 'next'
import Head from 'next/head'
import NavigationBar from "./LandingPage/navigationBar";
import BasicLogo from "./LandingPage/basicLogo";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Heinz 2.0</title>
                <link rel="icon" href="/heinz_logo_blau.ico"/>
            </Head>
            <NavigationBar/>
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-[url('/bkg_wireframe_transparent.png')] bg-origin-border bg-center bg-no-repeat bg-cover">
                <BasicLogo/>
                <h1 className="text-6xl font-bold">
                    Welcome to{' '}
                    <a className="text-heinzBlue" href="https://nextjs.org">
                        Heinz 2.0
                    </a>
                </h1>
            </main>
        </div>
    )
}

export default Home
