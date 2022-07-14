import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'

function googlecolab() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
                <MainHeader title={'GoogleColab'}></MainHeader>
                <div
                    className={
                        'z-10 flex  flex-1 flex-col items-center  bg-bgMain/40 px-8 py-10 shadow-3xl  backdrop-blur-md'
                    }
                >
                    <SubHeader title={"Fazit"}></SubHeader>
                    <StyledText
                        text={
                            <p>
                                DeepFaceLab stellt ein offizielles Jupyter Notebook für Google
                                Colab zur Verfügung. Dieses Notebook hat fast alle Eigenschaften
                                der ursprünglichen Software. Allerdings werden einige Funktionen
                                nur teilweise übernommen. Mergen oder auch extrahieren der
                                Facesets machen oftmals Probleme und unterbrechen die Verbindung
                                zum Server. Deshalb ist die Kombination aus DeepFaceLab und dem
                                offiziellen DeepFaceLab Notebook ratsam. Das Extrahieren der
                                Bilder und Facesets, sowie das Mergen kann stationär auf dem
                                eigenen Rechner geschehen. Das daraus resultierende Material
                                wird dann auf einem Google Drive Konto hochgeladen und auf Colab
                                trainiert.
                                <br/>
                                <br/>
                                <span className={"text-heinzBlau"}>Maschinelles Lernen ist in Colab auf eine Dauer von bis zu 12
                  Stunden begrenzt.</span> Ist diese Zeit abgelaufen, so wird die
                                Verbindung zum Server automatisch getrennt und es kommt
                                möglicherweise zum Datenverlust. Deshalb sollte dieses Zeitlimit
                                nicht überschritten werden.
                                <br/>
                                Es ist aber leicht diese Einschränkung zu umgehen, in dem
                                entweder auf einem weiteren Browser oder einem weiteren Google
                                Konto trainiert wird. Es ist auch möglich, den Zeitraum zu
                                verlängern, in dem man monatlich für ein Google Plus Konto
                                zahlt. Der Zeitraum zum Trainieren wird so auf 24 Stunden erhöht
                                und die Verbindung zum Server ist stabiler. Auch wir hatten mit
                                einem Google Plus Konto deutlich stabilere Verbindungen und die
                                Arbeit wurde so deutlich erleichtert. Mit einem einfachem Google
                                Konto wird erfahrungsgemäß die Verbindung nach drei Stunden
                                unterbrochen.
                                <br/>
                                <br/>
                                <span className={"text-heinzBlau"}>Deswegen ist dieser Dienst für hochwertige Deepfakes nur
                  eingeschränkt geeignet.</span> Beim Trainieren des Source und Destination Videos muss der
                                Trainingsprozess aktiv überwacht werden, da die Verbindung nach 3 oder
                                4 Stunden manuell neu aufgebaut werden muss. Zwar gehen hier keine Daten
                                verloren und das Training wird ganz einfach weiter fortgesetzt,
                                allerdings ist das ständige Überwachen sowohl umständlich als
                                auch zeitaufwendig. Bei Iterationen über 100.000 ist ein
                                reibungsloser Verbindungsaufbau nicht gewährleistet. Wir
                                empfehlen hier ein Upgrade auf ein Google Plus Konto. Diese
                                Empfehlungen entstammen persönlichen Erfahrungen in der frühen
                                Projektphase.
                            </p>
                        }
                    />
                </div>
            </main>
        </div>
    )
}

export default googlecolab