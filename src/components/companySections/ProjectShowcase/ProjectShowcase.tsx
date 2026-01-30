"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

// const projects = [
//     {
//         id: 1,
//         title: "Synapse AI Analytics",
//         category: "Artificial Intelligence",
//         description: "Advanced business intelligence platform with predictive modeling and real-time data visualization. Built for enterprise scalability.",
//         image: "/projects/synapse-ai.png",
//         tags: ["React", "Python", "HuggingFace"],
//         link: "/showcase/synapse-ai",
//         span: "md:col-span-2 md:row-span-2"
//     },
//     {
//         id: 2,
//         title: "The Modernist",
//         category: "Luxury E-commerce",
//         description: "High-end fashion platform focused on minimalist aesthetics and seamless checkout.",
//         image: "/projects/the-modernist.png",
//         tags: ["Next.js", "Stripe"],
//         link: "/showcase/modernist",
//         span: "md:col-span-1 md:row-span-1"
//     },
//     {
//         id: 3,
//         title: "Orbit Crypto Wallet",
//         category: "Fintech",
//         description: "Ultra-secure digital asset management with multi-chain support.",
//         image: "/projects/orbit-crypto.png",
//         tags: ["Web3", "Mobile"],
//         link: "/showcase/orbit",
//         span: "md:col-span-1 md:row-span-1"
//     },
//     {
//         id: 4,
//         title: "Catalyst SaaS",
//         category: "Enterprise Software",
//         description: "Next-gen project management tool designed for global distributed teams.",
//         image: "/projects/catalyst-saas.png",
//         tags: ["SaaS", "TypeScript"],
//         link: "/showcase/catalyst",
//         span: "md:col-span-1 md:row-span-2"
//     },
//     {
//         id: 5,
//         title: "EchoStream",
//         category: "Creative Media",
//         description: "Immersive media streaming with real-time waveform visualization.",
//         image: "/projects/echostream.png",
//         tags: ["Node.js", "Creative"],
//         link: "/showcase/echostream",
//         span: "md:col-span-2 md:row-span-1"
//     },
//     {
//         id: 7,
//         title: "Nexus Global Market",
//         category: "E-commerce",
//         description: "Scaleable marketplace for global trade with multi-currency support.",
//         image: "/projects/ai-fraud.png", // Corrected path
//         tags: ["Next.js", "Analytics"],
//         link: "/showcase/nexus",
//         span: "md:col-span-2 md:row-span-1"
//     },
//     {
//         id: 6,
//         title: "VibeCheck Social",
//         category: "Consumer App",
//         description: "Community-driven social platform focused on vertical content and Gen-Z engagement flows.",
//         image: "/projects/vibecheck.png",
//         tags: ["React Native", "Firebase"],
//         link: "/showcase/vibecheck",
//         span: "md:col-span-3 md:row-span-1"
//     }
// ]

const projects = [
    {
        id: 1,
        title: "KeyVault Digital Marketplace",
        category: "Digital E-commerce",
        description: "A secure digital commerce platform for selling software licenses, game keys, and downloadable products.",
        image: "/projects/digital.png",
        tags: ["Next.js", "Stripe", "Secure Delivery"],
        link: "/showcase/keyvault",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 2,
        title: "RoutineFlux",
        category: "Productivity App",
        description: "The all-in-one tool to manage tasks, build strong habits, and visualize your progress with precision.",
        image: "/projects/rf.png",
        tags: ["ReactJs", "PWA", "Habit Tracking"],
        link: "/showcase/routineflux",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        title: "MediBook Health",
        category: "Healthcare Platform",
        description: "Appointment and clinic management system ensuring digital records privacy.",
        image: "/projects/health.jpg",
        tags: ["Healthcare", "Appointments"],
        link: "/showcase/medibook",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        title: "ServeEasy Suite",
        category: "Restaurant Management",
        description: "End-to-end management system including table reservations and online ordering.",
        image: "/projects/res.jpg",
        tags: ["POS", "Ordering", "Admin Panel"],
        link: "/showcase/serveeasy",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 5,
        title: "TeamFlow Workspace",
        category: "Project Management",
        description: "Collaborative platform for teams with task tracking and real-time collaboration.",
        image: "/projects/team.jpg",
        tags: ["SaaS", "Productivity"],
        link: "/showcase/teamflow",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 6,
        title: "PropEase Management",
        category: "Real Estate Tech",
        description: "Comprehensive system for listing properties and managing leads.",
        image: "/projects/prop.jpg",
        tags: ["Real Estate", "CRM"],
        link: "/showcase/propease",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 7,
        title: "HireSense AI",
        category: "AI Hiring Platform",
        description: "AI-powered recruitment platform that screens resumes and ranks candidates.",
        image: "/projects/ai.png",
        tags: ["AI", "Next.js", "Resume Parsing"],
        link: "/showcase/hiresense",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 8,
        title: "MentorConnect",
        category: "EdTech / Marketplace",
        description: "Personalized learning platform connecting learners with verified experts.",
        image: "/projects/mentor-2.png",
        tags: ["Marketplace", "Video Sessions", "Payments"],
        link: "/showcase/mentorconnect",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 9,
        title: "FitCreator SaaS",
        category: "Fitness & Creator SaaS",
        description: "All-in-one SaaS platform for fitness influencers and coaches to manage clients.",
        image: "/projects/fitness-2.png",
        tags: ["SaaS", "Subscriptions", "Dashboards"],
        link: "/showcase/fitcreator",
        span: "md:col-span-1 md:row-span-1"
    }
];
export default function ProjectShowcase() {
    return (
        <section className="pb-32 bg-white dark:bg-black overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container-web mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe78b8]/10 border border-[#fe78b8]/20 text-[#fe78b8] text-xs font-black uppercase tracking-tighter mb-6"
                        >
                            <Sparkles className="w-3 h-3" />
                            Premium Portfolio
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.95]"
                        >
                            Our <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent italic pr-2">Boutique</span> Showcase
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-8 text-xl text-gray-600 dark:text-neutral-400 leading-relaxed font-medium max-w-lg"
                        >
                            We don't just ship features; we engineer competitive advantages. Explore our work in AI, Fintech, and high-scale consumer applications.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 bg-gray-950 dark:bg-white text-white dark:text-black px-8 py-5 rounded-3xl font-black text-lg hover:shadow-[0_20px_40px_-15px_rgba(206,62,244,0.3)] transition-all active:scale-95"
                        >
                            Start project
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-24 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-gray-500 mb-8 font-black uppercase tracking-widest text-sm">Got a vision?</p>
                        <Link href="/contact">
                            <span className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white hover:text-[#ce3ef4] transition-colors flex items-center gap-4 group cursor-pointer tracking-tighter">
                                Let's Discuss Your Project
                                <ArrowRight className="w-10 h-10 md:w-16 md:h-16 group-hover:translate-x-4 transition-transform duration-500" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 cursor-pointer ${project.span} min-h-[350px] shadow-2xl`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={project.link} className="absolute inset-0 z-30">
                <span className="sr-only transition-colors">{project.title}</span>
            </Link>

            <div className="absolute inset-0 z-0">
                <Image
                    src={project?.image}
                    alt={project?.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-60"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                />
            </div>

            {/* Premium Gradient Overlays - Darker for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10 opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-linear-to-tr from-[#fe78b8]/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-6 left-6 z-40">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    {project.category}
                </span>
            </div>

            <div className="absolute inset-0 z-40 flex flex-col justify-end p-8 md:p-8 pointer-events-none">
                <motion.div
                    animate={{ y: isHovered ? 0 : 5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-3"
                >
                    <div className="flex flex-wrap gap-2 mb-1">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] font-bold text-white/90 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">{tag}</span>
                        ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                        {project.title}
                    </h3>
                    <p className={`text-white/80 text-sm font-medium leading-relaxed max-w-md overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                        {project.description}
                    </p>
                    <div className={`flex items-center gap-2 text-[#fe78b8] font-black text-xs uppercase tracking-widest transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        View Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
