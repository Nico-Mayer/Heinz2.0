import React from 'react'
import MainHeader from '../../components/MainHeader'

function videoaufnahmen() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center  text-center">
        <MainHeader title={'Videoaufnahmen'}></MainHeader>
      </main>
    </div>
  )
}

export default videoaufnahmen
