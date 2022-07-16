import React from 'react'
import MainHeader from '../../components/MainHeader'
import StyledText from '../../components/StyledText'
import SubHeader from "../../components/SubHeader";

function deepfacelab() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
                <MainHeader title={'DeepFaceLive'}></MainHeader>
                <div
                    className={
                        'z-10 flex  flex-1 flex-col items-center  bg-bgMain/40 px-8 py-10 shadow-3xl  backdrop-blur-md'
                    }
                >
                <StyledText text={<p>
                    Deepfacelive ist, wie der Name schon vermuten lässt, eine Erweiterung der Open-Source-Software Deepfacelab. DFLive ermöglicht einen Gesichter Tausch, welcher Live vor einer Webcam stattfindet. Die Software bietet einige kostenfreie Modelle zum Download an. Darunter auch die Gesichter von Tom Cruise und Jim Carrey.
                    Doch wie werden diese Modelle trainiert? Der eigentliche Prozess unterscheidet sich nur geringfügig von handelsüblichen Deepfake Videos. Weiterhin wird Rohmaterial vom Quell- und Zielgesicht durch Deepfacelab extrahiert und zentriert. Der Trainingsprozess findet auch auf der Ursprungssoftware statt.  Der große Unterschied besteht darin, dass sogenannte RTM Modelle (Ready-To-Merge Modelle) trainiert werden. Ein solches Modell kann einen FaceSwap innerhalb von Sekunden durchführen, ohne stundenlanges rechnen, was vorher bei Deepfake Videos der Fall ist. Und diese unterscheiden sich tatsächlich von klassischen Deepfake Modellen.
                </p>}/>
                    <SubHeader title={'RTM-Modelle'}/>
                    <StyledText text={<p>
                        Ready-To-Merge Modelle haben die Entstehung von DeepFaceLive erst möglich gemacht. Die Quell-Daten eines Gesichtes, werden hierbei mit den Ziel-Daten des RTM 224 Faceset von Iperof trainiert. Dieses Faceset besteht aus mehr als 60.000 Frames unterschiedlicher Personen. Diese unterscheiden sich teilweise maßgeblich voneinander bezüglich Geschlecht, Hautfarbe, Gesichtsmerkmale etc. Dieses Faceset ist bereits vortrainiert mit mehreren Millionen Iterationen. Ziel hinter diesem Vorgang besteht darin, die Quelldaten daraufhin zu trainieren, dass es in jeder Situation mit jedem möglichen Gesicht einen Faceswap ausführen kann
                        Die Erstellung eines solchen Facesets ist allerdings mit sehr viel Aufwand verbunden und die Erfolgsaussichten auf ein hochwertiges Live-Deepfake, sind für neu Einsteiger sehr gering. Deshalb wird geraten, das RTM 224 Faceset von Iperof zu verwenden.
                    </p>}/>
                    <SubHeader title={'Workflow'}/>
                    <StyledText text={<p>
                        Es haben sich mehrere Trainings Workflows für die Erstellung von RTM-Modellen etabliert. Nachfolgend wird hauptsächlich auf den „NEW WORKFLOW“ von MrDeepfakes eingegangen <a className={'source'}
                                                                                                                                                                                                      id={"srcRef13"}
                                                                                                                                                                                                      href={"#linkSrc13"}>[13]</a>. Es gibt zusätzlich noch einen „OLD WORKFLOW“ und einen „EXPERIMENTAL WORKFLOW“, allerdings wurde im Zuge dieses Projektes hauptsächlich mit dem untenstehenden Trainingsprozess gearbeitet.
                        Auf das Extrahieren und Zentrieren der Facesets wird hier nicht weiter eingegangen.
                    </p>}/>
                    <SubHeader title={'Trainingsdaten SAEHD'}/>
                    <StyledText text={<p>
                        Resolution: 224 oder höher.<br/>
                        Face Type:WF<br/>
                        Dims: AE: 512, E: 64, D Masks: 32<br/>
                        Settings: EMP Enabled, Blur Out Mask Enabled, UY Enabled, LRD Enabled, BS:8(Wenn man das Modell nicht mit so hohem BS trainieren kann, dann versuchen diese Parameter runterzuschrauben: archi, dims, optimizer, optimizer/Ird on cpu.<br/>
                        Alle anderen Optionen einfach den Default Wert beibehalten.<br/>
                        OPTIONAL: HSV bei power 0.1 und CT mode so auswählen wie es bei sich am besten passt, normalerweise RCT.<br/><br/>

                        Nicht vergessen Backups zu machen oder auto backups einzustellen.<a className={'source'}
                                                                                            id={"srcRef13"}
                                                                                            href={"#linkSrc13"}>[13]</a><br/>
                        1.	Training für mindestens 2.000.000 Iterationen mit RW aktiviert und inter_AB.npy wird alle 500k Iterationen gelöscht. (Training wird gespeichert, die Datei gelöscht und Training wird danach wieder aufgenommen)<br/>
                        2.	Nachdem inter_AB gelöscht wurde, nochmal +500k Iterationen mit RW aktiviert<br/>
                        3.	Wenn das geswappte Gesicht nach DST aussieht, inter_AB wieder löschen und Schritt 2 wiederholen<br/>
                        4.	RW Deaktivieren und nochmal für +500k Iterationen trainieren<br/>
                        5.	Enable GAN at power 0.1 with GAN_Dims:32 and Patch Size being 1/8th of your model resolution for +800.000k iters.<br/>
                        Nachdem das Training beendet ist, kann das Model als DFM model exportiert werden.<br/><br/>
                        Vorteile dieses Workflows, bestehen vor allem in seiner Schlichtheit. Allerdings entsteht nach diesem Trainingszyklus ein Modell, welches über 4.000.000 Iterationen besitzt. Dieses Ziel ist aufgrund von den daraus entstehenden Hardware Voraussetzungen allerdings nicht realistisch. Die Projetktarbeit von Heinz 2.0 wurde mit einer RTX 3080ti und 64GB Ram fertig gestellt. Allerdings war es dabei dem Rechner nicht möglich über eine Iterationszahl von 2.000.000 Iterationen zu gelangen, weshalb der oben beschriebene Workflow abgeändert werden musste.
                    </p>}/>
                    <a id={"xseg"}/>
                    <SubHeader title={'XSEG'}/>
                    <StyledText text={<p>
                        Bevor das eigentliche Training beginnen kann, ist eine Bearbeitung des Facesets mithilfe des XSeq Tools hilfreich. XSeq erstellt eine automatische Maske und lernt zwischen dem Hintergrund eines Bildes und dem Gesicht einer Person zu unterscheiden. Ein grüner Schatten zeigt dem Nutzer wie gründlich XSeq bereits das Faceset kennt. Es empfehlt sich, das Faceset erst mit einem generischem Druchlauf von der Software zu trainieren und dieses später weiter zu bearbeiten.
                        Wähle die Batch Datei:<br/>
                        -	XSeg Generic) data_src whole_face mask<br/>
                        Nachdem die Maske auf die Frames gesetzt wurde, wähle:<br/>
                        -	XSeg) train<br/>
                        und trainiere das Faceset so lange bis das Gesicht der Ziel Person gut zu erkennen ist.
                    </p>}/>
                    <img src={'/trainingpreview.png'}/>
                    <StyledText text={<p>
                        Bei bestimmten Bewegungen, z. B. wenn Personen nach oben oder zur Seite blicken, ist es manchmal notwendig die Maske selbst noch einmal nachzuschneiden. Wähle hierfür:<br/>
                        -	XSeg) data_src mask – edit<br/>
                    </p>}/>
                    <img src={'/heinzxseg.png'}/>
                    <StyledText text={<p>
                        Es ist zu erkennen, dass der „generic“ Durchlauf nicht alle Facesets korrekt erfasst. Bei Falten oder bestimmten Kopfbewegungen können durchaus fehlerhafte Masken entstehen. Diese können mithilfe von XSeq per Hand nachgezogen werden. Die grüne Linie zeigt die korrigierte Maske. Je nachdem wie erfolgreich der erste Durchlauf gewesen ist, müssen manchmal mehr und manchmal weniger Bilder nachbearbeitet werden. Dieser Prozess kann teilweise einige Stunden dauern, allerdings zeigt sich diese Arbeit auch im Ergebnis.
                    </p>}/>
                    <SubHeader title={'SAEHD'}/>
                    <img src={'/vorschaufenstersaehd.png'}/>
                    <StyledText text={<p>
                        Der erste Trainingsdurchlauf geschieht mit den oben definierten Einstellungen. Interessanterweise entstehen schon bereits nach wenigen Tausend Iterationen detaillierte Faceswaps. Ein ausführliches Training ist allerdings zu bevorzugen. Live-Deepfakes sind auf ein ausreichendes Training alles Images des RTM 224 Facesets angewiesen. Wird das Training zu früh beendet, so kommt es zu qualitativem Einbüßen des Modells. Deshalb werden Live-Modelle auch länger trainiert als Deepfake Videos.
                        Alle 500k Iterationen wird im Model Ordner die Datei inter_AB gelöscht. Dieser Vorgang führt dazu, dabei wird der Trainingszyklus gelöscht und wieder neu aufgesetzt. Dabei verliert das Modell all seine Daten und das Training wird von neu gestartet. Grund dafür ist, dass Live Modelle im millionenfachen Iterationsbereich trainiert werden muss, allerdings je länger das Training anhält Verluste entstehen. Mit dem Löschen von Inter_AB werden weitere Verluste verhindert. Das Modell braucht jetzt nur noch einen Bruchteil der Zeit um auf das vorherige Niveau des Deepfakes zu gelangen und kann mit geringerer Verlustrate darüber hinaus gehen. Meistens reichen 30k – 50k Iterationen um die vorher verlorenen Daten wieder anzutrainieren. Diese Workflow wird beibehalten, bis 2.500.000 Iterationen erreicht sind, kann aber auch früher unterbrochen werden, sollte es die Hardware nicht zulassen.<br/>
                        Das nachfolgende Trainigsfenster zeigt den bisherigen Trainingsprozess auf 1.000.000 iters. In der Mitte der Preview erkennt ist ein deutlicher Einschnitt der Trainingsdaten zu sehen, welcher durch das Löschen von Inter_AB entstanden ist.
                    </p>}/>
                    <img src={'/vorschaufenstersaehd2.png'}/>
                    <StyledText text={<p>
                        Das nachfolgende Fenster zeigt die Preview-Bilder, direkt nach dem Löschen von Inte_AB.<br/></p>}/>
                    <img src={'/vorschaufenstersaehd3.png'}/>
                    <StyledText text={<p>
                        Nach 2.500.000 Iterationen wird die Datei RW aus den Einstellungen des SAEHD Algorithmus deaktiviert und das Training weiter fortgesetzt. Nach weiteren 500.000 Iterationen wird GAN aktiviert. Die Aktivierung von GAN führt zu den wohl gravierendsten Unterschieden im fortgeschrittenen Trainingszyklus. GAN hebt Feinheiten des Gesichts hervor wie z.B. Falten, Hautmerkmale oder Barthaare. GAN gibt dem Modell den letzten Schliff und sollte nur zum Ende hin eingeschaltet werden. GAN wird danach auch nicht mehr abgeschaltet. GAN wird aktiviert (GAN at power 0.1 with GAN_Dims:32 and Patch Size 1/8 of model resolution) und noch einmal ca. 800.000 Iterationen trainiert.<br/></p>}/>
                    <SubHeader title={'Mögliche Probleme'}/>
                    <StyledText text={<p>
                        Deep-Learning ist mit einer sehr hohen Rechenleistung verbunden. Auch scheinbare Hochleistungsrechner können mit einem ausführlichem Training Probleme aufweisen. So hatten auch wir Probleme unsere Rechenleistung einzuschätzen. Mit einer RTX 3080ti und 64GB RAM, dachten wir zumindest wir wären für diese Trainingsphase gut ausgerüstet. Umso deprimierender war es als unser Modell nach 2.000.000 Iterationen nicht mehr weiter trainiert wurde.</p>}/>
                    <img src={'/saehdbash.png'}/>
                    <StyledText text={<p>
                        Für besonders hoch trainierte Trainingszyklen ist es ratsam einen Rechner mit 128GB Ram zu verwenden. Denn auch für unseren Rechner war ab hier Schluss.</p>}/>
                    <SubHeader title={'Was lernen wir daraus?'}/>
                    <StyledText text={<p>
                        Aufgrund des bereits vortrainiertem RTM-224 Facesets im Destination Folder, können auch geringere Iterationsraten gute Ergebnisse hervorbringen. Heinz 2.0 wurde bis 2.000.000 Iterationen trainiert. Der Workflow musste also dahingehend angepasst werden. Ab 1.000.000 Iterationen wird RW aus den Einstellungen des SAEHD Algorithmus abgestellt, wobei davor bei 500.000 Iterationen Inter_AB wie gehabt gelöscht wurde. Ab 1.500.000 Iterationen wurde GAN eingeschalten mit 0.1. Bis 2.000.000 Iterationen wurde das Modell weiter trainiert. Das Ergebnis steht zu Download bereit.
                        Sollte ein ausführliches Training zu Problemen führen so empfehlen wir, unseren angepassten Workflow zu testen. Allerdings ist es auch möglich den „OLD WORKFLOW“ und den „EXPERIMENTAL WORKFLOW“ von MrDeepfakes zu testen. Diese sind daraus ausgelegt mit weniger Iterationen ein gutes Ergebnis zu generieren, allerdings sind diese auch ausführlicher und komplizierter.
                    </p>}/>
                    <SubHeader title={'Wie geht es weiter?'}/>
                    <StyledText text={<p>
                        Nach dem Training muss das Modell nur noch zu einer dfm Datei umgewandelt werden. Wähle in DFL die Batch Datei:<br/>
                        -	Export SAEHD as dfm<br/>
                        und wähle die Standard Einstellungen. Die daraus resultierende DFM File findest du im Model Verzeichnis von Deepfacelab. Diese wird nun in das entsprechende Verzeichnis von DFLive (nicht Deepfacelab) gelegt.
                    </p>}/>
                    <img src={'/dfldfm.png'}/>
                    <StyledText text={<p>
                        Jetzt kann in DeepFaceLive das eigen trainierte Modell ausgewählt werden. DFL hat auch einen Merger der in Echtzeit die Maske des Live-Deepfakes verändern kann.<br/>
                        Das entstandene Modell ist ein RTM Modell und kann für weitere Projekte weiter verwendet werden. Beispielsweise für weitere Deepfake Videos. Stundenlanges Training ist nun Geschichte!<br/>
                        Viel Spaß!
                    </p>}/>
                    <SubHeader title={'Quellen'}/>
                    <a className={"source"} id={"linkSrc13"} target="_blank"
                       href={"https://mrdeepfakes.com/forums/thread-guide-deepfacelab-2-0-guide"}>[13]
                        [GUIDE] - DeepFaceLab 2.0 Guide. [Online]. Zugriff am: 20. Februar 2022.</a>
                </div>
            </main>
        </div>
    )
}

export default deepfacelab