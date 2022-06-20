import React from 'react'
import MainHeader from '../../components/MainHeader'
import StyledText from '../../components/StyledText'
import SubHeader from '../../components/SubHeader'

function hienzzweinull() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center  pt-24">
      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
        <MainHeader title={'Heinz 2.0'} />

        <div
          className={
            'z-10 flex min-h-screen flex-1 flex-col items-center bg-bgMain/40 py-10 px-8 shadow-3xl   backdrop-blur-md'
          }
        >
          <SubHeader title={'Projektherkunft/ -idee'} />
          <StyledText
            text={
              <p>
                Warum eigentlich ein Projekt zum Thema Deepfakes und woher kam
                der Anreiz? <br />
                Ein sehr großer Fokus unseres Studienganges Media Engineering
                ist es, ein 1-jähriges Projekt auf die Beine zu stellen. Die
                Themen werden dabei entweder von den Professoren vorgegeben oder
                wir als Studierende dürfen unserer Kreativität freien Lauf
                lassen und uns ein eigenes Thema überlegen. Neben Projekten wie
                VR oder AR Spielen, Browseranwendungen oder Handyapps zum Thema
                Nachhaltigkeit befasst sich eine Projektgruppe, nämlich wir als
                Gruppe <span className={'text-heinzBlau'}>Heinz 2.0</span>, mit
                Deepfakes.
                <br />
              </p>
            }
          />
          <div
            className={
              'flex flex-row flex-nowrap content-evenly justify-center'
            }
          >
            <img className={'max-h-64'} src={'/bmeLogo.png'} />
            <img className={'max-h-64'} src={'/logo.svg'} />
          </div>
          <StyledText
            text={
              <p>
                Ziel unseres Projektes ist es ein möglichst realistisches
                Deepfake unseres ehemaligen Professors Heinz Brünig zu
                erstellen. Da dieser nun im Jahre 2022 in Rente geht und das
                Lehren im Hochschullalltag beiseitelegt, erstellen wir mit
                unserem Projekt{' '}
                <span className={'text-heinzBlau'}>Heinz 2.0</span> eine
                Möglichkeit Professor Brünig weiterhin im Hochschulleben
                erhalten zu können. <br />
                Grundlage unserer Arbeit sind hierbei Videos, einmal von
                Professor Brünig und einmal von einer beliebigen Person, dessen
                Mimik für das Deepfake verwendet wird. Hierbei wird die Mimik
                der Person A verwendet, um eine Fälschung von Professor Brünig
                darstellen zu können. Ein sogenannter Gesichter Tausch findet
                statt und die Person kann somit in die Rolle von Heinz Brünig
                schlüpfen. <br />
                Aber wer genau ist denn nun Heinz Brünig?
              </p>
            }
          />
          <SubHeader title={'Heinz Brünig'}></SubHeader>
          <StyledText
            text={
              <p>
                Prof. Dr. Heinz Brünig ist Professor für Angewandte Informatik,
                Interaktive Systeme, <br />
                Multimedia, Mustererkennung und Bildverarbeitung an der
                Technischen Hochschule Georg Simon Ohm in Nürnberg. Wir als
                Studierende in Media Engineering von der Fakultät EFI
                (Elektrotechnik, Feinwerktechnik, Informationstechnik) durften
                ihn bereits in den Vorlesungen Multimedia und Interaktion
                erleben. Da Prof. Brünig eine bekannte Person des
                Hochschullebens ist, ist der Effekt ihn als Star eines Deepfakes
                zu sehen, größer als der einer berühmten Persönlichkeit.
              </p>
            }
          />
          <img className={'mb-8'} src={'/heinzPortrait.jpg'} />
        </div>
      </main>
    </div>
  )
}

export default hienzzweinull
