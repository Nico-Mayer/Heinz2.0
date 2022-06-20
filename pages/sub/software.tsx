import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import SoftwareArticle from '../../components/SoftwareArticle'

function software() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <main className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center text-center">
        <MainHeader title={'Software'} />
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
                austauschen oder ausschließlich die Lippen manipulieren. [27]
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
                <br />
                Die Antwort dazu war Google Colab. Google Colab, auch
                Colaboratory genannt, ist ein zum Teil kostenfreier
                Cloud-Dienst, welcher von Google angeboten wird. Diese Plattform
                ermöglicht es Machine Learning Modelle direkt online zu
                trainieren. Sie basiert auf der Jupyter Notebook-Umgebung. [17]
                Ein Jupyter Notebook ist eine webbasierte Client-Anwendung, die
                sich über handelsübliche Browser starten lässt. Die
                Client-Server-Anwendung wurde 2015 von der
                Non-Profit-Organisation Project Jupyter veröffentlicht. [18] Mit
                Jupyter Notebooks können sogenannte interaktive „Arbeitsblätter“
                erstellt werden. Diese Notebooks enthalten Texte sowie Medien
                wie Bilder, Grafiken und Videos. Eine direkte Ausführung des
                Quellcodes ist auch möglich. [19]
                <br />
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
                optimieren stellt der Machine Video Editor (MVE) dar [37].
                Dieser bietet eine grafische Oberfläche für DeepFaceLab an und
                ergänzt diese um weitere Tools wie Bild- und Video-Scraper. Der
                Fokus liegt mehr auf der Bündelung der verschiedenen Ressourcen
                in einem “project management”.
                <br />
                Die Software ist kostenlos, aber keine Open-Source. Laut der
                readme.md auf GitHub sind aktuell OpenSource-Projekte in MVE
                enthalten, und eine Offenlegung des Quellcodes ist nicht
                ausgeschlossen.
                <br />
                Die Verwendung ist unter Windows und Linux möglich, vor der
                Verwendung müssen noch einige externe Abhängigkeiten installiert
                werden. Diese betreffen vor allem die CUDA-Schnittstelle als
                auch eine Python-Umgebung. Viele dieser Packages treten auch in
                anderen Deepfake-Anwendungen in Erscheinung und sind bekannt.
                Die Besonderheit von MVE ist neben der Ressourcenbündelung die
                Analyse von bereits extrahierten Facesets. [38]
              </p>
            }
            linkDescription={<p>Hier ist der Link zum Github-Repository:</p>}
            link={'https://github.com/MachineEditor/MachineVideoEditor'}
          />
        </div>
        <SubHeader title={'Quellen'}/>
      </main>
    </div>
  )
}

export default software
