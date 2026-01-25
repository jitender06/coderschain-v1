"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Check, Sparkles, Globe, Clock, Layout, Rocket, BarChart3, Smartphone } from "lucide-react"
import { useRouter } from "next/navigation"
import { CaseStudy } from "./data/caseStudies"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"

interface CaseStudyDetailProps {
    study: CaseStudy
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
    const router = useRouter()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])

    return (
        <div ref={containerRef} className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-white selection:bg-purple-500/30">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="pointer-events-auto">
                    <Button
                        variant="ghost"
                        className="text-white hover:bg-white/10 rounded-full"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </Button>
                </motion.div>
            </nav>

            {/* Cinematic Hero */}
            <section className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
                </motion.div>

                <div className="relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-8">
                            <Sparkles className="w-3 h-3" />
                            Case Study 2024
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            {study.title}
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                            {study.excerpt}
                        </p>
                    </motion.div>
                </div>

                {/* Hero Stats */}
                <div className="absolute bottom-12 left-0 right-0 z-10 border-t border-white/10 pt-8 mt-20">
                    <div className="container-web mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {study.results.map((res, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="space-y-1"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-white">{res.metric}</div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{res.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 relative">
                <div className="container-web mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Info Sidebar */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-500">Client</h3>
                                <p className="text-2xl font-bold dark:text-white">{study.client}</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-500">Duration</h3>
                                <p className="text-2xl font-bold dark:text-white">{study.duration}</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-purple-500">Industry</h3>
                                <div className="flex flex-wrap gap-2">
                                    {study.categories.map(cat => (
                                        <Badge key={cat} variant="secondary" className="px-3 py-1 bg-gray-50 dark:bg-neutral-900 border-none rounded-lg text-xs font-bold uppercase tracking-wider">
                                            {cat.replace('-', ' ')}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Body */}
                        <div className="lg:col-span-8 space-y-24">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight dark:text-white">Project Overview</h2>
                                <p className="text-xl text-gray-500 dark:text-neutral-400 leading-relaxed font-medium">
                                    {study.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                                        <BarChart3 className="text-red-500 w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black dark:text-white uppercase tracking-tighter">The Challenge</h3>
                                    <ul className="space-y-4">
                                        {study.challenges.map((c, i) => (
                                            <li key={i} className="flex gap-4 items-start text-gray-500 dark:text-neutral-400 font-medium leading-tight">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-8">
                                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                                        <Rocket className="text-green-500 w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black dark:text-white uppercase tracking-tighter">The Solution</h3>
                                    <ul className="space-y-4">
                                        {study.solutions.map((s, i) => (
                                            <li key={i} className="flex gap-4 items-start text-gray-500 dark:text-neutral-400 font-medium leading-tight">
                                                <Check className="mt-1 text-green-500 w-4 h-4 flex-shrink-0" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Break */}
            <section className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-white/5">
                <Image
                    src={study.image}
                    alt="Detail wide view"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    unoptimized
                />
            </section>

            {/* Technologies */}
            <section className="py-32 bg-gray-50 dark:bg-black/50">
                <div className="container-web mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 mb-12">Engineered With</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {study.technologies.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-8 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-2xl shadow-sm"
                            >
                                <span className="text-lg font-black dark:text-white">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Testimonial */}
            <section className="py-40 bg-purple-600">
                <div className="container-web mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="flex justify-center italic text-white/40 text-8xl h-10 leading-none">"</div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                            {study.testimonial.quote}
                        </h2>
                        <div className="pt-8 border-t border-white/20 inline-block">
                            <div className="text-xl font-black text-white">{study.testimonial.author}</div>
                            <div className="text-purple-200 font-bold uppercase tracking-widest text-xs mt-2">{study.testimonial.position}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Footer CTA */}
            <section className="py-32 border-t border-neutral-200 dark:border-white/5">
                <div className="container-web mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 dark:text-white">Next Project</h2>
                    <Link href="/showcase">
                        <span className="inline-flex items-center gap-4 text-2xl font-black text-gray-500 hover:text-purple-500 transition-colors group cursor-pointer">
                            View Showcase
                            <ArrowLeft className="w-8 h-8 rotate-180 group-hover:translate-x-4 transition-transform" />
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

function DetailItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-6 p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-purple-500" />
            </div>
            <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1">{label}</div>
                <div className="text-xl font-bold dark:text-white tracking-tight">{value}</div>
            </div>
        </div>
    )
}