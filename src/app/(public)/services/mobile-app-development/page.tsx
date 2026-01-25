import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Smartphone, Tablet, Globe, Activity, Zap, ShieldCheck, Layers, Cpu, Compass, Rocket } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
    title: 'Mobile App Development | iOS & Android Excellence',
    description: 'Bespoke mobile app development for iOS and Android. We build high-performance native and cross-platform applications using React Native, Flutter, and Swift.',
    keywords: ['mobile apps', 'iOS development', 'Android development', 'React Native', 'Flutter agency', 'mobile UX'],
    openGraph: {
        title: 'Mobile App Development | World-Class iOS & Android Apps',
        description: 'Creating world-class mobile experiences for iOS and Android.',
        url: 'https://www.coderschain.com/services/mobile-app-development',
    },
};

const serviceData = {
    title: 'Mobile App Development',
    heroDescription: 'From high-performance native apps to cost-effective cross-platform solutions, we build mobile experiences that users love and businesses depend on.',
    highlights: [
        {
            title: 'Native Performance',
            description: 'Uncompromising speed and fluidity using platform-native languages and tools.',
            icon: <Zap className="w-6 h-6 text-[#fe78b8]" />
        },
        {
            title: 'Modern Workflows',
            description: 'Rapid iterations with React Native and Flutter to hit the market faster.',
            icon: <Layers className="w-6 h-6 text-[#ce3ef4]" />
        },
        {
            title: 'Secure by Design',
            description: 'Implementing biometric auth and advanced encryption to protect user data.',
            icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
        }
    ],
    features: [
        {
            title: 'Offline-First Apps',
            description: 'Ensuring your application remains functional and useful even without an active connection.',
            icon: '📶'
        },
        {
            title: 'Real-time Sync',
            description: 'Instant data synchronization across multiple devices with low-latency backends.',
            icon: '🔄'
        },
        {
            title: 'Push Engagement',
            description: 'Advanced notification strategies to keep your users coming back to the app.',
            icon: '🔔'
        },
        {
            title: 'Sensor Integration',
            description: 'Leveraging GPS, Camera, Accelerometer, and Biometrics for rich interactions.',
            icon: '🛰️'
        },
        {
            title: 'Smooth Animations',
            description: '60fps interactions that make the app feel alive and premium on every screen.',
            icon: '✨'
        },
        {
            title: 'Universal Presence',
            description: 'Deploy one codebase to iOS, Android, and Web without sacrificing quality.',
            icon: '🌍'
        }
    ],
    process: [
        {
            step: '01. Scoping',
            description: 'Defining the product roadmap, platform choice, and technical constraints.'
        },
        {
            step: '02. Mobile UI/UX',
            description: 'Designing finger-friendly interfaces that adhere to Human Interface and Material Design.'
        },
        {
            step: '03. Development',
            description: 'Building the app using agile sprints with bi-weekly testable builds.'
        },
        {
            step: '04. Device Labs',
            description: 'Testing on hundreds of physical iOS and Android devices to ensure total compatibility.'
        },
        {
            step: '05. App Store Go',
            description: 'Handling the complex submission process and optimizing screenshots for conversion.'
        }
    ]
};

export default function MobileAppDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Platform Innovation Section */}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-sm font-bold uppercase tracking-wider">
                                <Rocket className="w-4 h-4" />
                                Mobile First
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                Engage Your Users <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">Anywhere, Anytime.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                The mobile phone is the most personal device your customers own. We help you earn a spot on their home screen with world-class applications that are fast, intuitive, and remarkably stable.
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500 to-rose-600 opacity-20 blur-3xl rounded-full" />
                            <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <Smartphone className="w-24 h-24 text-pink-500/50 group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Mobile Stack</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['React Native', 'Flutter', 'SwiftUI', 'Kotlin', 'Expo', 'Firebase'].map((tech) => (
                                            <div key={tech} className="px-4 py-2 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl text-center">
                                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{tech}</span>
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

            {/* Performance Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for High Performance</h2>
                        <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            In the mobile world, even a small delay can lead to uninstalls. Our engineering focus is on creating the fastest apps on the store.
                        </p>
                    </motion.div>
                </div>
                <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Biometric Security', desc: 'Secure your users\' data with native FaceID and Fingerprint authentication.', icon: <ShieldCheck className="w-10 h-10 text-blue-500" /> },
                        { title: 'Global Reach', desc: 'Localization and multi-region deployment for apps used across the globe.', icon: <Compass className="w-10 h-10 text-pink-500" /> },
                        { title: 'Modern UI Kit', desc: 'Custom design systems that maintain consistency across both iOS and Android.', icon: <Cpu className="w-10 h-10 text-green-500" /> }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-pink-500/20 transition-all group shadow-sm"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="mobile-app-development" />
            <ServiceCTASection />
        </div>
    );
}
