"use client"

import { motion } from "framer-motion"
import {
    Layout,
    Smartphone,
    Cpu,
    Rocket,
    Palette,
    Glasses,
    ArrowRight,
    Check
} from "lucide-react"
import Link from "next/link"

const services = [
    {
        id: 1,
        icon: Layout,
        category: "Web Engineering",
        title: "Modern Web & PWA",
        description: "Building high-performance Progressive Web Apps (PWA) and enterprise-grade web platforms. We focus on speed, SEO, and offline-first capabilities to ensure your presence is felt everywhere.",
        features: ["Next.js & React", "PWA Optimization", "Headless CMS"],
        color: "from-blue-500/20 to-cyan-500/20",
        accent: "text-blue-500"
    },
    {
        id: 2,
        icon: Smartphone,
        category: "Mobile Solutions",
        title: "React Native & Cross-Platform",
        description: "Expert mobile app development using React Native. We deliver near-native performance for iOS and Android with a single codebase, accelerating your time to market without compromising quality.",
        features: ["React Native", "Native Modules", "App Store Success"],
        color: "from-purple-500/20 to-pink-500/20",
        accent: "text-purple-500"
    },
    {
        id: 3,
        icon: Cpu,
        category: "Artificial Intelligence",
        title: "AI & Smart Automation",
        description: "Integrating advanced LLMs and custom machine learning models into your business workflow. From intelligent chatbots to complex data analysis, we bring the power of AI to your fingertips.",
        features: ["LLM Integration", "Predictive Analytics", "Workflow Automation"],
        color: "from-pink-500/20 to-rose-500/20",
        accent: "text-pink-500"
    },
    {
        id: 4,
        icon: Rocket,
        category: "Fast-Track",
        title: "Strategic MVP Development",
        description: "Transforming your core vision into a market-ready product in record time. We specialize in rapid prototyping and lean development to help startups validate ideas and scale quickly.",
        features: ["Rapid Prototyping", "Scalable MVP", "Market Validation"],
        color: "from-orange-500/20 to-amber-500/20",
        accent: "text-orange-500"
    },
    {
        id: 5,
        icon: Palette,
        category: "Design Innovation",
        title: "Product UI/UX Design",
        description: "Creating emotive and intuitive digital journeys. Our design-first approach ensures that your product is not just functional, but a joy to use, driving user retention and brand loyalty.",
        features: ["User Research", "Interactive Prototypes", "Visual Identity"],
        color: "from-emerald-500/20 to-teal-500/20",
        accent: "text-emerald-500"
    },
    {
        id: 6,
        icon: Glasses,
        category: "Next-Gen",
        title: "AR/VR & Immersive Tech",
        description: "Designing the future with spatial computing and immersive experiences. We build AR and VR solutions that bridge the gap between digital and physical worlds for training and marketing.",
        features: ["VisionOS & Unity", "Immersive UX", "Spatial Computing"],
        color: "from-indigo-500/20 to-violet-500/20",
        accent: "text-indigo-500"
    }
]

export default function ServicesSection() {
    return (
        <section className="bg-[#f7f4ed]/60 dark:bg-background overflow-hidden border-b border-gray-100 dark:border-white/5">
            <div className="container-web mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-linear-to-r from-[#fe78b8]/10 to-[#ce3ef4]/10 border border-[#fe78b8]/20 text-[#ce3ef4] text-sm font-bold tracking-widest uppercase mb-6"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]"
                    >
                        Solutions Built for <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">Modern Business</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                        We leverage cutting-edge technologies to solve complex challenges and create digital products that define industries.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold dark:text-white mb-2">Have a vision in mind?</h3>
                        <p className="text-gray-600 dark:text-gray-400">Let's build the next big thing together.</p>
                    </div>
                    <Link href="/contact" className="group flex items-center gap-4 bg-gray-950 dark:bg-white text-white dark:text-black py-4 px-8 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                        Start a Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className={`relative h-full p-8 rounded-[2rem] bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#ce3ef4]/20`}>
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.color} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-2xl bg-white dark:bg-black shadow-lg flex items-center justify-center mb-10 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}>
                    <service.icon className={`w-7 h-7 ${service.accent}`} />
                </div>

                {/* Content */}
                <div className="relative">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2 block">
                        {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                        {service.description}
                    </p>
                </div>

                {/* Features */}
                <ul className="relative space-y-4">
                    {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-white dark:bg-black shadow-sm group-hover:bg-[#ce3ef4] group-hover:text-white transition-colors duration-300`}>
                                <Check className="w-3 h-3 transition-colors" />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}
