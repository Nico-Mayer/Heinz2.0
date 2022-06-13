import router from 'next/router'
import React, { useState, useRef, useEffect } from 'react'

function Navbar() {
  const mobileBtn = useRef()

  const [isOpen, setIsOpen] = useState(false)

  function changePage(url) {
    setIsOpen(false)
    router.push(url)
  }

  function toggleMobileMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className="relative z-30">
      <div className=" fixed flex h-20 w-full items-center justify-between bg-bgMain/70 py-4 px-2 backdrop-blur-md md:px-10">
        <img
          src="/logo.png"
          alt="/logo.svg"
          className="w-8 cursor-pointer"
          onClick={() => changePage('/')}
        />

        <div className="text-md hidden flex-row space-x-8 text-white md:flex">
          <h3
            className="cursor-pointer  border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/deepfakes')}
          >
            Deepfakes
          </h3>
          <h3
            className="cursor-pointer border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/aboutus')}
          >
            About Us
          </h3>
          <h3
            className="cursor-pointer border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/heinzzweinull')}
          >
            Heinz 2.0
          </h3>
          <h3
            className="cursor-pointer border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/software')}
          >
            Software
          </h3>
          <h3
            className="cursor-pointer border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/tutorials')}
          >
            Tutorials
          </h3>
          <h3
            className="cursor-pointer border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/faq')}
          >
            FAQ
          </h3>
          <h3
            className="cursor-pointer border-l-2 pl-2 transition duration-300 hover:border-heinzBlau hover:text-heinzBlau"
            onClick={() => changePage('/sub/impressum')}
          >
            Impressum
          </h3>
        </div>

        <button
          ref={mobileBtn}
          className=" flex h-8 w-8 items-center  md:hidden"
          onClick={toggleMobileMenu}
        >
          <svg
            className="pointer-events-none h-full w-full text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Ab hier Mobile Menu, nicht Loeschen bitte !! */}

      <div
        className={
          'fixed mt-20 flex h-screen w-full transition-all duration-500 md:hidden ' +
          (isOpen ? '' : 'translate-x-[100%]')
        }
      >
        <div className="flex h-full w-full flex-col bg-bgMain/70 text-lg text-white backdrop-blur-md">
          <div
            className="flex h-24 w-full  cursor-pointer items-center justify-center border-t border-gray-600"
            onClick={() => changePage('/sub/deepfakes')}
          >
            Deepfakes
          </div>
          <div
            className="flex h-24 w-full  cursor-pointer items-center justify-center border-t border-gray-600"
            onClick={() => changePage('/sub/aboutus')}
          >
            About Us
          </div>
          <div
            className="flex h-24 w-full  cursor-pointer items-center justify-center border-t border-gray-600"
            onClick={() => changePage('/sub/heinzzweinull')}
          >
            Heinz 2.0
          </div>
          <div
            className="flex h-24 w-full   cursor-pointer items-center justify-center border-y border-gray-600 "
            onClick={() => changePage('/sub/software')}
          >
            Software
          </div>
          <div
            className="flex h-24 w-full   cursor-pointer items-center justify-center border-y border-gray-600 "
            onClick={() => changePage('/sub/tutorials')}
          >
            Tutorials
          </div>
          <div
            className="flex h-24 w-full   cursor-pointer items-center justify-center border-y border-gray-600 "
            onClick={() => changePage('/sub/faq')}
          >
            FAQ
          </div>
          <div
            className="flex h-24 w-full   cursor-pointer items-center justify-center border-y border-gray-600 "
            onClick={() => changePage('/sub/impressum')}
          >
            Impressum
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
