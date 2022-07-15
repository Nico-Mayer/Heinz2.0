import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import {Span} from 'next/dist/trace'
import Tile from "../../components/Tile";
import router from "next/router";

function tutorials() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
                <MainHeader title={'Tutorials'}/>
                <div
                    className={
                        'z-10 flex min-h-screen flex-1 flex-col items-center justify-center bg-bgMain/40 py-10 px-8 shadow-2xl  backdrop-blur-md'
                    }
                >
                    <StyledText text={<p>Zunächst einmal braucht man für ein Deepfake geeignetes Videomaterial.Eine Anleitung hierzu findet ihr hier:</p>}/>
                    <div
                        className={
                            'z-10 mt-12 flex h-min flex-wrap justify-center bg-bgMain/40 shadow-3xl backdrop-blur-md '
                        }
                    >
                        <div
                            className={
                                'duration-400 flex cursor-pointer justify-center pt-4 opacity-50 transition hover:bg-heinzBlau hover:opacity-100 hover:opacity-100'
                            }
                        >
                            <div className={'flex-column'} onClick={() => {
                                router.push('/sub/videoaufnahmen')
                            }}>
                                <h1 className={'justify-self-center text-3xl text-white'}>Videoaufnahmen</h1>
                                <img className="max-h-72 justify-self-center p-2" src={'/videothumbnail.png'} />
                            </div>
                        </div>
                    </div>
                    <StyledText text={<p>Wenn man nun das Videomaterial hat, kann man endlich loslegen! Deine zur verfügungstehende Hardware bestimmt, wie du am Besten vorgehen solltest.</p>}/>
                    <SubHeader title={'Welche Hardware steht zur Verfügung?'}/>
                    <img className={'pl-20 pr-20'} src={'/welchestutorial.png'}/>
                    <div
                        className={
                            'z-10 mt-12 flex h-min flex-wrap justify-center bg-bgMain/40 shadow-3xl backdrop-blur-md '
                        }
                    >
                        <Tile
                            title={'DeepFaceLab'}
                            imgSrc={'/realesBsp.png'}
                            text={'Deepfakes lokal am eigenen Rechner erstellen'}
                            url={'/sub/deepfacelab'}
                        />
                        <Tile
                            title={'DeepFaceCoLab'}
                            imgSrc={'/limitationen.png'}
                            text={'GoogleColab als alternative Vorgehensweise, falls man keine GPU hat'}
                            url={'/sub/googlecolab'}
                        />
                        <Tile
                            title={'DeepFaceLive'}
                            imgSrc={'/heinzxseg.png'}
                            text={'Deepfakes live!'}
                            url={'/sub/deepfacelive'}
                        />
                    </div>
                    <SubHeader title={'Quellen'}/>
                    <a className={"source"} id={"linkSrc13"} target="_blank"
                       href={"https://mrdeepfakes.com/forums/thread-guide-deepfacelab-2-0-guide"}>[13]
                        [GUIDE] - DeepFaceLab 2.0 Guide. [Online]. Zugriff am: 20. Februar 2022.</a>
                </div>
            </main>
        </div>
    )
}

export default tutorials
