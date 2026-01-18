"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, ExternalLink, Github, Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { CaseStudy } from "./data/caseStudies"
import { useState, useRef, useEffect } from "react"

interface CaseStudyDetailProps {
    study: CaseStudy
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
    const router = useRouter()
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [showPlayButton, setShowPlayButton] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    // Initialize video state
    useEffect(() => {
        const video = videoRef.current
        if (video) {
            const handleLoadStart = () => setIsLoading(true)
            const handleCanPlay = () => setIsLoading(false)
            const handleError = () => {
                setIsLoading(false)
                setHasError(true)
            }

            video.addEventListener('loadstart', handleLoadStart)
            video.addEventListener('canplay', handleCanPlay)
            video.addEventListener('error', handleError)

            return () => {
                video.removeEventListener('loadstart', handleLoadStart)
                video.removeEventListener('canplay', handleCanPlay)
                video.removeEventListener('error', handleError)
            }
        }
    }, [])

    const togglePlay = async () => {
        const video = videoRef.current
        if (!video) return

        try {
            if (isPlaying) {
                video.pause()
                setIsPlaying(false)
            } else {
                setIsLoading(true)
                await video.play()
                setIsPlaying(true)
                setShowPlayButton(false)
            }
        } catch (error) {
            console.error('Error playing video:', error)
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (video) {
            video.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const handleVideoClick = () => {
        togglePlay()
    }

    const handleVideoEnd = () => {
        setIsPlaying(false)
        setShowPlayButton(true)
    }

    const handleVideoPlay = () => {
        setIsPlaying(true)
        setShowPlayButton(false)
        setIsLoading(false)
    }

    const handleVideoPause = () => {
        setIsPlaying(false)
    }

    return (
        <div className="container-web min-h-screen bg-background">
            {/* Back Button */}
            <div className="bg-background/80 backdrop-blur-sm border-b pb-2">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <Button
                        variant="ghost"
                        className="mt-4 -ml-2"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Button>
                </div>
            </div>

            {/* Video Hero Section */}
            <section className="w-full relative bg-black">
                <div className="relative aspect-video w-full max-w-7xl mx-auto" style={{height:"540px"}}>
                    {/* Video Player */}
                    <div className="relative w-full h-full">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster={study.video?.thumbnail || study.image}
                            muted={isMuted}
                            onEnded={handleVideoEnd}
                            onPlay={handleVideoPlay}
                            onPause={handleVideoPause}
                            preload="metadata"
                            playsInline
                        >
                            <source src={study.video?.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Video Overlay */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
                                }`}
                        />

                        {/* Loading State */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <div className="flex items-center gap-3 text-white">
                                    <Loader2 className="w-8 h-8 animate-spin" />
                                    <span className="text-lg">Loading video...</span>
                                </div>
                            </div>
                        )}

                        {/* Error State */}
                        {hasError && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <div className="text-center text-white">
                                    <div className="text-lg mb-2">Video unavailable</div>
                                    <div className="text-sm text-white/70 mb-4">
                                        Could not load the project video.
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="border-white text-white hover:bg-white/20"
                                        onClick={() => setHasError(false)}
                                    >
                                        Try Again
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Play/Pause Button - Center */}
                        {!isLoading && !hasError && showPlayButton && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={togglePlay}
                                    className="group bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 md:p-6 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                    disabled={isLoading}
                                >
                                    <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white group-hover:scale-105 transition-transform" />
                                </button>
                            </div>
                        )}

                        {/* Video Controls - Bottom Right */}
                        {!isLoading && !hasError && (
                            <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                {/* Mute/Unmute Button */}
                                <button
                                    onClick={toggleMute}
                                    className="bg-black/60 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-black/80 transition-all duration-200"
                                    disabled={isLoading}
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    ) : (
                                        <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    )}
                                </button>

                                {/* Play/Pause Button */}
                                <button
                                    onClick={togglePlay}
                                    className="bg-black/60 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-black/80 transition-all duration-200"
                                    disabled={isLoading}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    ) : (
                                        <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
                                    )}
                                </button>
                            </div>
                        )}

                        {/* Project Badge - Top Left */}
                        <div className="absolute top-4 left-4">
                            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                                Case Study
                            </Badge>
                        </div>

                        {/* Project Title Overlay - Bottom Left */}
                        <div className="absolute bottom-4 left-4 max-w-2xl">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                {study.title}
                            </h1>
                            <p className="text-white/80 text-sm md:text-base">
                                {study.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="w-full py-12 md:py-16 bg-background">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.description}
                                </p>
                            </div>

                            {/* Project Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">The Challenge</h3>
                                        <ul className="space-y-3">
                                            {study.challenges.slice(0, 3).map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-muted-foreground text-sm">
                                                        {challenge}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lg mb-4">Our Approach</h3>
                                        <ul className="space-y-3">
                                            {study.solutions.slice(0, 3).map((solution, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-muted-foreground text-sm">
                                                        {solution}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>

            {/* Technologies & Implementation */}
            <section className="w-full py-12 md:py-16 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Technologies */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                {study.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="px-4 py-2 text-sm bg-background border"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Challenges & Solutions */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Implementation Details</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 text-destructive">Key Challenges</h3>
                                    <ul className="space-y-2">
                                        {study.challenges.map((challenge, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-muted-foreground text-sm">
                                                    {challenge}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3 text-primary">Our Solutions</h3>
                                    <ul className="space-y-2">
                                        {study.solutions.map((solution, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-muted-foreground text-sm">
                                                    {solution}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section (if available) */}
            {study.gallery && study.gallery.length > 0 && (
                <section className="w-full py-12 md:py-16">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {study.gallery.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-video bg-muted rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                        <div className="text-center text-muted-foreground">
                                            <div className="text-sm">Project Screenshot</div>
                                            <div className="text-xs">Image {index + 1}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonial */}
            <section className="w-full py-12 md:py-16 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-4xl px-4 md:px-6">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-6 bg-primary-foreground/20 text-primary-foreground">
                            Client Testimonial
                        </Badge>
                        <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
                            &ldquo;{study.testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            {study.testimonial.avatar && (
                                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center border-2 border-primary-foreground/30">
                                    <div className="w-12 h-12 rounded-full bg-primary-foreground/30" />
                                </div>
                            )}
                            <div className="text-left">
                                <div className="font-semibold text-lg">{study.testimonial.author}</div>
                                <div className="text-primary-foreground/80">{study.testimonial.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-16">
                <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Inspired by This Project?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let&apos;s collaborate to bring your vision to life with the same level of excellence and attention to detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="px-8 py-3 text-lg">
                            Start Your Project Today
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                            Schedule Free Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}