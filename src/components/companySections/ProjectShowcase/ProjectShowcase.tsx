"use client"

import { useState } from "react"
import Link from "next/link"
import DynamicFrameLayout from "./DynamicFrameLayout"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectShowcase() {
    const [headerSize] = useState(1.2) // 120% is the default size
    const [textSize] = useState(0.8) // 80% is the default size

    return (
        <>
            <div
                className={`min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-8`}
            >
                <div className="mx-auto max-w-7xl px-1 pt-28 pb-20 lg:px-0 w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-20">
                    {/* Left Content */}
                    <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-16">
                            <h1
                                className={`text-4xl md:text-6xl font-light dark:text-white tracking-tighter leading-[130%]`}
                                style={{ fontSize: `${4 * headerSize}rem` }}
                            >
                                Projects
                            </h1>
                            <div
                                className={` flex flex-col gap-12 dark:text-white/50 text-sm font-light max-w-[300px]`}
                            >
                                <div className="space-y-6">
                                    <div className="h-px dark:bg-white/10 w-full bg-black" />
                                    <p>
                                        Explore how CodersChain transforms visionary ideas into powerful digital products. From custom websites and mobile apps to AI, AR/VR, and Web 3.0 solutions — our projects showcase innovation, scalability, and real-world impact across diverse industries.
                                    </p>
                                    <p>Here are some of our favorite works so far.</p>
                                    <div className="h-px dark:bg-white/10 w-full bg-black" />
                                </div>
                            </div>
                        </div>
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 border-black dark:text-white/70 border dark:border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact Now
                        </a>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
                        <DynamicFrameLayout />
                    </div>
                </div>
                <div className="pb-12">
                    <Link href={"/showcase"}>
                    <button className="group flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition-all duration-300 hover:translate-x-1 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
                        <span>Explore the Showcase</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
