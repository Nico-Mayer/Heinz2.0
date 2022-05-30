import React from "react";
import { motion } from 'framer-motion'

function MainHeader(params){
    return(
        <div className="relative rounded-full overflow-hidden">
            <img src="/haken.png"
                 className="object-cover w-full h-full"/>
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
            <h1 className="absolute w-full py-2.5 bottom-0 inset-x-0 text-4xl text-white">
                {params.title}
            </h1>
            </motion.div>
        </div>
    )
}

export default MainHeader