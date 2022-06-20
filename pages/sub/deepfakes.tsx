import React from 'react'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import MainHeader from '../../components/MainHeader'

function deepfakes() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center text-center">
                <MainHeader title={'Deepfakes'}/>

                <div
                    className={
                        'z-10 flex min-h-screen flex-1 flex-col items-center justify-center bg-bgMain/40 py-10 px-8 shadow-3xl  backdrop-blur-md'
                    }
                >
                    <video width="750" height="500" controls >
                        <source src="/videos/trumpVideo.mp4" type="video/mp4"/>
                    </video>
                    <StyledText
                        text={
                            <p>
                                Ein Battle-Rap zwischen Donald Trump und Joe Biden,
                                widersprüchliche Weihnachtsgrüße der Queen oder Donald Trump,
                                der Belgien rät aus dem Pariser Klimaabkommen auszutreten <a className={'source'}
                                                                                             id={"srcRef1"}
                                                                                             href={"#linkSrc1"}>[1]</a> –
                                alles Situationen, die für uns makaber erscheinen und nur schwer
                                vorstellbar sind. Warum sollten berühmte Persönlichkeiten, wie
                                Politiker oder Hollywood-Stars, solche Aussagen überhaupt
                                treffen und ein mögliches Ende ihre Karriere riskieren? <br/>
                                Die Antwort darauf lässt sich einfach sagen: gar nicht. Es
                                handelt sich hierbei um gefälschte Medieninhalte, sogenannte
                                Deepfakes. Anhand von Medienmaterialien wie Bildern, Videos oder
                                Audioaufnahmen lassen sich gezielt Manipulationen produzieren,
                                die vom einfachen Interessenten Daheim bis hin zum
                                Deepfake-Profi erstellbar sind. Die Ergebnisse sind dabei sehr
                                realistisch und die Fälschung mit dem bloßen Augen zum Teil
                                schwer erkennbar. Plötzlich ist es möglich als außenstehende
                                Person in rechtsradikalen Videos aufzutauchen, Politiker in
                                demokratieschädlichen Hetzreden zu finden oder berühmte
                                Hollywood-Starts in Pornofilmen anzutreffen. Alles äußerst
                                schädliche Folgen, die nicht nur das Opfer einer solchen
                                Manipulation betrifft, sondern auch unsere Sicht auf
                                Medieninhalte im Netz komplett verändert. <br/>
                                <br/>
                                Es stellt sich die Frage: wie funktionieren Deepfakes? <br/>
                                Antwort: Neuronale Netze, bzw. Machine Learning (deutsch:
                                maschinelles Lernen).
                            </p>
                        }
                    />
                    <SubHeader title={'Neuronale Netze'}/>
                    <StyledText
                        text={
                            <p className={'m-5 whitespace-pre-wrap text-left text-white'}>
                                Wie der Name Deepfake bereits zu verstehen gibt, handelt es sich
                                bei dem Wort um eine Zusammensetzung der beiden Wörter Deep
                                Learning und Fake. Im Folgenden befassen wir uns nun mit den
                                theoretischen Grundlagen des Deep Learnings, genauer gesagt,
                                künstlichen Neuronalen Netzen.
                            </p>
                        }
                    />
                    <img src={'/animationDF.png'}/>
                    <StyledText
                        text={
                            <p>
                                Deep Learning gehört in der Informatik zum Bereich der
                                Künstlichen Intelligenz und ist wiederum ein Teilbereich des
                                sogenannten Machine Learnings (dt. Maschinelles Lernen). <br/>
                                Ziel des Machine Learnings, sowie des Deep Learnings ist, dass
                                IT-Systeme wie Computer bzw. Maschinen im Allgemeinen genauso
                                fähig sind zu Lernen und zu Denken wie wir Menschen. Beim
                                Machine Learning erreicht man dies, indem man den Computer
                                anhand von vorhandenen Algorithmen und Datenbeständen
                                künstliches Wissen aneignet und das System durch Trainieren
                                Muster und Lösungsmöglichkeiten entwickelt. Ein Einschreiten des
                                Menschen ist hierbei nötig. <a className={'source'} id={"srcRef2"}
                                                               href={"#linkSrc2"}>[2]</a> <br/>
                                Statt Systeme anhand von vorhandenen Daten trainieren zu lassen,
                                wird beim Deep Learning das menschliche Gehirn betrachtet. Man
                                simuliert, anhand von künstlichen Neuronalen Netzen, das
                                menschliche Gehirn und dessen Fähigkeit anhand von neuronalen
                                Verknüpfungen eigene Schlussfolgerungen zu ziehen und
                                eigenständig zu denken. Die Maschine geht dabei ähnlich vor wie
                                ein Mensch es tun würde: betrachten, analysieren und
                                Schlussfolgerung ziehen <a className={'source'} id={"srcRef3"}
                                                           href={"#linkSrc3"}>[3]</a>. <br/>
                                Große Datensätze werden schneller erfasst und analysiert als ein
                                Mensch dies je tun könnte. Ziel des Deep Learnings ist es, das
                                IT-Systeme eigene Prognosen und Entscheidungen treffen können,
                                ohne dass ein Einschreiten in den Lernprozess von Nöten ist <a className={'source'}
                                                                                               id={"srcRef2"}
                                                                                               href={"#linkSrc2"}>[2]</a>
                            </p>
                        }
                    />
                    <img src={'/zwiebel.png'}/>
                    <StyledText
                        text={
                            <p>
                                Um die Funktionsweise eines künstlichen neuronalen Netzes (kurz
                                KNN) besser nachvollziehen zu können und somit den gesamten
                                Lernprozess, wird im Folgenden der Aufbau eines solchen
                                künstlichen Neuronalen Netzes anhand eines Beispiels genauer
                                betrachtet. Ein künstliches neuronales Netz besteht aus der
                                Eingabeschicht, den mehreren verborgenen Schichten und der
                                Ausgabeschicht.
                            </p>
                        }
                    />
                    <img className={'p-4'} src={'/neuronalesNetz.png'}/>
                    <StyledText
                        text={
                            <p>
                                Ein Computer soll nun mithilfe von einem künstlichen neuronalen
                                Netz eine handgeschriebene Zahl erkennen. Zu Beginn werden aus
                                der Zahl gewisse Grundwerte entnommen und in die{' '}
                                <span className={'text-lime-400'}>Eingabeschicht</span>{' '}
                                aufgenommen. In unserem Fall wird die handgeschriebene Notiz in
                                einzelne Pixel aufgeteilt und diese in die Neuronen der{' '}
                                <span className={'text-lime-400'}>Eingabeschicht</span>{' '}
                                geworfen. <br/>
                                Ein Neuron enthält somit ein Pixel.
                                <br/>
                                Hier werden außerdem Grundinformationen der einzelnen Pixel
                                identifiziert, wie beispielsweise die Erkennung von hellen oder
                                dunklen Pixeln. Wie sich in der Grafik bereits erkennen lässt,
                                sind die einzelnen Neuronen der jeweiligen Schichten miteinander
                                verknüpft. Diese Verknüpfungen bzw. dessen Neuronen weisen eine
                                sogenannte individuelle Gewichtung auf. Diese Gewichtung ist
                                repräsentativ für das Endergebnis, da die Höhe bzw. Stärke der
                                Gewichtung eine maßgebliche Entscheidung, für das Endergebnis
                                trifft. <br/>
                                Generell gilt, je höher die Gewichtung, desto repräsentativer
                                ist die zugehörige Verbindung für das Endergebnis. Weist eine
                                Gewichtung den Wert Null auf, so hat das dazugehörige Neuron
                                keinen Einfluss auf das Endergebnis. Diese gewichteten Daten
                                werden nun von der{' '}
                                <span className={'text-lime-400'}>Eingabeschicht</span> in die{' '}
                                <span className={'text-sky-400'}>verborgenen Schichten</span>{' '}
                                weitergegeben.
                                <br/>
                                Die{' '}
                                <span className={'text-sky-400'}>
                  verborgenen Schichten
                </span>{' '}
                                befinden sich zwischen der{' '}
                                <span className={'text-lime-400'}>Eingabe-</span> und der{' '}
                                <span className={'text-yellow-300'}>Ausgabeschicht</span>.
                                Während die <span className={'text-lime-400'}>Eingabe-</span>{' '}
                                oder <span className={'text-yellow-300'}>Ausgabeschicht</span>{' '}
                                aus jeweils einer Ebene besteht, gibt es bei den{' '}
                                <span className={'text-sky-400'}>
                  verborgenen Schichten
                </span>{' '}
                                beliebig viele Ebenen <a className={'source'} id={"srcRef4"}
                                                         href={"#linkSrc4"}>[4]</a>. In diesen{' '}
                                <span className={'text-sky-400'}>verborgenen Schichten</span>{' '}
                                findet der eigentliche Lern- bzw. Trainingsprozess statt. <br/>
                                In unserem Beispiel lassen sich hier die Kombination von
                                mehreren Pixeln im Verhältnis zueinander identifizieren, Kanten
                                identifizieren oder mehrere Kanten nebeneinander identifizieren.
                                Diese Informationen werden, wie bereits zuvor, individuell
                                gewichtet und an die nächste Ebene weitergeleitet. Die
                                Prozessierung der Daten in den verborgenen Schichten sind, wie
                                der Name bereits zu erkennen gibt, nicht sichtbar. Ganz im
                                Gegensatz zu der <span className={'text-lime-400'}>
                  Ein-
                </span>{' '}
                                und <span className={'text-yellow-300'}>Ausgabeschicht</span>,
                                wo diese erkennbar sind.
                                <br/>
                                Die <span className={'text-yellow-300'}>
                  Ausgabeschicht
                </span>{' '}
                                ist die letzte Schicht in unserem künstlichen Neuronalen Netz
                                und hängt unmittelbar an die letzte Ebene der verborgenen
                                Schichten an <a className={'source'} id={"srcRef4"}
                                                href={"#linkSrc4"}>[4]</a>. Hier findet eine Berechnung des
                                Gesamtergebnisses statt <a className={'source'} id={"srcRef4"}
                                                           href={"#linkSrc4"}>[4]</a>. In unserem Fall werden alle
                                getätigten Kombinationen identifiziert und wie der Name bereits
                                erschließen lässt, ausgegeben. Durch die kontinuierliche
                                Gewichtung, die während des ganzen Prozesses gemacht worden ist,
                                sticht nun eine Verbindung aus unserem Neuronalen Netz besonders
                                hervor. <br/>
                                Diese Verbindung repräsentiert das Endergebnis und das IT-System
                                weiß, dass die handgeschriebene Notiz zu Beginn die Zahl 6 ist.
                            </p>
                        }
                    />
                    <SubHeader title={'Topologien neuronaler Netze'}/>
                    <StyledText
                        text={
                            <p>
                                Neuronale Netze weisen unterschiedliche Strukturen, auch
                                Topologie genannt, auf. Diese beschreibt, wie das künstliche
                                neuronale Netz aufgebaut ist und wie viele Neuronen sich auf wie
                                vielen Schichten befinden.{' '}
                                <span className={'text-heinzBlau'}>
                  Die bekanntesten Topologien bei neuronalen Netzen sind das
                  einschichtige Feedforward-Netz, das mehrschichtige
                  Feedforward-Netz und das rekurrente Netz.
                </span>{' '}
                                <br/>
                                Bei einschichtigen feedforward-Netzen besteht das KNN lediglich
                                aus einer Ausgabeschicht. Feedforward beschreibt hier die
                                Voraussetzung, dass die Verbindungen eines Netzes nur in
                                Verarbeitungsrichtung laufen darf. Das mehrschichtige
                                feedforward-Netz besitz, wie das oben genannte Beispiel, mehrere
                                verborgene Schichten zwischen der Ein- und Ausgabeschicht.
                                Dieses Netz basiert auf der mathematischen Aussagenlogik XOR.
                                Neuronen in rekurrenten Netzen basieren nicht auf dem
                                feedforward-Prinzip und lassen sich unter anderem mit sich
                                selbst verbinden. <a className={'source'} id={"srcRef5"}
                                                     href={"#linkSrc5"}>[5]</a>
                            </p>
                        }
                    />
                    <img className={'p-4'} src={'/topologie.png'}/>
                    <SubHeader title={'Mathematik'}/>
                    <SubHeader title={'Einsatz neuronaler Netze bei Deepfakes'}/>
                    <StyledText
                        text={
                            <p>
                                Bei Deepfakes wird der Prozess des Deep Learnings besonders bei
                                der Gesichtserkennung und der Angleichung von dem
                                Ausgangsgesicht an die Mimik des Zielgesichts verwendet.
                                Deepfake-Algorithmen basieren auf der Idee von{' '}
                                <span className={'text-heinzBlau'}>
                  „Generative Adversarial Networks“
                </span>
                                , also zwei bilderzeugenden neuronalen Netzwerken, welche sich
                                gegenüberstehen.
                                <br/>
                                So werden zunächst die zwei Ausgangsvideos, in ihre Einzelbilder
                                zerlegt und Gesichtsmerkmale, wie Mund, Augen oder Nase,
                                erkannt. Diese Bilder gelangen nun in einen Autoencoder, der die
                                Daten komprimiert. Der Encoder basiert auf einem neuronalen
                                Netzwerk. Dieses wird trainiert, indem die beiden Originalvideos
                                im Encoder auseinander gebaut und in zwei Decodern wieder
                                zusammengebaut werden. Jedem Decoder wird dabei ein Video bzw.
                                ein Gesicht zugeteilt. Das neuronale Netz nimmt also die Bilder
                                auseinander und versucht diese im Decoder wieder
                                zusammenzubauen. Diese Bilder werden nun mit den Originalbildern
                                verglichen und die Gewichtungen modifiziert. <br/>
                                Der Vorgang wird nun so lange wiederholt, bis die Ausgabe der
                                Decoder dem Ursprungsbild stark ähnelt. Dies wird auch
                                Überwachtes Lernen genannt.
                            </p>
                        }
                    />
                    <img className={'p-4'} src={'/algorithmus.png'}/>
                    <StyledText
                        text={
                            <p>
                                Anschließend findet der eigentliche Gesichter Tausch statt,
                                indem der Encoder des einen Gesichtes an den Decoder des anderen
                                Gesichtes angeschlossen wird. <a className={'source'} id={"srcRef6"}
                                                                 href={"#linkSrc6"}>[6]</a>
                            </p>
                        }
                    />
                    <img className={'p-4'} src={'/algorithmus2.png'}/>
                    <StyledText
                        text={<p>Reales Beispiel (Heinz und Teammitglied Jonas):</p>}
                    />
                    <img className={'p-4'} src={'/realesBsp.png'}/>
                    <SubHeader title={'Hardware'}/>
                    <StyledText
                        text={
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                                hendrerit in vulputate velit esse molestie consequat, vel illum
                                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                                augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                consequat. Duis autem vel eum iriure dolor in hendrerit in
                                vulputate velit esse molestie consequat, vel illum dolore eu
                                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                                dignissim qui blandit praesent luptatum zzril delenit augue duis
                                dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                                nobis eleifend option congue nihil imperdiet doming id quod
                                mazim placerat facer
                            </p>
                        }
                    />
                    <SubHeader title={'Deepfakevarianten'}/>
                    <StyledText
                        text={
                            <p>
                                Neben dem Gesichtstausch gibt es natürlich noch weitere
                                Anwendungsmöglichkeiten.
                            </p>
                        }
                    />
                    <img className={'p-4'} src={'/varianten.png'}/>
                    <SubHeader title={'Technische Limitationen'}/>
                    <img className={'p-4'} src={'/limitationen.png'}/>
                    <SubHeader title={'Quellen'}/>
                    <a className={"source"} id={"linkSrc1"} target="_blank"
                       href={"https://www.politico.eu/article/spa-donald-trump-belgium-paris-climate-agreement-belgian-socialist-party-circulates-deep-fake-trump-video/"}>[1]
                        Hans von der Burchard, „Belgian socialist party circulates ‘deep fake’ Donald Trump video“,
                        POLITICO, 21. Mai 2018, 2018. [Online]. Zugriff am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc2"} target="_blank"
                       href={"https://www.bigdata-insider.de/was-ist-machine-learning-a-592092/#:~:text=Machine%20Learning%20ist%20ein%20Teilbereich,k%C3%BCnstliches%20Wissen%20aus%20Erfahrungen%20generiert"}>[2]
                        S. Luber, „Was ist Machine Learning?“, BigData-Insider, 1. Sep. 2016, 2016. [Online]. Zugriff
                        am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc3"} target="_blank"
                       href={"https://news.microsoft.com/de-de/microsoft-erklaert-was-ist-deep-learning-definition-funktionen-von-dl/"}>[3]
                        News Center Microsoft Deutschland, Microsoft erklärt: Was ist Deep Learning? Definition &
                        Funktionen von DL | News Center Microsoft. [Online]. Zugriff am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc4"} target="_blank"
                       href={"https://datasolut.com/neuronale-netzwerke-einfuehrung/"}>[4] L. Wuttke, „Künstliche
                        Neuronale Netzwerke: Definition, Einführung, Arten und Funktion“, datasolut GmbH, 9. Dez. 2020,
                        2020. [Online]. Zugriff am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc5"} target="_blank"
                       href={"https://de.wikipedia.org/w/index.php?title=Künstliches_neuronales_Netz&oldid=220294159"}>[5]
                        Wikipedia, Künstliches neuronales Netz. [Online]. Zugriff am: 22. Februar 2022.</a>
                    <a className={"source"} id={"linkSrc6"} target="_blank"
                       href={"https://de.wikipedia.org/w/index.php?title=DeepFaceLab&oldid=216610533"}>[6] Wikipedia,
                        DeepFaceLab. [Online]. Zugriff am: 22. Februar 2022.</a>
                </div>
            </main>
        </div>
    )
}

// @ts-ignore
export default deepfakes
