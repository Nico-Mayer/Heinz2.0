import React, { useState } from 'react'
import router from 'next/router'

function Tile({ title, text, imgSrc, url }) {
  const [mouseOver, setMouseOver] = useState(false)

  return (
    <div
      className={
        'flex h-96 w-1/2 cursor-pointer flex-col items-center pt-4 transition-all duration-500 hover:bg-heinzBlau hover:opacity-100'
      }
      onClick={() => {
        router.push(url)
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <h1 className={'text-3xl'}>{title}</h1>
      <div className="my-auto">
        {mouseOver ? (
          <p className="mb-10 text-xl">{text}</p>
        ) : (
          <img className="max-h-72 justify-self-center" src={`${imgSrc}`} />
        )}
      </div>
    </div>
  )
}

export default Tile
