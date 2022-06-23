import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import SoftwareArticle from '../../components/SoftwareArticle'

function software() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center text-center">
                <MainHeader title={'Software'}/>
                <div
                    className={
                        'z-10 flex min-h-screen flex-1 flex-col  bg-bgMain/50 px-8 py-10 shadow-3xl  backdrop-blur-md'
                    }
                >
                    <SoftwareArticle
                        title={'DeepFaceLab'}
                        text={
                            <p>
                                Als bekannteste Technologie, mit der man Deepfakes erstellen
                                kann, bietet sich DeepFaceLab an. Im Readme des
                                Github-Repositorys wird behauptet, dass fast alle existierenden
                                Deepfake-Videos mit DFL erstellt wurden, und wird auch von
                                vielen in der Nische bekannten YouTube-Kanälen verwendet. Mit
                                DFL kann man nicht nur Gesichter, sondern auch ganze Köpfe
                                austauschen oder ausschließlich die Lippen manipulieren. <a className={'source'}
                                                                                            id={"srcRef7"}
                                                                                            href={"#linkSrc7"}>[7]</a>
                            </p>
                        }
                        linkDescription={<p>Hier ist der Link zum Github-Repository:</p>}
                        link={'https://github.com/iperov/DeepFaceLab'}
                    />
                    <SoftwareArticle
                        title={'Google Colab'}
                        text={
                            <p>
                                Im Zuge unserer Forschung haben wir uns darüber Gedanken
                                gemacht, inwieweit das Projekt für alle Projektteilnehmer zu
                                gleichen Bedingungen durchführbar ist. Es ist generell bekannt,
                                dass das Trainieren von neuronalen Netzwerken mit hohen
                                Hardwareanforderungen einhergeht. Die wohl wichtigste Komponente
                                ist wohl eine gute Grafikkarte, welche auch bestenfalls in einem
                                Stand PC eingebaut ist. Da nicht jeder von uns einen
                                hochwertigen Gaming-PC besitzt, mussten wir uns Gedanken darüber
                                machen, wie unser Projekt auch ohne teure Hardware durchführbar
                                sein kann.
                                <br/>
                                Die Antwort dazu war Google Colab. Google Colab, auch
                                Colaboratory genannt, ist ein zum Teil kostenfreier
                                Cloud-Dienst, welcher von Google angeboten wird. Diese Plattform
                                ermöglicht es Machine Learning Modelle direkt online zu
                                trainieren. Sie basiert auf der Jupyter Notebook-Umgebung. <a className={'source'}
                                                                                              id={"srcRef8"}
                                                                                              href={"#linkSrc8"}>[8]</a>
                                Ein Jupyter Notebook ist eine webbasierte Client-Anwendung, die
                                sich über handelsübliche Browser starten lässt. Die
                                Client-Server-Anwendung wurde 2015 von der
                                Non-Profit-Organisation Project Jupyter veröffentlicht. <a className={'source'}
                                                                                           id={"srcRef9"}
                                                                                           href={"#linkSrc9"}>[9]</a> Mit
                                Jupyter Notebooks können sogenannte interaktive „Arbeitsblätter“
                                erstellt werden. Diese Notebooks enthalten Texte sowie Medien
                                wie Bilder, Grafiken und Videos. Eine direkte Ausführung des
                                Quellcodes ist auch möglich. <a className={'source'}
                                                                id={"srcRef10"}
                                                                href={"#linkSrc1"}>[10]</a>
                                <br/>
                                Vorteilhaft sind solche Notebooks auch für Personen, welche
                                wenig oder keine Programmiererfahrung vorweisen können. Viele
                                Entwickler stellen kostenfreie Notebooks für ihre Software zur
                                Verfügung und Nutzer können ohne Vorkenntnisse in einer
                                Programmiersprache komplexe Aufgaben bewältigen. Jeder, der ein
                                einfaches Google Konto besitzt, kann kostenlos auf Google Colab
                                zugreifen. Colab ist für Python konzipiert und wird vor allem
                                für maschinelles Lernen genutzt. Google stellt seine Ressourcen
                                für bis zu 12 Stunden kostenlos zur Verfügung, wobei ein
                                kostenpflichtiges Abonnement diesen Zeitraum verlängern kann.
                                Entwickler können eigene Notebooks erstellen und diese teilen.
                                Diese Notebooks können von mehreren Programmierern gleichzeitig
                                verwendet werden, was die Zusammenarbeit in Projekten
                                erleichtert. Colaboratory ist also ein guter Einstieg ins Deep
                                Learning und war für unser Projekt ein wichtiges Tool, um unsere
                                Deepfakes zu trainieren.
                            </p>
                        }
                        linkDescription={
                            <p>
                                Hier ist der Link zur offiziellen Willkomens-Seite von Colab:
                            </p>
                        }
                        link={'https://colab.research.google.com/'}
                    />
                    <SoftwareArticle
                        title={'Machine Video Editor'}
                        text={
                            <p>
                                Eines der Werkzeuge um die Erstellung von Deepfakes zu
                                optimieren stellt der Machine Video Editor (MVE) dar <a className={'source'}
                                                                                        id={"srcRef11"}
                                                                                        href={"#linkSrc11"}>[11]</a>.
                                Dieser bietet eine grafische Oberfläche für DeepFaceLab an und
                                ergänzt diese um weitere Tools wie Bild- und Video-Scraper. Der
                                Fokus liegt mehr auf der Bündelung der verschiedenen Ressourcen
                                in einem “project management”.
                                <br/>
                                Die Software ist kostenlos, aber keine Open-Source. Laut der
                                readme.md auf GitHub sind aktuell OpenSource-Projekte in MVE
                                enthalten, und eine Offenlegung des Quellcodes ist nicht
                                ausgeschlossen.
                                <br/>
                                Die Verwendung ist unter Windows und Linux möglich, vor der
                                Verwendung müssen noch einige externe Abhängigkeiten installiert
                                werden. Diese betreffen vor allem die CUDA-Schnittstelle als
                                auch eine Python-Umgebung. Viele dieser Packages treten auch in
                                anderen Deepfake-Anwendungen in Erscheinung und sind bekannt.
                                Die Besonderheit von MVE ist neben der Ressourcenbündelung die
                                Analyse von bereits extrahierten Facesets. <a className={'source'}
                                                                              id={"srcRef12"}
                                                                              href={"#linkSrc12"}>[12]</a>.
                            </p>
                        }
                        linkDescription={<p>Hier ist der Link zum Github-Repository:</p>}
                        link={'https://github.com/MachineEditor/MachineVideoEditor'}
                    />
                    <SubHeader title={'Quellen'}/>
                    <a className={"source"} id={"linkSrc7"} target="_blank"
                       href={"https://github.com/iperov/DeepFaceLab"}>[7]
                        GitHub, iperov/DeepFaceLab: DeepFaceLab is the leading software for creating deepfakes.
                        [Online]. Zugriff
                        am: 19. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc8"} target="_blank"
                       href={"https://www.informatique-mania.com/de/linformatique/google-colaboratory/"}>[8]
                        admin, „Google Colaboratory Was ist das, wozu dient es und wie können wir von Colab
                        profitieren?“, Informatique Mania, 31. Dez. 2020, 2020. [Online]. Zugriff am: 22. Februar
                        2022.</a>
                    <a className={"source"} id={"linkSrc9"} target="_blank"
                       href={"https://www.ionos.de/digitalguide/websites/web-entwicklung/jupyter-notebook/"}>[9]
                        IONOS Digitalguide, Jupyter Notebook: Webdokumente für Datenanalyse, Live-Coding und mehr.
                        [Online]. Zugriff am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc10"} target="_blank"
                       href={"https://www2.tuhh.de/zll/freischwimmer/jupyter-notebook/"}>[10]
                        Jupyter Notebook – Digitaler Freischwimmer. [Online]. Zugriff am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc11"} target="_blank"
                       href={"https://github.com/MachineEditor/MachineVideoEditor"}>[11]
                        GitHub, MachineEditor/MachineVideoEditor: This repository does not contain code, its purpose it
                        for issue tracking and wiki. [Online]. Zugriff am: 23. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc12"} target="_blank"
                       href={"https://github.com/MachineEditor/MachineVideoEditor/wiki/Set-Creator"}>[12]
                        GitHub, MachineEditor/MachineVideoEditor: This repository does not contain code, its purpose it
                        for issue tracking and wiki. [Online]. Zugriff am: 23. Februar 2022.</a>
                </div>
            </main>
        </div>
    )
}

export default software
