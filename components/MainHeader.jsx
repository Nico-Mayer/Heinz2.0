import React from 'react'
import { motion } from 'framer-motion'

function MainHeader(params) {
  return (
    <div className="relative mb-4 overflow-hidden rounded-full">
      <img src="/haken_v2.png" className="h-full w-full object-cover" />
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
        <h1 className="absolute inset-x-0 bottom-0 w-full py-2.5 text-4xl text-white">
          {params.title}
        </h1>
      </motion.div>
    </div>
  )
}

export default MainHeader
