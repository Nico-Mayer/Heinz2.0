import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import Question from '../../components/Question'

function faq() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center text-center">
                <MainHeader title={'FAQ'}/>

                <div
                    className={
                        'z-10 flex min-h-screen flex-1 flex-col items-center space-y-20 bg-bgMain/40 py-10 px-8 shadow-3xl backdrop-blur-md'
                    }
                >
                    <Question text={"Deepfakes sind gefälschte Medieninhalte. Anhand von " +
                    "Medienmaterialien wie Bildern, Videos oder Audioaufnahmen lassen " +
                    "sich gezielt Manipulationen produzieren, die vom einfachen " +
                    "Interessenten Daheim bis hin zum Deepfake Profi erstellbar sind. " +
                    "Die Ergebnisse sind dabei sehr realistisch und die Fälschung mit " +
                    "dem bloßen Augen zum Teil schwer erkennbar."} faq={"1. Was sind eigentlich Deepfakes?"}/>
                    <Question
                        text={"Um eine ungefähre Einschätzung zu haben, welche Hardwareanforderungen am besten sind hilft dir vielleicht folgendes Video: (Video Hardwaretest)"}
                        faq={"2. Welche Hardware Voraussetzungen gibt es?"}/>
                    <Question
                        text={"Deepfakes sind eine neuartige Technologie. Der Begriff Deepfake wurde im Jahr 2017 das erste Mal genannt."}
                        faq={"3. Wie lange gibt es Deepfakes eigentlich schon?"}/>
                    <Question
                        text={"Die Technologie hinter Deepfakes ist das sogenannte Deep Learning. Deep Learning gehört in der Informatik zum Bereich der Künstliche Intelligenz und ist wiederum ein Teilbereich des sogenannten Machine Learnings (dt. Maschinelles Lernen). Ziel des Machine Learnings, sowie des Deep Learnings ist, dass IT-Systeme wie Computer bzw. Maschinen im Allgemeinen genauso fähig sind zu Lernen und zu Denken wie wir Menschen."}
                        faq={"4. Wie funktionieren Deepfakes?"}/>
                    <Question text={<p>
                        Die Nutzung von DeepFaceLab ist kostenlos und einfach über
                        folgenden Link zu erhalten:
                        <br/>
                        <br/>
                        <a
                            className="underline text-heinzOrange bg-white p-2"
                            href="https://github.com/iperov/DeepFaceLab#releases"
                        >
                            Github: DeepFaceLab
                        </a>
                        <br/>
                        <br/>
                        Google Colab ist bis zu einer Trainingszeit von 12 Stunden
                        kostenlos nutzbar.
                    </p>} faq={"5. Muss ich für DeepFaceLab oder Google Colab bezahlen?"}/>
                    <Question text={<p>
                        Eine Grafikarte auch GPU (Graphics Processing Unit) sind auf bestimte mathematische Verfahren, wie Vektor- und Matrizen-Berechnungen, spezialisierter Prozessor. Solche Rechnungen werden vor allem benötigt, wenn es um Grafik beispielsweis in Spielen geht. <a className={'source'}
                                                                                                                                                                                                                                                                                          id={"srcRef13"}
                                                                                                                                                                                                                                                                                          href={"#linkSrc13"}>[13]</a>
                    </p>} faq={"6. Was ist eine GPU / Grafikkarte?"}/>
                    <SubHeader title={'Quellen'}/>
                    <a className={"source"} id={"linkSrc14"} target="_blank"
                       href={"https://books.google.de/books?id=6aepodiiEK0C&lpg=PA1&ots=OI0f2kwksV&dq=was%20ist%20eine%20grafikkarte&lr&hl=de&pg=PA7#v=onepage&q&f=false"}>[13]
                        Nischwitz, Alfred, et al.Computergrafik und Bildverarbeitung: Alles für Studium und Praxis - Bildverarbeitungswerkzeuge, Beispiel-Software und interaktive Vorlesungen, Deutschland,Vieweg+Teubner Verlag, 2007. [Online]. Zugriff am: 27. Juni 2022.</a>
                </div>
            </main>
        </div>
    )
}

export default faq
