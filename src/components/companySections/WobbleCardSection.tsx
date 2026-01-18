"use client"

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import freeanimation from "./lottie/freecode.json"
import communityanimation from "./lottie/community.json"
import { WobbleCard } from "../ui/wobble-card";
import { motion } from "framer-motion";

export function WobbleCardSection() {
    return (
        <div className="bg-[#f7f4ed]/60 dark:bg-background border-b border-gray-100 dark:border-white/5">
            <div className="container-web md:px-6 px-4">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
                    >
                        Building the <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">Future</span> of Digital Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                        We combine strategic thinking with technical excellence to deliver custom software solutions that solve complex business challenges and drive growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <WobbleCard
                            containerClassName="h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                            className="flex items-center justify-between"
                        >
                            <div className="max-w-2xl">
                                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    Custom Web & Mobile Development Solutions
                                </h2>
                                <p className="mt-4 text-left text-base/6 text-neutral-200">
                                    Engineering high-performance web applications and cross-platform mobile apps using modern tech stacks like Next.js and React Native. Scalable, secure, and built for results.
                                </p>
                            </div>
                            <Lottie
                                className="max-w-80"
                                animationData={freeanimation}
                                loop={true}
                                autoplay={true}
                            />
                        </WobbleCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1"
                    >
                        <WobbleCard containerClassName="h-full min-h-[300px] ">
                            <div>
                                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    AI-Powered Automation & Agent Services
                                </h2>
                                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                    Stay ahead with custom AI integrations and autonomous agents. We build intelligent systems that automate workflows and enhance user intelligence.
                                </p>
                            </div>
                        </WobbleCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 lg:col-span-3"
                    >
                        <WobbleCard containerClassName="bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                            <div className="max-w-2xl px-4">
                                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    Strategic MVP Development for Startups & Enterprises
                                </h2>
                                <p className="mt-4 text-left text-base/6 text-neutral-200">
                                    Launch your vision faster with our expert MVP development services. We specialize in turning early-stage concepts into market-ready digital products with a focus on core value.
                                </p>
                            </div>
                            <Lottie
                                className="max-w-80"
                                animationData={communityanimation}
                                loop={true}
                                autoplay={true}
                            />
                        </WobbleCard>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
