import React, { useState } from 'react'
import StyledText from './StyledText'
import { motion } from 'framer-motion'

function Question({ text, faq }) {
  const [showQuestion, setShowQuestion] = useState(false)
  return (
    <>
      <div
        className="flex cursor-pointer items-center "
        onClick={() => setShowQuestion(!showQuestion)}
      >
        <h1 className="mb-0 w-full w-fit border-b-2 border-solid border-heinzBlau text-3xl text-heinzBlau transition duration-300 hover:border-white">
          {faq}
        </h1>
        <img
          src="/pfeilU.png"
          alt="arrow"
          className={
            `ml-8 h-6 transition-all duration-300 ` +
            (showQuestion ? 'rotate-180' : '')
          }
        />
      </div>

      {showQuestion ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
              height: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              height: 'auto',
              transition: {
                delay: 0.05,
              },
            },
          }}
          className={`mt-0s max-w-3xl bg-heinzBlau ${
            showQuestion ? 'block' : 'hidden'
          }`}
        >
          <StyledText
            text={
              <p className={'whitespace-pre-wrap text-left text-white'}>
                {text}
              </p>
            }
          />
        </motion.div>
      ) : null}
    </>
  )
}

export default Question
