import React from 'react'
import MainHeader from '../../components/MainHeader'
import StyledText from '../../components/StyledText'

function aboutus() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center  pt-24">
      <main className="mx-auto flex h-full w-full max-w-7xl flex-col items-center text-center">
        <MainHeader title={'About Us'} />

        <div
          className={
            'z-10 flex  flex-1 flex-col items-center  bg-bgMain/40 px-8 py-10 shadow-3xl  backdrop-blur-md'
          }
        >
          <StyledText
            text={
              <p>
                Unser Team besteht aus insgesamt 5 Personen: Jonas Krug, Nico
                Mayer, Selin Schmitt, Sophie Harms und Tobias Hartmann. Wir sind
                alle Studierende an der TH-Nürnberg im Bachelorstudiengang Media
                Engineering und befinden uns momentan im 6. Semester. Seit
                unserem 5. Semester, genauer gesagt seit Oktober 2021,
                beschäftigen wir uns mit diesem Projekt. Dazu gehört nicht nur
                die Erstellung eines Deepfakes, sondern auch Recherchen zu
                verschiedenen Softwaren, die zur Erstellung von Deepfakes
                benötigt werden, Überlegung eines Projektnamens, sowie Logos,
                Videoaufnahmen und Tests zum Thema „Hardware & Iterationen: wie
                beeinflusst die Hardware die Qualität eines Deepfakes?“.Hier
                könnt ihr die ersten Videoaufnahmen sehen, die wir als Basis für
                die Erstellung unserer ersten Deepfakes verwendet haben:
              </p>
            }
          />
          <video className={"mb-5"} width="750" height="500" controls >
            <source src="/videos/team.mp4" type="video/mp4"/>
          </video>
          <StyledText
            text={
              <p>
                Übersicht unserer Arbeit in der ersten Hälfte des Projektes:{' '}
                <br />
              </p>
            }
          />
          <img className={'w-3/4'} src={'/roadmap.png'} />
        </div>
      </main>
    </div>
  )
}

export default aboutus
