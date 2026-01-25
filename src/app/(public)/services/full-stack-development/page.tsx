import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Code2, Database, Server, Cloud, Layers, Globe, Activity, Terminal, ShieldCheck, Zap } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
    title: 'Full Stack Development | End-to-End Web Solutions',
    description: 'Expert end-to-end full stack development. We handle frontend, backend, database architecture, and cloud deployment using modern MERN & Next.js stacks.',
    keywords: ['full stack dev', 'MERN stack', 'Next.js architecture', 'backend engineering', 'cloud deployment'],
    openGraph: {
        title: 'Full Stack Development | Robust Scalable Applications',
        description: 'Building robust, scalable, and high-performance full-stack applications.',
        url: 'https://www.coderschain.com/services/full-stack-development',
    },
};

const serviceData = {
    title: 'Full Stack Development',
    heroDescription: 'From responsive user interfaces to robust server architectures, we deliver comprehensive web solutions that are built for performance, security, and limitless scale.',
    highlights: [
        {
            title: 'Frontend Mastery',
            description: 'Creating high-fidelity, interactive user interfaces with React, Next.js, and advanced CSS.',
            icon: <Code2 className="w-6 h-6 text-[#fe78b8]" />
        },
        {
            title: 'Robust Backend',
            description: 'Scalable server-side logic and API architectures built with Node.js, NestJS, and Python.',
            icon: <Server className="w-6 h-6 text-[#ce3ef4]" />
        },
        {
            title: 'Cloud Core',
            description: 'Optimized deployment and infrastructure management on AWS, Vercel, and GCP.',
            icon: <Cloud className="w-6 h-6 text-blue-500" />
        }
    ],
    features: [
        {
            title: 'Dynamic UI/UX',
            description: 'Pixel-perfect implementations of complex designs with smooth motion and accessibility.',
            icon: '🎨'
        },
        {
            title: 'API Orchestration',
            description: 'Designing efficient RESTful and GraphQL APIs that power seamless data flow.',
            icon: '🔌'
        },
        {
            title: 'Database Engineering',
            description: 'Relational (PostgreSQL) and NoSQL (MongoDB) schemas designed for high-concurrency.',
            icon: '🗄️'
        },
        {
            title: 'Real-time Engines',
            description: 'Implementing WebSockets and specialized pub-sub systems for instant data updates.',
            icon: '⚡'
        },
        {
            title: 'DevOps & CI/CD',
            description: 'Automated testing and deployment pipelines that ensure 99.9% uptime and stability.',
            icon: '🚀'
        },
        {
            title: 'Enterprise Security',
            description: 'JWT, OAuth2, and advanced encryption to keep your application and data secure.',
            icon: '🛡️'
        }
    ],
    process: [
        {
            step: '01. Blueprints',
            description: 'Defining the technical architecture, data structures, and user flows before coding.'
        },
        {
            step: '02. Core Dev',
            description: 'Building the foundational backend and database systems while crafting the frontend components.'
        },
        {
            step: '03. Logic Sync',
            description: 'Integrating frontend and backend through well-documented, type-safe API layers.'
        },
        {
            step: '04. Hardened QA',
            description: 'Unit, integration, and end-to-end testing to ensure every edge case is covered.'
        },
        {
            step: '05. Ship & Scale',
            description: 'Deploying to the cloud and setting up auto-scaling and observability monitoring.'
        }
    ]
};

export default function FullStackDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Technical Excellence Section */}
            <section className="py-24 bg-gray-50/50 dark:bg-neutral-950/50 border-y border-gray-100 dark:border-white/5">
                <div className="container-web mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-bold uppercase tracking-wider">
                                <Terminal className="w-4 h-4" />
                                Engineering Mastery
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                End-to-End Solutions for <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Modern Enterprises.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                We handle the entire engineering lifecycle. By owning both the frontend and backend, we eliminate friction, optimize performance across the stack, and deliver cohesive digital products that are ready for the global stage.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {serviceData.highlights.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-neutral-500">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 blur-3xl rounded-full" />
                            <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <Database className="w-24 h-24 text-indigo-500/50 group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Stack We Command</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Frontend', tech: 'React, Next.js' },
                                            { label: 'Backend', tech: 'Node.js, NestJS' },
                                            { label: 'Storage', tech: 'Postgres, Mongo' },
                                            { label: 'Cloud', tech: 'AWS, Vercel' }
                                        ].map((item) => (
                                            <div key={item.label} className="p-3 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl">
                                                <p className="text-[10px] uppercase tracking-widest text-[#ce3ef4] font-bold mb-1">{item.label}</p>
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.tech}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />

            {/* Global Scale Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Global Scale</h2>
                        <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            We don't just build features; we build systems. Our engineering principles ensure your application stays fast and reliable as you grow from ten to ten million users.
                        </p>
                    </motion.div>
                </div>
                <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Type-Safe Code', desc: 'Everything is built with TypeScript to catch errors early and ensure long-term maintainability.', icon: <Activity className="w-10 h-10 text-indigo-500" /> },
                        { title: 'Zero-Downtime', desc: 'Immutable deployments and automated rollbacks mean your service never skips a beat.', icon: <Zap className="w-10 h-10 text-yellow-500" /> },
                        { title: 'Compliance Ready', desc: 'Solutions that respect GDPR, HIPAA, and industry-standard security protocols.', icon: <ShieldCheck className="w-10 h-10 text-green-500" /> }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-indigo-500/20 transition-all group shadow-sm"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="full-stack-development" />
            <ServiceCTASection />
        </div>
    );
}
