"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "Synapse AI Analytics",
        category: "Artificial Intelligence",
        description: "Advanced business intelligence platform with predictive modeling and real-time data visualization.",
        image: "/projects/ai-dashboard.png",
        tags: ["React", "Python", "AI", "Tailwind"],
        link: "/showcase/synapse-ai"
    },
    {
        id: 2,
        title: "The Modernist",
        category: "E-commerce",
        description: "A luxury fashion platform focused on minimalist aesthetics and seamless shopping experiences.",
        image: "/projects/ecom.png",
        tags: ["Next.js", "Stripe", "UX Design"],
        link: "/showcase/modernist"
    },
    {
        id: 3,
        title: "Catalyst SaaS",
        category: "Productivity",
        description: "Enterprise project management tool designed for agile teams and global collaboration.",
        image: "/projects/saas-img.png",
        tags: ["TypeScript", "Node.js", "SaaS"],
        link: "/showcase/catalyst"
    },
    {
        id: 4,
        title: "Orbit Crypto Wallet",
        category: "Fintech",
        description: "Next-generation digital asset wallet with multi-chain support and military-grade security.",
        image: "/projects/crypto-wallet.png",
        tags: ["Web3", "Ethereum", "Mobile"],
        link: "/showcase/orbit"
    }
]

export default function ProjectShowcase() {
    return (
        <section className="bg-white dark:bg-black overflow-hidden">
            <div className="container-web mx-auto px-4 md:px-6">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]"
                        >
                            Our <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">Digital Craft</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
                        >
                            We build products that people love to use. From high-scale enterprise platforms to disruptive startup MVPs, our portfolio represents our commitment to excellence.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 group text-gray-900 dark:text-white font-semibold hover:text-[#ce3ef4] transition-colors"
                        >
                            Start a project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects?.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Footer Action */}
                <div className="mt-20 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="/showcase">
                            <button className="group relative px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Full Showcase
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false)
    console.log(project.image, ":>DSfsdf")
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-white/10">
                <Image
                    src={project?.image}
                    alt={project?.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Tags (Top Right) */}
                <div className="absolute top-6 right-6 flex gap-2">
                    {project.tags.slice(0, 2).map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <motion.div
                        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="text-[#fe78b8] text-sm font-bold uppercase tracking-widest">
                            {project.category}
                        </span>
                        <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white group-hover:text-white transition-colors">
                            {project.title}
                        </h3>

                        <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                                {project.description}
                            </p>
                            <Link
                                href={project.link}
                                className="mt-6 inline-flex items-center gap-2 text-white font-bold group/btn"
                            >
                                View Project
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-[#ce3ef4] transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}