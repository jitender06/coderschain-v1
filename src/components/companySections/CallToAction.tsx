import React from 'react'

function CallToAction() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full max-w-[1200px] px-4 md:px-6">
                <div className="flex justify-center items-center w-full h-[1px] bg-gradient-to-r from-transparent via-[#e669fb] to-transparent"></div>

                <div className="relative flex flex-col md:flex-row justify-center items-center w-full py-12 md:py-[60px] px-6 md:px-10 bg-[radial-gradient(circle_closest-corner_at_50%_240%,#e669fb,#fff0)] gap-8 md:gap-10">
                    <div className="flex flex-col flex-1 justify-start items-start w-full max-w-2xl text-center">
                        <h2 className="dark:text-white font-poppins text-3xl sm:text-4xl font-bold leading-[1.2]">
                            Why not supercharge your coding journey with <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">coderschain.com?</span>
                        </h2>
                        <div className="text-[#a8b3cf] font-poppins text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-4">
                            Get the latest developer news, coding tutorials, and resources every time you open a new tab.
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-[1px] bg-gradient-to-r from-transparent via-[#e669fb] to-transparent"></div>
            </div>
        </div>
    )
}

export default CallToAction