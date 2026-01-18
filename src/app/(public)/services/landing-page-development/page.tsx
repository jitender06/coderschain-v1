import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
    title: 'Landing Page Development Services | High-Converting Pages',
    description: 'Expert landing page development services creating high-converting, SEO-optimized landing pages that drive leads and sales for your business.',
    keywords: 'landing page development, conversion rate optimization, lead generation pages, sales pages, landing page design',
    openGraph: {
        title: 'Landing Page Development Services | CodersChain',
        description: 'High-converting landing pages designed to capture leads and drive business growth',
        type: 'website',
    },
};

const serviceData = {
    title: 'Landing Page Development',
    description: 'High-converting landing page development services designed to capture leads and drive business growth.',
    heroDescription: 'We create stunning, high-performance landing pages that convert visitors into customers, with strategic design, compelling copy, and proven conversion optimization techniques.',
    features: [
        {
            title: 'Conversion Focused',
            description: 'Strategic design elements optimized for maximum conversion rates',
            icon: '📈'
        },
        {
            title: 'A/B Testing',
            description: 'Data-driven optimization through continuous testing and improvement',
            icon: '🧪'
        },
        {
            title: 'Fast Loading',
            description: 'Lightning-fast page speeds for better user experience and SEO',
            icon: '⚡'
        },
        {
            title: 'Mobile Optimized',
            description: 'Perfect performance and user experience on all mobile devices',
            icon: '📱'
        },
        {
            title: 'SEO Ready',
            description: 'Built with SEO best practices for better search engine visibility',
            icon: '🔍'
        },
        {
            title: 'Analytics Integration',
            description: 'Comprehensive tracking and analytics to measure performance',
            icon: '📊'
        }
    ],
    process: [
        {
            step: 'Goal Definition',
            description: 'Identify primary conversion goals and target audience'
        },
        {
            step: 'Copywriting & Design',
            description: 'Create compelling copy and conversion-focused design mockups'
        },
        {
            step: 'Development',
            description: 'Build responsive, fast-loading pages with optimal user experience'
        },
        {
            step: 'Conversion Optimization',
            description: 'Implement best practices for forms, CTAs, and user flow'
        },
        {
            step: 'Testing & Launch',
            description: 'Thorough testing and deployment with ongoing performance monitoring'
        }
    ]
};

export default function LandingPageDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Landing Page Types */}
            <section className="py-16 bg-orange-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Types of Landing Pages We Develop
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Lead Generation</h3>
                            <p className="text-gray-600 dark:text-gray-300">Capture leads with compelling offers and optimized forms</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🛒</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Product Launch</h3>
                            <p className="text-gray-600 dark:text-gray-300">Build excitement and drive early sign-ups for new products</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Download</h3>
                            <p className="text-gray-600 dark:text-gray-300">Promote eBooks, whitepapers, and other valuable content</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">PPC Campaigns</h3>
                            <p className="text-gray-600 dark:text-gray-300">Highly targeted pages for paid advertising campaigns</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Email List Building</h3>
                            <p className="text-gray-600 dark:text-gray-300">Grow your email list with irresistible lead magnets</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🔄</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Event Registration</h3>
                            <p className="text-gray-600 dark:text-gray-300">Drive registrations for webinars, workshops, and events</p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />
            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="landing-page-development" />
            <ServiceCTASection />
        </div>
    );
}