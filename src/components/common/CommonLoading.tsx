import { LoaderFive } from "@/components/ui/loader";
import React from 'react'

function CommonLoading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <LoaderFive text="Loading Awesome Content..." />
        </div>
    )
}

export default CommonLoading