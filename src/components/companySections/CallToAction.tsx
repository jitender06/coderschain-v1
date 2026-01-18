import React from 'react'

function CallToAction() {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4">
            <div className="w-full max-w-[1200px]">
                <div className="flex justify-center items-center w-full h-[1px] bg-gradient-to-r from-transparent via-[#e669fb] to-transparent opacity-50"></div>

                <div className="relative flex flex-col justify-center items-center w-full py-20 px-6 md:px-10 bg-[radial-gradient(circle_closest-corner_at_50%_200%,#e669fb20,#fff0)] gap-8 text-center overflow-hidden rounded-3xl">
                    <div className="flex flex-col items-center w-full max-w-3xl">
                        <h2 className="text-gray-900 dark:text-white font-poppins text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                            Ready to transform your ideas into <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">digital reality?</span>
                        </h2>
                        <p className="text-gray-600 dark:text-[#a8b3cf] font-poppins text-lg sm:text-xl font-normal leading-relaxed mt-6 max-w-2xl">
                            Partner with Coderschain to build scalable platforms, intelligent AI solutions, and exceptional user experiences. Let's create something extraordinary together.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="/showcase"
                                className="px-8 py-4 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-[1px] bg-gradient-to-r from-transparent via-[#e669fb] to-transparent opacity-50"></div>
            </div>
        </div>
    )
}

export default CallToAction