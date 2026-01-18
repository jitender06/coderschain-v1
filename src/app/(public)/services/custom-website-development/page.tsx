import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
    title: 'Custom Website Development Company | Bespoke Web Solutions',
    description: 'Expert custom website development services. We build scalable, high-performance websites with modern technologies like Next.js, React, and Node.js.',
    keywords: 'custom website development, web development company, bespoke websites, responsive web design, ecommerce development',
    openGraph: {
        title: 'Custom Website Development Company | CodersChain',
        description: 'Bespoke web development solutions tailored to your business needs',
        type: 'website',
    },
};

const serviceData = {
    title: 'Custom Website Development',
    description: 'Expert custom website development services creating scalable, high-performance websites tailored to your business objectives.',
    heroDescription: 'We build bespoke web applications that drive growth and deliver exceptional user experiences with modern technologies like Next.js, React, and Node.js.',
    features: [
        {
            title: 'Responsive Design',
            description: 'Mobile-first approach ensuring perfect display across all devices and screen sizes',
            icon: '📱'
        },
        {
            title: 'SEO Optimized',
            description: 'Built with search engine best practices for better visibility and higher rankings',
            icon: '🔍'
        },
        {
            title: 'Fast Performance',
            description: 'Lightning-fast loading times optimized for better user engagement and conversions',
            icon: '⚡'
        },
        {
            title: 'Scalable Architecture',
            description: 'Future-proof solutions that grow with your business and handle increasing traffic',
            icon: '📈'
        },
        {
            title: 'Security First',
            description: 'Enterprise-grade security measures to protect your data and user information',
            icon: '🛡️'
        },
        {
            title: 'CMS Integration',
            description: 'Easy-to-use content management systems for seamless content updates',
            icon: '💾'
        }
    ],
    process: [
        {
            step: 'Discovery & Planning',
            description: 'Comprehensive analysis of your requirements, target audience, and business goals'
        },
        {
            step: 'UI/UX Design',
            description: 'Creating intuitive, user-centered designs that enhance engagement and conversions'
        },
        {
            step: 'Development',
            description: 'Agile development process with modern frameworks and regular progress updates'
        },
        {
            step: 'Quality Assurance',
            description: 'Rigorous testing across devices and browsers to ensure flawless performance'
        },
        {
            step: 'Deployment & Launch',
            description: 'Smooth deployment with ongoing support, maintenance, and performance monitoring'
        }
    ]
};

export default function CustomWebsiteDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Additional Content Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Tailored Web Solutions for Your Business
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Our custom website development services are designed to create unique digital experiences that reflect your brand identity and drive measurable results.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700 dark:text-gray-300">E-commerce platforms with secure payment integration</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Progressive Web Apps (PWA) for app-like experience</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700 dark:text-gray-300">API development and third-party integrations</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies We Use</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">Next.js</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">React</div>
                                </div>
                                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                    <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">Node.js</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">TypeScript</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />
            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="custom-website-development" />
            <ServiceCTASection />
        </div>
    );
}