import { motion } from 'framer-motion'
import { Head } from 'next/document'
import React from 'react'
import MainHeader from "../../components/MainHeader";

function faq() {
    return (
        <div className="z-10 flex min-h-screen flex-1 flex-col items-center justify-center pt-24">
            <main className="m-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-20 text-center">
                <MainHeader title={"FAQ"}></MainHeader>
            </main>
        </div>
    )
}

export default faq