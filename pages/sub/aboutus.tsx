import { motion } from 'framer-motion'
import React from 'react'
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import StyledText from "../../components/StyledText";

function aboutus() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
        <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center">
            <div className={"z-10 flex flex-1 flex-col mb-3 justify-items-start justify-start"}>
                <MainHeader title={"About Us"}/>
            </div>
            <div className={"z-10 flex min-h-screen flex-1 flex-col items-center justify-center bg-heinzGrau ring-2 ring-heinzBlau/[.40] shadow-2xl"}>
                <SubHeader title={"Projektherkunft/ -idee"}/>
                <StyledText
                    text={"Unser Team besteht aus insgesamt 5 Personen: Jonas Krug, Nico Mayer, Selin Schmitt, Sophie Harms und Tobias Hartmann. " +
                    "Wir sind alle Studierende an der TH-Nürnberg im Bachelorstudiengang Media Engineering und befinden uns momentan im 6. Semester. " +
                    "Seit unserem 5. Semester, genauer gesagt seit Oktober 2021, beschäftigen wir uns mit diesem Projekt. Dazu gehört nicht nur die " +
                    "Erstellung eines Deepfakes, sondern auch Recherchen zu verschiedenen Softwaren, die zur Erstellung von Deepfakes benötigt werden, " +
                    "Überlegung eines Projektnamens, sowie Logos, Videoaufnahmen und Tests zum Thema „Hardware & Iterationen: wie beeinflusst die Hardware " +
                    "die Qualität eines Deepfakes?“.Hier könnt ihr die ersten Videoaufnahmen sehen, die wir als Basis für die Erstellung unserer ersten " +
                    "Deepfakes verwendet haben:"}/>
                    <img className={"w-3/4 m-5"} src={"/testvideos.png"}/>
                <StyledText text={"Übersicht unserer Arbeit in der ersten Hälfte des Projektes: \n"}/>
                <img className={"w-3/4"} src={"/roadmap.png"}/>
            </div>
        </main>
    </div>
  )
}

export default aboutus
