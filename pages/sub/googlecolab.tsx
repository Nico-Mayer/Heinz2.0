import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import router from "next/router";

function googlecolab() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
                <MainHeader title={'DFL mit Google Colab'}></MainHeader>
                <div
                    className={
                        'z-10 flex  flex-1 flex-col items-center  bg-bgMain/40 px-8 py-10 shadow-3xl  backdrop-blur-md'
                    }
                >
                    <SubHeader title={'Jupyter Notebook'}/>
                    <StyledText text={<p>
                        Falls man keine Grafikkarte oder eine eher ältere Grafikkarte hat, ist es sinnvoll GoogleColab zu verwenden.<br/>
                        Zunächst geht man auf die Homepage von DeepFaceColab<a className={'source'}
                                                                               id={"srcRef15"}
                                                                               href={"#linkSrc15"}>[15]</a>.
                        Wenn du mehr über Jupyter Notebooks erfahren möchtest, lies den Abschnitt <span className={"text-heinzOrange hover:text-heinzGrau"} onClick={() => {
                        router.push("/sub/software#colab")
                    }}>"GoogleColab" unter "Software"</span>.
                    </p>}/>
                    <img src={"/gctut/dflcolabhome.png"}/>
                    <StyledText text={<p>
                        Man klickt auf "Link" nach "DFL-Colab Notebook". Es öffnet sich GoogleColab mit dem Jupyter Notebook namens "DFL_Colab.ipynb".
                    </p>}/>
                    <img src={"/gctut/colabnbhome.png"}/>
                    <SubHeader title={'Erste Schritte (optional)'}/>
                    <StyledText text={<p>
                        Die Schritte, die nun folgen sind alle sehr einfach, da man im Grunde nur noch die kleinen Play-Buttons betätig und einzelne Eingaben macht, bei denen man aber in fast 100% der Fällen nur die Enter-Taste drückt, um den Default-Wert zu verwenden.
                        Als erstes startet man "Prevent random disconnects" (was blöderweise nicht immer die Verbindung aufrechterhält...), danach "Check GPU", was einem anzeigt, welche Grafikkarte dem Notebook zugewiesen wurde und rein informativer Natur ist.
                    </p>}/>
                    <img src={"/gctut/checkgpu.png"}/>
                    <StyledText text={<p>
                        Wenn man über die Zeile hovert (Maus ist auf dem Screenshot nicht zu sehen), erscheint der Play-Button.
                    </p>}/>
                    <img src={"/gctut/hover.png"}/>
                    <SubHeader title={'DeepFaceLab auf dem Notebook installieren'}/>
                    <StyledText text={<p>
                        Als Drittes ist "Install or update DeepFaceLab". Das dauert nun ein paar Minuten. Im Anschluss sollte die Ordnerstruktur folgendermaßen aussehen:
                       </p>}/>
                    <img src={"/gctut/ordner.png"}/>
                    <SubHeader title={'Workspace von GoogleDrive importieren'}/>
                    <StyledText text={<p>
                        Wie man sieht gibt es einen "workspace"-Ordner, welcher der relevanteste Ordner für uns als Nutzer ist.<br/>
                        Nun kann man entweder Quell- und Zielvideo manuell hochladen oder man verbindet GoogleDrive mit dem Notebook und importiert sie von dort.
                        Hat man DeepFaceLab lokal installiert, kann man den "workspace"-Ordner von dort in seine Ablage legen und importieren lassen.
                        Dies ist eine sehr nützliche Funktion. So kann man DeepFaceLab und DeepFaceColab zusammen verwenden.
                    </p>}/>
                    <img src={"/gctut/importfromdrive.png"}/>
                    <StyledText text={<p>
                        Wie man sieht gibt es einen "workspace"-Ordner, welcher der relevanteste Ordner für uns als Nutzer ist.<br/>
                        Nun kann man entweder Quell- und Zielvideo manuell hochladen oder man verbindet GoogleDrive mit dem Notebook und importiert sie von dort.
                        Hat man DeepFaceLab lokal installiert, kann man den "workspace"-Ordner von dort in seine Ablage legen und importieren lassen.
                        Dies ist eine sehr nützliche Funktion. So kann man DeepFaceLab und DeepFaceColab zusammen verwenden.
                    </p>}/>
                    <img src={"/gctut/upload.png"}/>
                    <SubHeader title={'Faceset extrahieren'}/>
                    <StyledText text={<p>
                        Als nächstes muss man mindestens "Extract frames" und "Detect faces" jeweils für "data_src" und "data_dst" ausführen.
                        Hierbei werden die Videos in einzelne Frames zerlegt und danach die gesichter auf den Bildern detektiert.
                        Es empfiehlt sich in jedem Fall, auch wenn es ohne jegliche Grafikkarte geschieht, diese Schritte lokal auszuführen
                        und dann den Workspace zu importieren, da es hier oft zu Verbindungsabbrüchen kommt und man dann alles von vorne machen muss.
                    </p>}/>
                    <img src={"/gctut/extract.png"}/>
                    <StyledText text={<p>
                        Hierbei ist zu beachten, dass man die fps(frames per second), mit denen die Videos aufgenommen wurden, und das Dateiformat, indem die Bilder gespeichert werden sollen, angegeben werden müssen.
                        Wenn man nicht weiß, was man angeben soll, drückt man einfach "Enter".</p>}/>
                    <img src={"/gctut/exctractframes.png"}/>
                        <StyledText text={<p>
                            Danach startet man das Training! Man gibt dem Modell, das man nun trainiert, einen Namen (man kann also theoretisch mehr als ein Modell haben) und drückt bei allem anderen wieder einfach "Enter".</p>}/>
                            <img src={"/gctut/trainingStart.png"}/>
                    <StyledText text={<p>
                        Anschließend müssen die Frames gemerged werden und danach kann das fertige Video heruntergeladen werden. Fertig!</p>}/>
                    <img src={"/gctut/merge.png"}/>
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
                                trainiert. Dabei wird die Funktion genutzt, die einem ermöglicht,
                                aus der Ablage den "workspace"-Ordner zu importieren.
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
                    <SubHeader title={'Quellen'}/>
                    <a className={"source"} id={"linkSrc15"} target="_blank"
                       href={"https://github.com/chervonij/DFL-Colab"}>[15]
                        Github, chervonij/DFL-Colab [Online]. Zugriff am: 15. Juli 2022.</a>
                </div>
            </main>
        </div>
    )
}

export default googlecolab