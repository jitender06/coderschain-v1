import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
    title: 'AI Agent Development Services | Intelligent Automation Solutions',
    description: 'Expert AI agent development services creating intelligent automation solutions, chatbots, and AI-powered systems for business process optimization.',
    keywords: 'AI agent development, artificial intelligence, machine learning, chatbots, automation, AI integration',
    openGraph: {
        title: 'AI Agent Development Services | CodersChain',
        description: 'Intelligent AI agents and automation solutions to streamline your business processes',
        type: 'website',
    },
};

const serviceData = {
    title: 'AI Agent Development',
    description: 'Intelligent AI agent development services creating automation solutions and AI-powered systems.',
    heroDescription: 'We develop sophisticated AI agents that automate complex tasks, enhance customer experiences, and drive operational efficiency through machine learning and natural language processing.',
    features: [
        {
            title: 'Machine Learning',
            description: 'Custom ML models trained on your data for intelligent decision making',
            icon: '🧠'
        },
        {
            title: 'Process Automation',
            description: 'AI-powered automation of repetitive tasks and business processes',
            icon: '⚙️'
        },
        {
            title: 'Natural Language Processing',
            description: 'Advanced NLP for chatbots, sentiment analysis, and text understanding',
            icon: '💬'
        },
        {
            title: 'Predictive Analytics',
            description: 'AI models that forecast trends and identify patterns in your data',
            icon: '📊'
        },
        {
            title: 'Computer Vision',
            description: 'Image and video analysis for various applications and use cases',
            icon: '👁️'
        },
        {
            title: 'AI Integration',
            description: 'Seamless integration of AI capabilities into existing systems',
            icon: '🔗'
        }
    ],
    process: [
        {
            step: 'Problem Analysis',
            description: 'Identify automation opportunities and define AI solution requirements'
        },
        {
            step: 'Data Preparation',
            description: 'Collect, clean, and prepare training data for AI models'
        },
        {
            step: 'Model Development',
            description: 'Train and optimize machine learning models for specific tasks'
        },
        {
            step: 'Integration & Testing',
            description: 'Integrate AI agents into workflows and conduct rigorous testing'
        },
        {
            step: 'Deployment & Monitoring',
            description: 'Deploy to production and monitor performance with continuous improvement'
        }
    ]
};

export default function AIAgentDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* AI Capabilities */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        AI Solutions for Your Business
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Intelligent Chatbots</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">24/7 customer support with natural conversations</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Multi-language support and context awareness</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Seamless handover to human agents when needed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Process Automation</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Automated data entry and document processing</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Intelligent workflow optimization and routing</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Predictive maintenance and anomaly detection</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />
            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="ai-agent-development" />
            <ServiceCTASection />
        </div>
    );
}