import { motion } from 'framer-motion'
import { Head } from 'next/document'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import StyledText from '../../components/StyledText'

function impressum() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
        <MainHeader title={'Impressum'}></MainHeader>
        <div
          className={
            'z-10 flex  flex-1 flex-col items-center  bg-bgMain/40 px-8 py-10 shadow-3xl  backdrop-blur-md'
          }
        >
          <StyledText
            text={
              <>
                <p className={'text-heinzBlau'}>
                  Angaben gem&auml;&szlig; &sect; 5 TMG
                </p>
                <p>
                  Oliver Hofmann
                  <br />
                  &#91;Stra&szlig;e&#93;
                  <br />
                  &#91;Postleitzahl&#93; N&uuml;rnberg
                </p>

                <p className={'text-heinzBlau'}>Kontakt</p>
                <p>
                  Telefon: &#91;Telefonnummer&#93;
                  <br />
                  E-Mail: oliver.hofmann@th-nuernberg.de
                </p>

                <p className={'text-heinzBlau'}>Redaktionell verantwortlich</p>
                <p>
                  Sophie Harms, Selin Schmitt, Tobias Hartmann, Jonas Krug, Nico
                  Mayer
                </p>

                <p>
                  Quelle:{' '}
                  <a
                    className={'text-heinzOrange'}
                    href="https://www.e-recht24.de/impressum-generator.html"
                  >
                    https://www.e-recht24.de/impressum-generator.html
                  </a>
                </p>
              </>
            }
          />
        </div>
      </main>
    </div>
  )
}

export default impressum
