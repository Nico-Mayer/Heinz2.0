import { motion } from 'framer-motion'
import React from 'react'

function aboutus() {
  return (
    <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
      <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 className="text-7xl font-bold text-white">About Us</h1>
        </motion.div>
      </main>
    </div>
  )
}

export default aboutus
