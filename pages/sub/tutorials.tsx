import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import { Span } from 'next/dist/trace'

function tutorials() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
        <MainHeader title={'Tutorials'} />
        <div
          className={
            'z-10 flex min-h-screen flex-1 flex-col items-center justify-center bg-bgMain/40 py-10 px-8 shadow-2xl  backdrop-blur-md'
          }
        >
          <SubHeader title={'Videoaufnahmen'} />
          <StyledText
            text={
              <p>
                Wenn man ein Deepfake machen möchte, sind die Videoaufnahmen un
                deren Qualität für das Ergebnis von essentieller Bedeutung.
                Deswegen gibt es hier eine Checkliste, worauf man achten sollte:
              </p>
            }
          />
          <img
            className={'mt-5 mb-5 pl-40 pr-40'}
            src={'/videoaufnahmen.png'}
          />
          <StyledText text={<h5 className={'text-heinzBlau'}>
            Winkel
          </h5>}/>
          <video className={"mb-5"} width="750" height="500" controls >
            <source src="/videos/Winkel.mp4" type="video/mp4"/>
          </video>
          <StyledText text={<h5 className={'text-heinzBlau'}>
            Mimik
          </h5>}/>
          <video className={"mb-5"} width="750" height="500" controls >
            <source src="/videos/Mimik.mp4" type="video/mp4"/>
          </video>
          <SubHeader title={'Welche Hardware steht zur Verfügung?'} />
          <img className={'pl-20 pr-20'} src={'/welchestutorial.png'} />
          <StyledText text={<p>Hier geht es zum GoogleColab-Tutorial: <a className={"source"} href={"#colabTutorial"}>LINK</a></p>}/>
          <SubHeader title={'DeepFaceLab lokal installiert'} />
          <StyledText text={<p>Wer lieber ein Tutorial anguckt, als es zu lesen:</p>}/>
          <video className={"mb-5"} width="750" height="500" controls >
            <source src="/videos/dflTutorial.mp4" type="video/mp4"/>
          </video>
          <StyledText
            text={
              <>
                <h5 className={'text-heinzBlau'}>DeepFaceLab installieren</h5>
                <p>
                  Dieses Tutorial soll nahebringen, wie man relativ schnell und einfach zum ersten eigenen Deepfake-Video kommt. <br/>
                    Zunächst sollte man die
                  richtige DFL-Version installieren. Dazu muss man wissen, ob
                  und welche Grafikkarte vorhanden ist. Je nachdem, wie alt und
                  von welchem Hersteller diese ist, wählt man die passende
                  Version aus. Die Versionen sind so benannt, dass man die
                  korrekte allein am Namen erkennen kann. Nach der Installation
                  findet man einen Ordner vor, der viele Batchdateien und zwei
                  Ordner enthält. Der _internal-Ordner ist nicht relevant. Man
                  kann diesen ignorieren. Wichtig ist der workspace-Ordner – der
                  Arbeitsplatz.
                </p>
              </>
            }
          />
          <img src={''} />
          <StyledText
            text={
              <>
                <h5 className={'text-heinzBlau'}>
                  Videos in den richtigen Ordnern ablegen
                </h5>
                <p>
                  Im Arbeitsplatz sind zwei leere Ordner (
                  <span className={'text-lime-300'}>data-src</span> und{' '}
                  <span className={'text-yellow-400'}>data-dst</span>), die im
                  Laufe des Vorgangs mit Daten gefüllt werden. Hierhin kopiert
                  man die beiden Videos, mit denen man ein Deepfake erstellen
                  möchte.
                  <br />
                  Die Dateien muss man dann folgendermaßen umbenennen: das
                  Video, das das Gesicht enthält, das ersetzt werden soll,
                  bekommt den Namen data_dst und das Quellvideo, das das Gesicht
                  enthält, was das andere ersetzen soll{' '}
                  <span className={'text-lime-300'}>data-src</span>.
                </p>
              </>
            }
          />
          <img src={''} />
          <StyledText
            text={
              <>
                <h5 className={'text-heinzBlau'}>
                  Extrahieren der einzelnen Frames als Bilder
                </h5>
                <p>
                  Die ersten zwei Batchdateien, die man ausführt, zerlegen die
                  Videos in einzelne Bilder. Dafür startet man zunächst
                  <span className={'text-heinzBlau'}>
                    "extract images from video{' '}
                    <span className={'text-lime-300'}>data-src</span>"
                  </span>
                  . Man wird nach Framerate des Videos und nach einem
                  Dateiformat, in dem die Bilder gespeichert werden sollen,
                  gefragt. Im Zweifel bietet Deepfacelab ein Defaultwert an, der
                  in den eckigen Klammern steht, und meistens eine gute Wahl
                  ist. Wenn man weiß, dass das Video mit 60 Fps aufgenommen
                  wurde, aber das Dateiformat zunächst egal ist, gibt man “60”
                  ein und drückt einfach Enter bei der Frage nach dem
                  Dateiformat. Der Vorgang dauert nun einen längeren Augenblick.
                  Analog startet man{' '}
                  <span className={'text-heinzBlau'}>
                    "extract images from video{' '}
                    <span className={'text-yellow-300'}>data-dst</span>"
                  </span>{' '}
                  und wird wiederum nach einem Dateiformat gefragt. Ist dieser
                  Vorgang auch abgeschlossen, kann man nun in den Unterordnern
                  des Arbeitsplatzes die einzelnen Bilder finden.
                </p>
                <h5 className={'text-heinzBlau'}>Faceset</h5>
                <p>
                  Der zweite Schritt besteht darin aus den Bildern die Gesichter
                  zu extrahieren. Somit erhält man ein sog. „Faceset“. Dafür
                  ruft man data_src faceset extract auf. Man wird gefragt auf
                  welcher Hardware, die Berechnungen ausgeführt werden sollen,
                  was voreingestellt die eigene Grafikkarte ist. Weiter soll man
                  ein Gesichtstyp auswählen, die Größe und Qualität der
                  ausgeschnittenen Gesichter und wie viele Gesichter pro Bild zu
                  finden sind, angeben. Hier kann man einfach auf die
                  Defaultwerte vertrauen.
                  <br />
                  Dieser Vorgang dauert bei Verwendung einer NVIDIA GeForce GTX
                  1050 und 3300 Frames ungefähr sechs Minuten. Interessant ist,
                  dass nach Abschluss einem gezeigt wird, auf wie vielen Bildern
                  überhaupt ein Gesicht erkannt wurde. Das gleiche passiert nun auch wieder
                  mit den Gesichtern aus dem Zielvideo. Dazu startet man
                  data_dst faceset extract und gibt wieder dieselben Werte ein.
                  Die extrahierten Gesichter werden, wie alles andere, in den
                  entsprechenden Unterordnern des Arbeitsplatzes gespeichert.
                  Damit sind alle vorbereitenden Schritte abgeschlossen.
                </p>
                <h5 className={'text-heinzBlau'}>Ergänzende Hinweise</h5>
                <p>
                  Dieser Workflow ist auf das nötigste heruntergebrochen und
                  sollte unbedingt erweitert werden, zum Beispiel durch das
                  Sortieren des Facesets und anschließendem Aussortieren von
                  unbrauchbaren Gesichtern oder durch Verwendung von{' '}
                  <span className={'text-heinzBlau'}>Xseg</span>. Zu
                  unbrauchbaren Gesichtern gehören, laut offiziellem Guide, zu
                  sehr rotierte, unscharfe, abgeschnittene, durch etwas
                  halbtransparentes überlagerte und über- oder unterbelichtete
                  oder auch fremde Gesichter [28].
                </p>
                <h5 className={'text-heinzBlau'}>Training starten</h5>
                <p>
                  Es verbleibt noch die Wahl des Trainingsalgorithmus. DFL
                  bietet drei verschiedene, von denen Quick96 derjenige ist, der
                  für den Anfang am zuverlässigsten funktioniert hat. Später
                  sollte man SAEHD verwenden, da dieser mehr
                  Einstellungsmöglichkeiten bietet. Startet man das Training,
                  vergibt man zunächst einen Namen für die aktuellen
                  Trainingsdaten, die als Modell gespeichert werden müssen.
                  Danach wählt man am besten wieder seine GPU für die
                  Kalkulationen aus. Es werden nun die Gesichter geladen, das
                  Training beginnt und es öffnet sich die Vorschau.
                </p>
              </>
            }
          />
          <img src={'/vorschaufenster.png'} />
          <StyledText
            text={
              <>
                <h5 className={'text-heinzBlau'}>Das Vorschaufenster</h5>
                <p>
                  Das Vorschaufenster zeigt an, wie viele Iterationen der
                  Algorithmus schon durchlaufen ist. Im Beispiel oben sind es 46744 Iterationen. Die Spalten zeigen
                  folgende Bilder:
                  <br />
                  <br />
                  1. Spalte: Gesicht des Quellvideos
                  <br />
                  2. Spalte: Synthetische Maske des Quellvideos
                  <br />
                  3. Spalte: Gesicht aus dem Zielvideo
                  <br />
                  4. Spalte: Synthetische Maske des Zielvideos
                  <br />
                  5. Spalte: Ergebnis
                  <br />
                  <br />
                  Beim Training werden also erstmal computergenerierte Versionen
                  der Gesichter erzeugt und diese werden dann übereinander
                  gelegt zu einem Ergebnis. Anhand der Graphen kann man
                  erkennen, wie genau die Berechnungen schon übereinstimmen. Der
                  gelbe Graph ist für die Maske des Zielvideos, der blaue für
                  die des Quellvideos. Umso weiter die Graphen nach null gehen
                  („unten“), umso besser das Ergebnis.
                </p>
              </>
            }
          />
          <StyledText
            text={
              <>
                <h5 className={'text-heinzBlau'}>Mergen</h5>
                <p>
                  Wenn das Ergebnis zufriedenstellend ist, folgt das „Mergen“.
                  Das heißt, die Gesichter des Quellvideos werden in die Frames
                  des Zielvideos eingesetzt. Dafür startet man die zum
                  verwendeten Algorithmus passende Batchdatei. Wenn zum
                  Trainieren Quick96 verwendet wurde, muss folglich{' '}
                  <span className={'text-heinzBlau'}>"merge Quick96"</span>{' '}
                  gewählt werden. Jetzt öffnet sich der sog. interaktive Merger,
                  mithilfe dessen man noch Feinjustierungen am Quellgesicht
                  vornehmen kann. Man kann unter anderem die Gesichtsgröße
                  anpassen oder die Schärfe erhöhen.
                  <br />
                  Wenn dieser Schritt abgeschlossen ist, müssen nur noch die
                  verschmolzenen Frames in ein Video verwandelt werden. Dazu
                  startet man beispielsweise merged to mp4, um ein Video im
                  mp4-Format zu erhalten.{' '}
                  <span className={'text-heinzBlau'}>
                    Das fertige Video findet man dann im Arbeitsplatz-Ordner.
                  </span>
                </p>
              </>
            }
          />
          <img src={'/interaktivermerger.png'} />
          <StyledText
            text={
              <>
                <h5 className={'text-heinzBlau'}>Interaktiver Merger</h5>
                <p>
                  Der interaktive Merger bietet ziemlich viele fortgeschrittene
                  Einstellungsmöglichkeiten, die es einem ermöglichen, das beste
                  aus dem Trainingsmodell heruaszuholen.
                </p>
              </>
            }
          />
          <SubHeader title={'DeepFaceLab mit Google Colab'} />
          <a id={"colabTutorial"}/>
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
                <br />
                <br />
                <span className={"text-heinzBlau"}>Maschinelles Lernen ist in Colab auf eine Dauer von bis zu 12
                  Stunden begrenzt.</span> Ist diese Zeit abgelaufen, so wird die
                Verbindung zum Server automatisch getrennt und es kommt
                möglicherweise zum Datenverlust. Deshalb sollte dieses Zeitlimit
                nicht überschritten werden.
                <br />
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
                <br />
                <br />
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
        </div>
      </main>
    </div>
  )
}

// @ts-ignore
export default tutorials
