import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Bot, Cpu, Zap, ShieldCheck, Search, MessageSquare, BrainCircuit, Workflow, BarChart3, Globe } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
    title: 'AI Agent Development | Enterprise AI Solutions',
    description: 'Bespoke AI agent development for business automation. We build intelligent chatbots, autonomous agents, and AI-powered systems using GPT-4, Claude & custom LLMs.',
    keywords: ['AI agents', 'autonomous agents', 'LLM integration', 'GPT-4', 'AI automation', 'chatbots'],
    openGraph: {
        title: 'AI Agent Development | Intelligent Business Automation',
        description: 'Empowering businesses with autonomous AI agents and intelligent automation.',
        url: 'https://www.coderschain.com/services/ai-agent-development',
    },
};

const serviceData = {
    title: 'AI Agent Development',
    heroDescription: 'Harness the power of Artificial Intelligence to automate complex workflows, enhance decision-making, and create autonomous systems that learn and grow with your business.',
    highlights: [
        {
            title: 'Autonomous Agents',
            description: 'Self-operating systems that can handle multi-step tasks without manual intervention.',
            icon: <Bot className="w-6 h-6 text-[#fe78b8]" />
        },
        {
            title: 'Custom LLM Training',
            description: 'Fine-tune models on your specific business data for unparalleled accuracy and context.',
            icon: <Cpu className="w-6 h-6 text-[#ce3ef4]" />
        },
        {
            title: 'Neural Integration',
            description: 'Seamlessly connect AI capabilities into your existing infrastructure and legacy tools.',
            icon: <Workflow className="w-6 h-6 text-blue-500" />
        }
    ],
    features: [
        {
            title: 'Advanced NLP',
            description: 'Understand and generate human-like text across 50+ languages with high context retention.',
            icon: '💬'
        },
        {
            title: 'Predictive Analytics',
            description: 'Anticipate market trends and user behavior with custom-built ML forecasting models.',
            icon: '📉'
        },
        {
            title: 'Intelligent RAG',
            description: 'Retrieve and generate information from your private documents with 99% accuracy.',
            icon: '📚'
        },
        {
            title: 'Voice AI Agents',
            description: 'Responsive, natural-sounding voice assistants for customer service and dispatch.',
            icon: '🎙️'
        },
        {
            title: 'Computer Vision',
            description: 'Real-time image and video analysis for security, manufacturing, and healthcare.',
            icon: '👁️'
        },
        {
            title: 'API First AI',
            description: 'Build thin-wrappers or complex AI applications that scale to millions of requests.',
            icon: '🚀'
        }
    ],
    process: [
        {
            step: '01. Strategy',
            description: 'We identify the highest-impact AI opportunities within your business ecosystem.'
        },
        {
            step: '02. Data Mining',
            description: 'Collect, clean, and structure the data required to train or ground your custom models.'
        },
        {
            step: '03. Prototyping',
            description: 'Rapid MVP development to test feasibility and refine model prompts/logic.'
        },
        {
            step: '04. Optimization',
            description: 'Fine-tuning for latency, cost, and accuracy to ensure production readiness.'
        },
        {
            step: '05. Deployment',
            description: 'Full-scale rollout with real-time monitoring and continuous learning feedback loops.'
        }
    ]
};

export default function AIAgentDevelopmentPage() {
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold uppercase tracking-wider">
                                <Zap className="w-4 h-4" />
                                Cognitive Computing
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                Empower Your Future with <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Autonomous Intelligence.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                We specialize in building AI agents that don't just answer questions, but execute complex tasks. From managing your supply chain to delivering hyper-personalized customer support, our AI solutions are built to be your most efficient team member.
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 blur-3xl rounded-full" />
                            <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <BrainCircuit className="w-24 h-24 text-blue-500/50 group-hover:rotate-12 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mastering the AI Frontier</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['LLama 3.1', 'Claude 3.5 Sonnet', 'OpenAI o1', 'PyTorch', 'LangChain', 'Pinecone', 'Hugging Face'].map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:border-blue-500/30 transition-colors">
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

            {/* Why Us Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our AI?</h2>
                        <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            We don't just follow the AI hype. We build ethically-grounded, performant, and secure solutions that solve tangible problems.
                        </p>
                    </motion.div>
                </div>
                <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Privacy First', desc: 'Your data stays yours. We implement local inference and air-gapped models where security is paramount.', icon: <ShieldCheck className="w-10 h-10 text-blue-500" /> },
                        { title: 'Real-Time Learning', desc: 'Our agents utilize feedback loops to improve their performance based on actual user interactions.', icon: <Zap className="w-10 h-10 text-orange-400" /> },
                        { title: 'Global Optimization', desc: 'Built for scale. Our AI architectures are optimized for both high-concurrency and low-cost.', icon: <Globe className="w-10 h-10 text-green-500" /> }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-blue-500/20 transition-all group shadow-sm"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="ai-agent-development" />
            <ServiceCTASection />
        </div>
    );
}
