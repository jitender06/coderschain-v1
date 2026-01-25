import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Target, TrendingUp, MousePointer2, Rocket, Search, Users, BarChart3, CheckCircle2, Zap, Layout } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
    title: 'Landing Page Development | High-Converting Sales Pages',
    description: 'Bespoke landing page development designed to convert. We build high-performance, conversion-optimized, and SEO-rich sales pages that drive leads and ROI.',
    keywords: ['landing pages', 'conversion optimization', 'sales pages', 'lead generation', 'high-performing pages'],
    openGraph: {
        title: 'Landing Page Development | Optimized for Leads & ROI',
        description: 'Turning visitors into customers with high-converting landing pages.',
        url: 'https://www.coderschain.com/services/landing-page-development',
    },
};

const serviceData = {
    title: 'Landing Page Development',
    heroDescription: 'Stop losing leads to slow, generic pages. We build high-impact, lightning-fast landing pages engineered to drive action and maximize your marketing ROI.',
    highlights: [
        {
            title: 'Conversion-First Design',
            description: 'Every element is strategically placed to guide the user toward your primary call-to-action.',
            icon: <Target className="w-6 h-6 text-[#fe78b8]" />
        },
        {
            title: 'Lightning Performance',
            description: 'Under 1s load times ensure you never lose a visitor due to technical latency.',
            icon: <Zap className="w-6 h-6 text-[#ce3ef4]" />
        },
        {
            title: 'Continuous A/B Testing',
            description: 'We refine and iterate based on real user data to squeeze every drop of ROI from your traffic.',
            icon: <BarChart3 className="w-6 h-6 text-blue-500" />
        }
    ],
    features: [
        {
            title: 'Precision Copywriting',
            description: 'Persuasive language that speaks directly to your audience\'s pain points and desires.',
            icon: '✍️'
        },
        {
            title: 'Mobile-Only Optimization',
            description: 'Not just responsive—we design specialized experiences for the mobile-first consumer.',
            icon: '📱'
        },
        {
            title: 'Psychological Triggers',
            description: 'Leveraging social proof, scarcity, and authority to drive immediate engagement.',
            icon: '🧠'
        },
        {
            title: 'Seamless Integrations',
            description: 'Connecting automatically to your CRM, Email Marketing, and Analytics tools.',
            icon: '🔗'
        },
        {
            title: 'SEO Rich Foundations',
            description: 'Full semantic optimization to ensure your pages also rank organically on Google.',
            icon: '🔍'
        },
        {
            title: 'Aesthetic Authority',
            description: 'Visually stunning designs that build instant trust and brand equity.',
            icon: '✨'
        }
    ],
    process: [
        {
            step: '01. Goal Sync',
            description: 'Defining your North Star metric—whether it\'s lead capture, sales, or downloads.'
        },
        {
            step: '02. Flow Map',
            description: 'Mapping the user journey from the first click to the final conversion event.'
        },
        {
            step: '03. Creative Dev',
            description: 'Building the visual and structural architecture designed for maximum persuasion.'
        },
        {
            step: '04. Integration',
            description: 'Wiring up your tracking pixels, forms, and backend CRM automations.'
        },
        {
            step: '05. Launch & Opt',
            description: 'Going live and monitoring heatmaps to begin the first phase of A/B optimization.'
        }
    ]
};

export default function LandingPageDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Strategic Value Section */}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold uppercase tracking-wider">
                                <TrendingUp className="w-4 h-4" />
                                Conversion Engineering
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                We build pages that <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Close the Deal.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                A landing page is more than a creative asset—it's a sales machine. We combine the psychology of persuasion with world-class engineering to ensure your marketing spend delivers the highest possible return.
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500 to-red-600 opacity-20 blur-3xl rounded-full" />
                            <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <Layout className="w-24 h-24 text-orange-500/50 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Optimized for Results</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Lead Gen', 'PPC Landing', 'SaaS Sales', 'Product Launch', 'Event Reg', 'Waitlists'].map((type) => (
                                            <span key={type} className="px-4 py-2 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition-colors">
                                                #{type}
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

            {/* Credibility Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Built to Outperform</h2>
                        <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Average landing pages are easy. High-converting pages are hard. We specialize in the difficult part—turning a 'maybe' into a 'yes'.
                        </p>
                    </motion.div>
                </div>
                <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Data Driven', desc: 'We don\'t guess. We use heatmaps and user recording data to make informed design decisions.', icon: <BarChart3 className="w-10 h-10 text-orange-500" /> },
                        { title: 'Speed Focused', desc: 'Every 100ms delay costs 7% in conversions. We build the fastest pages in the industry.', icon: <Zap className="w-10 h-10 text-yellow-500" /> },
                        { title: 'Lead Quality', desc: 'Our pages aren\'t just about volume; they\'re designed to attract the high-intent customers you want.', icon: <Users className="w-10 h-10 text-green-500" /> }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-orange-500/20 transition-all group shadow-sm"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="landing-page-development" />
            <ServiceCTASection />
        </div>
    );
}
