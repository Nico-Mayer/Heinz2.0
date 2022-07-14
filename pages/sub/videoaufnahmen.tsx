import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import {Span} from 'next/dist/trace'
import Tile from "../../components/Tile";

function videoaufnahmen() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
                <MainHeader title={'Videoaufnahmen'}/>
                <div
                    className={
                        'z-10 flex min-h-screen flex-1 flex-col items-center justify-center bg-bgMain/40 py-10 px-8 shadow-2xl  backdrop-blur-md'
                    }
                >
                    <img
                        className={'p-8'}
                        src={'/videoaufnahmen2.png'}
                    />
                    <StyledText
                        text={
                            <p>
                                Basis eines jeden Deepfakes sind zunächst einmal Medienmaterialien. Diese können aus Bildern, Videos oder Audiomaterial bestehen. Da wir unsere Deepfakes auf Videoaufnahmen spezialisiert haben, war es für uns nun essenziell gutes Videomaterial zu bekommen, insbesondere von Heinz Brünig, dem Star unseres Projekts. Grundsätzlich lässt sich sagen, dass wir bei Deepfakes die auf Videos basieren 2 Videos brauchen – eins von Heinz Brünig, also der Person anhand derer ein Deepfake erstellt werden soll, und einer zweiten Person, die das Gesicht von Heinz Brünig am Ende aufgelegt bekommt. Speziell das erste Video von der Ausgangsperson ist dabei sehr wichtig. Aber wieso sind diese Videoaufnahmen überhaupt wichtig und was haben wir bei unseren Aufnahmen beachtet?
                                <br/>
                                Zunächst einmal ist es wichtig zu erwähnen, dass die Qualität des Ausgangsmaterials, also den Videoaufnahmen, Einfluss auf die Qualität bzw. das Ergebnis eines Deepfakes hat. Je besser die Aufnahmen der Person sind anhand derer ein Deepfake erstellt werden soll, desto weniger wird eine Fälschung erkannt. Aber was machen denn nun gute Videoaufnahmen aus? Hier findet ihr die wichtigsten Aspekte, die wir beim Filmen unserer Ausgangsvideos beachtet haben:
                                <br/>
                            </p>
                        }
                    />
                    <StyledText text={<h5 className={'text-heinzBlau'}>
                        1. Verschiedene Winkel
                    </h5>}/>
                    <StyledText
                        text={
                            <p>
                                Ein Aspekt, den man bei der Erstellung von Videomaterial beachten sollte, ist es, das Gesicht der Person, in unserem Falle selbstverständlich Heinz Brünig, aus verschiedenen Winkeln zu filmen. Somit kriegt man nicht nur einen Blick auf die Frontansicht des Gesichts, sondern einen Gesamtblick über den ganzen Kopf und dessen Auffälligkeiten. Die Struktur des Gesicht wird deutlicher, Falten, Poren und allgemeine Änderungen, die sich bei Bewegungen im Gesicht hervorbringen, sind nun zu erkennen. Angenommen man beachtet die Bewegungen des Kopfes bei der Videoaufnahme nicht und nimmt nur aus einer Frontalsicht auf, so hat dies direkte Folgen auf das Ergebnis. Sollte sich nun die Person, an der das Gesicht von Heinz Brünig „aufgelegt“ werden soll, bewegen, sprich Kopf hoch, runter und seitlich, verschiebt sich die Maske (Heinz Brünigs Gesicht) auf unnatürliche Weise und nimmt einen verschwommenen Eindruck ein. Eine Fälschung ist somit sofort zu erkennen und die Qualität sinkt. Filmt man allerdings in den Videoaufnahmen den Kopf aus verschiedenen Winkeln und dreht nun bei dem fertigen Deepfake das Gesicht, stellen diese Winkel keine Probleme mehr dar. Da diese bereits im Ausgangsvideo aufgenommen worden sind und das Deepfake auf Basis dieser Videos entstanden ist, sind die Bewegungen daher schon bekannt und können berücksichtigt werden.
                                <br/>
                                Allgemein sollten aus folgenden Winkeln gefilmt werden:<br/>
                                - Frontalansicht bzw. -perspektive<br/>
                                - Froschansicht bzw. -perspektive<br/>
                                - Vogelansicht bzw. -perspektive<br/>
                                - Seitliche Ansichten<br/>
                                Diese Bewegungen sollten am besten ineinander übergehen.<br/>

                            </p>
                        }
                    />
                    <video className={"mb-5"} width="750" height="500" controls>
                        <source src="/videos/Winkel.mp4" type="video/mp4"/>
                    </video>
                    <StyledText text={<h5 className={'text-heinzBlau'}>
                        2. Verschiedene Mimiken
                    </h5>}/>
                    <StyledText
                        text={
                            <p>
                                Ein weiterer Punkt, den man nicht außer Acht legen sollte, ist das Filmen verschiedener Mimiken. Wird von der Person auf der das Deepfake basiert nur Aufnahmen gemacht, in denen starre bzw. nicht viele Mimiken auftauchen, so wirkt das Endergebnis unnatürlicher und die Gesichtszüge beim Deepfake nicht flüssig. Ein starres Deepfake entwickelt sich, unabhängig davon welche Gesichtszüge die Person unter der erzeugten Maske zeigt. Es herrscht also dieselbe Faustregel wie in dem vorherigen Punkt, je mehr Mimiken ich im Ausgangsmaterial habe, desto besser ist das Ergebnis des Deepfakes und die Maske kann sich besser an die Person anpassen.
                                <br/>
                                Allgemein sollten folgende Mimiken und der wechsel zwischen diesen berücksichtigt werden:<br/>
                                - Neutral<br/>
                                - Wütend<br/>
                                - Lachend<br/>
                                - Schreiend<br/>
                                - Verkniffen<br/>
                            </p>
                        }
                    />
                    <video className={"mb-5"} width="750" height="500" controls>
                        <source src="/videos/Mimik.mp4" type="video/mp4"/>
                    </video>
                    <StyledText text={<h5 className={'text-heinzBlau'}>
                        3. Verschiedene. Beleuchtung
                    </h5>}/>
                    <StyledText
                        text={
                            <p>
                                Letzter und auf den ersten Blick wahrscheinlich auffälligster Punkt, der beachtet werden sollte, ist die Beleuchtung beim Filmen. Man sollte versuchen die Aufnahmen aus möglichst unterschiedlichen Lichtquellen zu filmen, da man nicht sicher sein kann, wie die Lichtverhältnisse des zweiten Videos sind. Zumindest war dies bei uns der Fall. Sollte das erste Video eine viel zu dunkle Belichtung haben und die des zweiten Videos eine Hellere, oder umgekehrt, so sind die Lichtverhältnisse so unterschiedlich, dass eine Fälschung sofort erkannt wird. Die Lichtquelle sollte bei beiden Videos möglichst gleich bzw. ähnlich sein, um u. A. die Übergänge der Maske natürlicher zu gestalten. Selbstverständlich können diese Übergänge auch im Nachhinein angepasst werden, allerdings erspart man sich so Arbeit.
                                <br/>
                                - Allgemein können folgende Belichtungsquellen eingesetzt bzw. beachtet werden:<br/>
                                - Natürliches Licht (Sonne)<br/>
                                - Künstliches Licht (Strahler, Softboxen, …)<br/>
                                - Dunkle Lichtverhältnisse<br/>
                            </p>
                        }
                    />
                    <video className={"mb-5"} width="750" height="500" controls>
                        <source src="/videos/Licht.mp4" type="video/mp4"/>
                    </video>
                </div>
            </main>
        </div>
    )
}

export default videoaufnahmen