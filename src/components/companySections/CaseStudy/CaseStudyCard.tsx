"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { CaseStudy } from "./data/caseStudies"
import { motion } from "framer-motion"
import Image from "next/image"

interface CaseStudyCardProps {
    study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
    const router = useRouter()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-neutral-200 dark:border-white/5 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            onClick={() => router.push(`/showcase/${study.slug}`)}
        >
            {/* Image Header */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                        {study.categories[0].replace('-', ' ')}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-500">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Featured Project</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter dark:text-white leading-none">
                        {study.title}
                    </h3>
                    <p className="text-gray-500 dark:text-neutral-400 font-medium leading-relaxed">
                        {study.excerpt}
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-100 dark:border-white/5">
                    {study.results.map((result, index) => (
                        <div key={index} className="space-y-1">
                            <div className="text-xl md:text-2xl font-black dark:text-white">{result.metric}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{result.label}</div>
                        </div>
                    ))}
                </div>

                <div className="pt-4 flex items-center justify-between group/btn">
                    <span className="text-xs font-black uppercase tracking-[0.2em] dark:text-white group-hover/btn:text-purple-500 transition-colors">
                        Explore Case Study
                    </span>
                    <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover/btn:bg-purple-600 transition-colors">
                        <ArrowRight className="w-5 h-5 dark:text-white group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
