import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Gamepad2, Box, Maximize, Users, Activity, Sparkles, Layers, Globe, Zap, Glasses } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
    title: 'AR/VR Development | Immersive Reality Solutions',
    description: 'Bespoke Augmented and Virtual Reality development. We create immersive 3D experiences for enterprise training, retail, and entertainment using Unity, Unreal Engine, and WebXR.',
    keywords: ['AR development', 'VR development', 'augmented reality', 'virtual reality', 'immersive tech', '3D solutions'],
    openGraph: {
        title: 'AR/VR Development | Cinematic Immersive Reality',
        description: 'Transforming digital interaction through immersive AR and VR experiences.',
        url: 'https://www.coderschain.com/services/ar-vr-development',
    },
};

const serviceData = {
    title: 'AR/VR Development',
    heroDescription: 'Step into the future of interaction. We build high-fidelity Augmented and Virtual Reality experiences that bridge the gap between the physical and digital worlds.',
    highlights: [
        {
            title: 'Spatial UI/UX Design',
            description: 'Creating intuitive interfaces designed specifically for 3D environments and spatial context.',
            icon: <Maximize className="w-6 h-6 text-[#fe78b8]" />
        },
        {
            title: 'High-Fidelity Rendering',
            description: 'Photorealistic textures and lighting optimized for real-time performance on headsets and mobile.',
            icon: <Sparkles className="w-6 h-6 text-[#ce3ef4]" />
        },
        {
            title: 'Cross-Platform XR',
            description: 'Development for Meta Quest, Apple Vision Pro, HoloLens, and WebXR-enabled browsers.',
            icon: <Layers className="w-6 h-6 text-blue-500" />
        }
    ],
    features: [
        {
            title: 'Immersive Training',
            description: 'High-stakes simulations for healthcare, manufacturing, and defense in a risk-free environment.',
            icon: '🎓'
        },
        {
            title: 'AR Product Visualization',
            description: 'Allow customers to place 3D models of your products in their real-world space via mobile.',
            icon: '🛍️'
        },
        {
            title: 'Virtual Real Estate',
            description: 'Interactive, photorealistic walkthroughs of properties before they are even built.',
            icon: '🏠'
        },
        {
            title: 'XR Marketing Events',
            description: 'Engaging brand experiences that captivate audiences through interactive storytelling.',
            icon: '🎪'
        },
        {
            title: 'Digital Twins',
            description: 'Real-time 3D replicas of physical assets for monitoring, analysis, and predictive maintenance.',
            icon: '👯'
        },
        {
            title: 'Spatial Gaming',
            description: 'Developing next-generation AR/VR games with physics-based interactions and multiplayer.',
            icon: '🎮'
        }
    ],
    process: [
        {
            step: '01. Visioning',
            description: 'Defining the creative concept, storyboards, and platform strategy for your XR experience.'
        },
        {
            step: '02. 3D Creation',
            description: 'Modelers, texture artists, and animators build high-fidelity assets optimized for performance.'
        },
        {
            step: '03. Interaction Dev',
            description: 'Programming the logic, physics, and input systems that make the experience interactive.'
        },
        {
            step: '04. Optimization',
            description: 'Exhaustive profiling to ensure consistent frame rates and prevent motion sickness.'
        },
        {
            step: '05. Deployment',
            description: 'App store submission or enterprise distribution with ongoing support and updates.'
        }
    ]
};

export default function ARVRDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Immersive Capabilities Section */}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-sm font-bold uppercase tracking-wider">
                                <Glasses className="w-4 h-4" />
                                Immersive Engineering
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                Redefining Reality with <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Spatial Technology.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                We help visionary brands leverage AR and VR to solve real-world challenges. Whether it's reducing training costs by 40% or increasing e-commerce conversion through 3D visualization, our spatial experiences deliver ROI.
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-pink-600 opacity-20 blur-3xl rounded-full" />
                            <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <Gamepad2 className="w-24 h-24 text-purple-500/50 group-hover:-rotate-12 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Building the Metaverse</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Unity 6', 'Unreal Engine 5', 'Three.js', 'PlayCanvas', 'C#', 'C++', 'ARCore / ARKit'].map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:border-purple-500/30 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />

            {/* Industry Focus Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Immersive Use Cases</h2>
                        <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            AR and VR are transforming every sector. Here's how we're applying these technologies today.
                        </p>
                    </motion.div>
                </div>
                <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Healthcare', desc: 'Surgical planning and patient therapy in high-fidelity virtual environments.', icon: <Activity className="w-10 h-10 text-red-500" /> },
                        { title: 'Training & Ed', desc: 'Interactive learning modules that increase retention by up to 75%.', icon: <Users className="w-10 h-10 text-purple-500" /> },
                        { title: 'Global Retail', desc: 'Virtual showrooms and "try-before-you-buy" AR tools for global brands.', icon: <Globe className="w-10 h-10 text-blue-500" /> }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-purple-500/20 transition-all group shadow-sm"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="ar-vr-development" />
            <ServiceCTASection />
        </div>
    );
}
