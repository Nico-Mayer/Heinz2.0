import router from 'next/router'
import React, { useRef } from 'react'

function Navbar() {
  const mobileMenu = useRef()
  function toggleMobileMenu() {
    console.log(mobileMenu.current)
    mobileMenu.current.classList.toggle('translate-x-[-100%]')
    //mobileMenu.current.classList.toggle('hidden')
  }

  return (
    <nav className="relative z-30">
      <div className="fixed flex h-24 w-full items-center justify-between bg-heinzGrau py-4 px-2 opacity-95 md:bg-transparent md:px-10">
        <img
          src="logo.svg"
          alt="#"
          className="w-10 cursor-pointer"
          onClick={() => router.push('/')}
        />

        <div className="text-md hidden flex-row space-x-3 text-white md:flex">
          <h3
            className="cursor-pointer transition duration-300 hover:text-heinzBlau"
            onClick={() => router.push('/sub/allgemein')}
          >
            Allgemein
          </h3>
          <h3
            className="cursor-pointer transition duration-300 hover:text-heinzBlau"
            onClick={() => router.push('/sub/project')}
          >
            Project
          </h3>
          <h3
            className="cursor-pointer transition duration-300 hover:text-heinzBlau"
            onClick={() => router.push('/sub/howTo')}
          >
            HowTo
          </h3>
          <h3
            className="cursor-pointer transition duration-300 hover:text-heinzBlau"
            onClick={() => router.push('/sub/faq')}
          >
            FAQ
          </h3>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="h-8 w-8 text-white"
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
      </div>

      <div
        ref={mobileMenu}
        className="fixed left-[100%] mt-24 flex h-80 w-full duration-500   md:left-[100%] md:hidden"
      >
        <div className="flex h-full w-full flex-col bg-heinzGrau text-lg text-white opacity-95 backdrop-blur">
          <div
            className="flex w-full flex-1 cursor-pointer items-center justify-center border-t border-gray-600"
            onClick={() => router.push('/sub/allgemein')}
          >
            Allgemein
          </div>
          <div
            className="flex w-full flex-1 cursor-pointer items-center justify-center border-t border-gray-600"
            onClick={() => router.push('/sub/project')}
          >
            Project
          </div>
          <div
            className="flex w-full flex-1 cursor-pointer items-center justify-center border-t border-gray-600"
            onClick={() => router.push('/sub/howTo')}
          >
            HowTo
          </div>
          <div
            className="flex w-full flex-1 cursor-pointer items-center justify-center border-t border-gray-600 "
            onClick={() => router.push('/sub/faq')}
          >
            FAQ
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
