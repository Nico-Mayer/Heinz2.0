import {motion} from 'framer-motion'
import React from 'react'
import SubHeader from "../../components/SubHeader";
import StyledText from "../../components/StyledText";
import MainHeader from "../../components/MainHeader";

function deepfakes() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main
                className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center">
                <div className={"z-10 flex flex-1 flex-col mb-3 justify-items-start justify-start"}>
                    <MainHeader title={"Deepfakes"}/>
                </div>
                <div className={"z-10 flex min-h-screen flex-1 flex-col items-center justify-center bg-heinzGrau ring-2 ring-heinzBlau/[.40] shadow-2xl"}>
                    <img className={"mt-3"} src={"/trump.png"}/>
                    <StyledText
                        text={"Ein Battle-Rap zwischen Donald Trump und Joe Biden, widersprüchliche Weihnachtsgrüße der Queen oder Donald Trump, " +
                        "der Belgien rät aus dem Pariser Klimaabkommen auszutreten [1] – alles Situationen, die für uns makaber erscheinen und nur " +
                        "schwer vorstellbar sind. Warum sollten berühmte Persönlichkeiten, wie Politiker oder Hollywood-Stars, solche Aussagen " +
                        "überhaupt treffen und ein mögliches Ende ihre Karriere riskieren? Die Antwort darauf lässt sich einfach sagen: gar nicht. " +
                        "Es handelt sich hierbei um gefälschte Medieninhalte, sogenannte Deepfakes. Anhand von Medienmaterialien wie Bildern, Videos " +
                        "oder Audioaufnahmen lassen sich gezielt Manipulationen produzieren, die vom einfachen Interessenten Daheim bis hin zum " +
                        "Deepfake-Profi erstellbar sind. Die Ergebnisse sind dabei sehr realistisch und die Fälschung mit dem bloßen Augen zum Teil " +
                        "schwer erkennbar. Plötzlich ist es möglich als außenstehende Person in rechtsradikalen Videos aufzutauchen, Politiker in " +
                        "demokratieschädlichen Hetzreden zu finden oder berühmte Hollywood-Starts in Pornofilmen anzutreffen.  Alles äußerst " +
                        "schädliche Folgen, die nicht nur das Opfer einer solchen Manipulation betrifft, sondern auch unsere Sicht auf Medieninhalte " +
                        "im Netz komplett verändert. Es stellt sich die Frage: wie funktionieren Deepfakes? Antwort: Neuronale Netze, bzw. Machine " +
                        "Learning (deutsch: maschinelles Lernen)."}/>
                    <SubHeader title={"Neuronale Netze"}/>
                    <StyledText text={"Wie der Name Deepfake bereits zu verstehen gibt, handelt es sich bei dem Wort um " +
                    "eine Zusammensetzung der beiden Wörter Deep Learning und Fake. Im Folgenden befassen wir uns nun mit den theoretischen Grundlagen " +
                    "des Deep Learnings genauer gesagt künstlichen Neuronalen Netzen."}/>
                    <img src={"/animationDF.png"}/>
                    <StyledText text={"Deep Learning gehört in der Informatik zum Bereich der Künstliche " +
                    "Intelligenz und ist wiederum ein Teilbereich des sogenannten Machine Learnings (dt. Maschinelles Lernen). Ziel des Machine Learnings, " +
                    "sowie des Deep Learnings ist, dass IT-Systeme wie Computer bzw. Maschinen im Allgemeinen genauso fähig sind zu Lernen und zu Denken wie " +
                    "wir Menschen. Beim Machine Learning erreicht man dies, indem man den Computer anhand von vorhandenen Algorithmen und Datenbeständen " +
                    "künstliches Wissen aneignet und das System durch Trainieren Muster und Lösungsmöglichkeiten entwickelt. Ein Einschreiten des Menschen " +
                    "ist hierbei nötig. [2] Statt Systeme anhand von vorhandenen Daten trainieren zu lassen, wird beim Deep Learning das menschliche Gehirn " +
                    "betrachtet. Man simuliert, anhand von künstlichen Neuronalen Netzen, das menschliche Gehirn und dessen Fähigkeit anhand von neuronalen " +
                    "Verknüpfungen eigene Schlussfolgerungen zu ziehen und eigenständig zu denken. Die Maschine geht dabei ähnlich vor wie ein Mensch es tun " +
                    "würde: betrachten, analysieren und Schlussfolgerung ziehen [3]. Große Datensätze werden schneller erfasst und analysiert als ein Mensch " +
                    "dies je tun könnte. Ziel des Deep Learnings ist es, das IT-Systeme eigene Prognosen und Entscheidungen treffen können, ohne dass ein " +
                    "Einschreiten in den Lernprozess von Nöten ist [2]"}/>
                    <img src={"/zwiebel.png"}/>
                    <StyledText
                        text={"Um die Funktionsweise eines künstlichen neuronalen Netzes (kurz KNN) besser nachvollziehen zu können und somit den gesamten " +
                        "Lernprozess, wird im Folgenden der Aufbau eines solchen künstlichen Neuronalen Netzes anhand eines Beispiels genauer betrachtet. " +
                        "Ein künstliches neuronales Netz besteht aus der Eingabeschicht, den mehreren verborgenen Schichten und der Ausgabeschicht."}/>
                    <img className={"p-4"} src={"/neuronalesNetz.png"}/>
                    <StyledText
                        text={"Ein Computer soll nun mithilfe von einem künstlichen neuronalen Netz eine handgeschriebene Zahl erkennen. Zu Beginn werden " +
                        "aus der Zahl gewisse Grundwerte entnommen und in die Eingabeschicht aufgenommen. In unserem Fall wird die handgeschriebene " +
                        "Notiz in einzelne Pixel aufgeteilt und diese in die Neuronen der Eingabeschicht geworfen. Ein Neuron enthält somit ein Pixel. " +
                        "Hier werden außerdem Grundinformationen der einzelnen Pixel identifiziert, wie beispielsweise die Erkennung von hellen oder " +
                        "dunklen Pixeln. Wie sich in der Grafik bereits erkennen lässt, sind die einzelnen Neuronen der jeweiligen Schichten miteinander " +
                        "verknüpft. Diese Verknüpfungen bzw. dessen Neuronen weisen eine sogenannte individuelle Gewichtung auf. Diese Gewichtung " +
                        "ist repräsentativ für das Endergebnis, da die Höhe bzw. Stärke der Gewichtung eine maßgebliche Entscheidung, für das Endergebnis " +
                        "trifft. Generell gilt, je höher die Gewichtung, desto repräsentativer ist die zugehörige Verbindung für das Endergebnis. Weist eine " +
                        "Gewichtung den Wert Null auf, so hat das dazugehörige Neuron keinen Einfluss auf das Endergebnis. Diese gewichteten Daten " +
                        "werden nun von der Eingabeschicht in die verborgenen Schichten weitergegeben.Die verborgenen Schichten befinden sich zwischen der " +
                        "Eingabe- und er Ausgabeschicht. Während die Eingabe- oder Ausgabeschicht aus jeweils einer Ebene besteht, gibt es bei den " +
                        "verborgenen Schichten beliebig viele Ebenen [4]. In diesen verborgenen Schichten findet der eigentliche Lern- bzw. Trainingsprozess " +
                        "statt. In unserem Beispiel lassen sich hier die Kombination von mehreren Pixeln im Verhältnis zueinander identifizieren, Kanten " +
                        "identifizieren oder mehrere Kanten nebeneinander identifizieren. Diese Informationen werden, wie bereits zuvor, individuell " +
                        "gewichtet und an die nächste Ebene weitergeleitet. Die Prozessierung der Daten in den verborgenen Schichten sind, wie der " +
                        "Name bereits zu erkennen gibt, nicht sichtbar. Ganz im Gegensatz zu der Ein- und Ausgabeschicht, wo diese erkennbar sind." +
                        "Die Ausgabeschicht ist die letzte Schicht in unserem künstlichen Neuronalen Netz und hängt unmittelbar an die letzte Ebene " +
                        "der verborgenen Schichten an [4]. Hier findet eine Berechnung des Gesamtergebnisses statt [4]. In unserem Fall werden alle " +
                        "getätigten Kombinationen identifiziert und wie der Name bereits erschließen lässt, ausgegeben. Durch die kontinuierliche " +
                        "Gewichtung, die während des ganzen Prozesses gemacht worden ist, sticht nun eine Verbindung aus unserem Neuronalen Netz besonders " +
                        "hervor. Diese Verbindung repräsentiert das Endergebnis und das IT-System weiß, dass die handgeschriebene Notiz zu Beginn die Zahl 6 ist. " +
                        "Neuronale Netze weisen unterschiedliche Strukturen, auch Topologie genannt, auf. Diese beschreibt, wie das künstliche neuronale " +
                        "Netz aufgebaut ist und wie viele Neuronen sich auf wie vielen Schichten befinden. Die bekanntesten Topologien bei neuronalen " +
                        "Netzen sind das einschichtige feedforward-Netz, das mehrschichtige feedforward-Netz und das rekurrente Netz. Bei einschichtigen " +
                        "feedforward-Netzen besteht das KNN lediglich aus einer Ausgabeschicht. Feedforward beschreibt hier die Voraussetzung, dass die " +
                        "Verbindungen eines Netzes nur in Verarbeitungsrichtung laufen darf. Das mehrschichtige feedforward-Netz besitz, wie das oben " +
                        "genannte Beispiel, mehrere verborgene Schichten zwischen der Ein- und Ausgabeschicht. Dieses Netz basiert auf der mathematischen " +
                        "Aussagenlogik XOR. Neuronen in rekurrenten Netzen basieren nicht auf dem feedforward-Prinzip und lassen sich unter anderem mit " +
                        "sich selbst verbinden. [5]"}/>
                    <img className={"p-4"} src={"/topologie.png"}/>
                    <SubHeader title={"Mathematik"}/>
                    <SubHeader title={"Einsatz neuronaler Netze bei Deepfakes"}/>
                    <StyledText text={"Bei Deepfakes wird der Prozess des Deep Learnings besonders bei der Gesichtserkennung und der Angleichung von dem " +
                    "Ausgangsgesicht an die Mimik des Zielgesichts verwendet. Deepfake-Algorithmen basieren auf der Idee von „Generative Adversarial Networks“, " +
                    "also zwei bilderzeugenden neuronalen Netzwerken, welche sich gegenüberstehen.So werden zunächst die zwei Ausgangsvideos, in ihre Einzelbilder " +
                    "zerlegt und Gesichtsmerkmale, wie Mund, Augen oder Nase, erkannt. Diese Bilder gelangen nun in einen Autoencoder, der die Daten komprimiert. " +
                    "Der Encoder basiert auf einem neuronalen Netzwerk. Dieses wird trainiert, indem die beiden Originalvideos im Encoder auseinander gebaut und " +
                    "in zwei Decodern wieder zusammengebaut werden. Jedem Decoder wird dabei ein Video bzw. ein Gesicht zugeteilt. Das neuronale Netz nimmt also " +
                    "die Bilder auseinander und versucht diese im Decoder wieder zusammenzubauen. Diese Bilder werden nun mit den Originalbildern verglichen und die " +
                    "Gewichtungen modifiziert. Der Vorgang wird nun so lange wiederholt, bis die Ausgabe der Decoder dem Ursprungsbild stark ähnelt. Dies wird auch " +
                    "Überwachtes Lernen genannt."}/>
                    <img className={"p-4"} src={"/algorithmus.png"}/>
                    <StyledText text={"Anschließend findet der eigentliche Gesichter Tausch statt, indem der Encoder des einen Gesichtes an den Decoder des anderen Gesichtes angeschlossen wird. [7]"}/>
                    <img className={"p-4"} src={"/algorithmus2.png"}/>
                    <StyledText text={"Reales Beispiel (Heinz und Teammitglied Jonas):"}/>
                    <img className={"p-4"} src={"/realesBsp.png"}/>
                    <SubHeader title={"Hardware"}/>
                    <StyledText text={"Fest steht: all diese Berechnungen für Enkodierung und Dekodiereung brauchen viel Rechenleistung. Heißt also, es steckt sehr viel Mathematik " +
                    "dahinter. Wer mehr und genaueres dazu herausfinden möchte, kann in unserem projektbericht im Kapitel \"Hardware\" mehr darüber herausfinden. Hier umreisen wir nur das wichtigste." +
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et j" +
                    "usto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy " +
                    "eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus " +
                    "est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
                    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   Duis autem vel eum iriure dolor in hendrerit in " +
                    "vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore " +
                    "te feugait nulla facilisi. Lorem ipsum dolor sit amet,"}/>
                    <SubHeader title={"Deepfakevarianten"}/>
                    <StyledText text={"Neben dem Gesichtstausch gibt es natürlich noch weitere Anwendungsmöglichkeiten."}/>
                    <img className={"p-4"} src={"/varianten.png"}/>
                    <SubHeader title={"Technische Limitationen"}/>
                    <img  className={"p-4"} src={"/limitationen.png"}/>
                </div>
            </main>
        </div>
    )
}

// @ts-ignore
export default deepfakes;