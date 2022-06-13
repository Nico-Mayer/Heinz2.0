import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'
import React from 'react'
import MainHeader from '../../components/MainHeader'

function faq() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center text-center">
        <MainHeader title={'FAQ'} />

        <div
          className={
            'z-10 flex min-h-screen flex-1 flex-col items-center space-y-20 bg-bgMain/40 py-10 px-8 shadow-3xl backdrop-blur-md'
          }
        >
          <SubHeader title={'1. Was sind eigentlich Deepfakes?'} />
          <StyledText
            text={
              <p>
                Deepfakes sind gefälschte Medieninhalte. Anhand von
                Medienmaterialien wie Bildern, Videos oder Audioaufnahmen lassen
                sich gezielt Manipulationen produzieren, die vom einfachen
                Interessenten Daheim bis hin zum Deepfake Profi erstellbar sind.
                Die Ergebnisse sind dabei sehr realistisch und die Fälschung mit
                dem bloßen Augen zum Teil schwer erkennbar.
                <br />
              </p>
            }
          />

          <SubHeader title={'2. Welche Hardware Voraussetzungen gibt es?'} />
          <StyledText
            text={
              <p>
                Um eine ungefähre Einschätzung zu haben, welche
                Hardwareanforderungen am besten sind hilft dir vielleicht
                folgendes Video: (Video Hardwaretest)
              </p>
            }
          />
          <SubHeader
            title={'3. Wie lange gibt es Deepfakes eigentlich schon?'}
          />

          <StyledText
            text={
              <p>
                Deepfakes sind eine neuartige Technologie. Der Begriff Deepfake
                wurde im Jahr 2017 das erste Mal genannt.
              </p>
            }
          />

          <SubHeader title={'4. Wie funktionieren Deepfakes?'} />

          <StyledText
            text={
              <p>
                Die Technologie hinter Deepfakes ist das sogenannte Deep
                Learning. Deep Learning gehört in der Informatik zum Bereich der
                Künstliche Intelligenz und ist wiederum ein Teilbereich des
                sogenannten Machine Learnings (dt. Maschinelles Lernen). Ziel
                des Machine Learnings, sowie des Deep Learnings ist, dass
                IT-Systeme wie Computer bzw. Maschinen im Allgemeinen genauso
                fähig sind zu Lernen und zu Denken wie wir Menschen.{' '}
                <a href="#" className="text-blue-400 underline">
                  mehr
                </a>
              </p>
            }
          />

          <SubHeader
            title={'5. Muss ich für DeepFaceLab oder Google Colab bezahlen?'}
          />

          <StyledText
            text={
              <p>
                Die Nutzung von DeepFaceLab ist kostenlos und einfach über
                folgenden Link zu erhalten:
                <br />
                <br />
                <a
                  className="text-blue-400 underline"
                  href="https://github.com/iperov/DeepFaceLab#releases"
                >
                  Github: DeepFaceLab
                </a>
                <br />
                <br />
                Google Colab ist bis zu einer Trainingszeit von 12 Stunden
                kostenlos nutzbar.
              </p>
            }
          />
        </div>
      </main>
    </div>
  )
}

export default faq
