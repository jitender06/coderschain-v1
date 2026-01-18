"use client"
// import { Slider } from "@/components/ui/slider"
import { useEffect, useRef } from "react"

interface FrameComponentProps {
    video: string
    width: number | string
    height: number | string
    className?: string
    corner: string
    edgeHorizontal: string
    edgeVertical: string
    mediaSize: number
    borderThickness: number
    borderSize: number
    onMediaSizeChange: (value: number) => void
    onBorderThicknessChange: (value: number) => void
    onBorderSizeChange: (value: number) => void
    label: string
    autoplayMode: "all" | "hover"
    isHovered: boolean
}

export function FrameComponent({
    video,
    width,
    height,
    className = "",
    corner,
    edgeHorizontal,
    edgeVertical,
    mediaSize,
    borderThickness,
    borderSize,
    onMediaSizeChange,
    onBorderThicknessChange,
    onBorderSizeChange,
    label,
    // showFrame,
    autoplayMode,
    isHovered,
}: FrameComponentProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (autoplayMode === "all") {
            videoRef.current?.play()
        } else if (autoplayMode === "hover") {
            if (isHovered) {
                videoRef.current?.play()
            } else {
                videoRef.current?.pause()
            }
        }
    }, [isHovered, autoplayMode])

    return (
        <div
            className={`relative ${className}`}
            style={{
                width,
                height,
                transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
        >
            <div className="relative w-full h-full overflow-hidden">
                {/* Video with Border */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        zIndex: 1,
                        transition: "all 0.3s ease-in-out",
                        padding: "0",
                        width: "100%",
                        height: "100%",
                        left: "0",
                        top: "0",
                    }}
                >
                    <div
                        className="w-full h-full overflow-hidden"
                        style={{
                            transform: `scale(${mediaSize})`,
                            transformOrigin: "center",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <video
                            className="w-full h-full object-cover"
                            src={video}
                            loop
                            muted
                            playsInline
                            autoPlay={(autoplayMode === "hover" && isHovered)}
                            ref={videoRef}
                            onMouseEnter={(e) => {
                                if (autoplayMode === "hover") {
                                    e.currentTarget.play()
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (autoplayMode === "hover") {
                                    e.currentTarget.pause()
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
