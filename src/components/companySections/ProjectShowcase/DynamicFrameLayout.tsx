"use client"

import { useState } from "react"
import { motion } from "framer-motion"
// import { Slider } from "@/components/ui/slider"
// import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { FrameComponent } from "./FrameComponent"

const GRID_SIZE = 12
const CELL_SIZE = 60 // pixels per grid cell

interface Frame {
    id: number
    video: string
    defaultPos: { x: number; y: number; w: number; h: number }
    corner: string
    edgeHorizontal: string
    edgeVertical: string
    mediaSize: number
    borderThickness: number
    borderSize: number
    autoplayMode: "all" | "hover"
    isHovered: boolean
}

const initialFrames: Frame[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 0, y: 0, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 4, y: 0, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 8, y: 0, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 4,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 0, y: 4, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 5,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 4, y: 4, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 6,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 8, y: 4, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 7,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 0, y: 8, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 8,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 4, y: 8, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
    {
        id: 9,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        defaultPos: { x: 8, y: 8, w: 4, h: 4 },
        corner: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeHorizontal: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        edgeVertical: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mediaSize: 1,
        borderThickness: 0,
        borderSize: 80,
        autoplayMode: "all",
        isHovered: false,
    },
]

export default function DynamicFrameLayout() {
    const [frames, setFrames] = useState<Frame[]>(initialFrames)
    const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
    const [hoverSize, setHoverSize] = useState(6)
    const [gapSize, setGapSize] = useState(4)
    const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("hover")

    const getRowSizes = () => {
        if (hovered === null) {
            return "4fr 4fr 4fr"
        }
        const { row } = hovered
        const nonHoveredSize = (12 - hoverSize) / 2
        return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
    }

    const getColSizes = () => {
        if (hovered === null) {
            return "4fr 4fr 4fr"
        }
        const { col } = hovered
        const nonHoveredSize = (12 - hoverSize) / 2
        return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
    }

    const getTransformOrigin = (x: number, y: number) => {
        const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
        const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
        return `${vertical} ${horizontal}`
    }

    const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
        setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
    }

    // const toggleControls = () => {
    //     setShowControls(!showControls)
    // }

    // const toggleCleanInterface = () => {
    //     setCleanInterface(!cleanInterface)
    //     if (!cleanInterface) {
    //         setShowControls(false)
    //     }
    // }

    const updateCodebase = () => {
        console.log("Updating codebase with current values:")
        console.log("Hover Size:", hoverSize)
        console.log("Gap Size:", gapSize)
        console.log("Frames:", frames)
        // Here you would typically make an API call to update the codebase
        // For now, we'll just log the values
    }

    return (
        <div className="space-y-4 w-full h-full">

            <div
                className="relative w-full h-full"
                style={{
                    display: "grid",
                    gridTemplateRows: getRowSizes(),
                    gridTemplateColumns: getColSizes(),
                    gap: `${gapSize}px`,
                    transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
                }}
            >
                {frames.map((frame) => {
                    const row = Math.floor(frame.defaultPos.y / 4)
                    const col = Math.floor(frame.defaultPos.x / 4)
                    const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

                    return (
                        <motion.div
                            key={frame.id}
                            className="relative"
                            style={{
                                transformOrigin,
                                transition: "transform 0.4s ease",
                            }}
                            onMouseEnter={() => setHovered({ row, col })}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <FrameComponent
                                video={frame.video}
                                width="100%"
                                height="100%"
                                className="absolute inset-0"
                                corner={frame.corner}
                                edgeHorizontal={frame.edgeHorizontal}
                                edgeVertical={frame.edgeVertical}
                                mediaSize={frame.mediaSize}
                                borderThickness={frame.borderThickness}
                                borderSize={frame.borderSize}
                                onMediaSizeChange={(value: any) => updateFrameProperty(frame.id, "mediaSize", value)}
                                onBorderThicknessChange={(value: any) => updateFrameProperty(frame.id, "borderThickness", value)}
                                onBorderSizeChange={(value: any) => updateFrameProperty(frame.id, "borderSize", value)}
                                label={`Frame ${frame.id}`}
                                autoplayMode={autoplayMode}
                                isHovered={
                                    hovered?.row === Math.floor(frame.defaultPos.y / 4) &&
                                    hovered?.col === Math.floor(frame.defaultPos.x / 4)
                                }
                            />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
