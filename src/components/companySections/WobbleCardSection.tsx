"use client";

import React, { useEffect, useState } from "react";
import { WobbleCard } from "../ui/wobble-card";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import freeanimation from "./lottie/freecode.json"
import communityanimation from "./lottie/community.json"

export function WobbleCardSection() {
    return (
        <div className="bg-[#f7f4ed]/60 dark:bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full container-web">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className="flex items-center justify-between"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Unlock Free Coding Projects & Source Code
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Access a curated library of real-world web development projects, complete with source code. Perfect for students, final-year projects, and developers looking to learn by building.
                        </p>
                    </div>
                    <Lottie
                        className="max-w-80"
                        animationData={freeanimation}
                        loop={true}
                        autoplay={true}
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] ">
                    <div>
                        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Latest Tech Blogs & Coding Tutorials
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            Stay updated with the newest trends in programming, web development, and technology. Our blogs and tutorials help you grow your skills and stay ahead.
                        </p>
                    </div>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="max-w-2xl">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Join a Thriving Community of Developers
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Connect, collaborate, and get help on your projects. CodersChain brings together coders from around the world to share knowledge and build together-free for everyone.
                        </p>
                    </div>
                    {/* community */}
                    <Lottie
                        className="max-w-80"
                        animationData={communityanimation}
                        loop={true}
                        autoplay={true}
                    />
                </WobbleCard>
            </div>
        </div>
    );
}