import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
    title: 'Full Stack Development Services | End-to-End Web Solutions',
    description: 'Comprehensive full stack development services. We handle everything from frontend to backend, database design, and deployment.',
    keywords: 'full stack development, web application development, frontend development, backend development, database design',
    openGraph: {
        title: 'Full Stack Development Services | CodersChain',
        description: 'End-to-end development services from frontend to backend with modern tech stacks',
        type: 'website',
    },
};

const serviceData = {
    title: 'Full Stack Development',
    description: 'End-to-end full stack development services from frontend to backend with modern technology stacks.',
    heroDescription: 'We provide comprehensive full stack development solutions, handling everything from user interface design to server infrastructure and database architecture.',
    features: [
        {
            title: 'Frontend Development',
            description: 'Modern React, Next.js, and Vue.js applications with responsive design',
            icon: '🎨'
        },
        {
            title: 'Backend Development',
            description: 'Scalable server architecture with Node.js, Python, and Java',
            icon: '⚙️'
        },
        {
            title: 'Database Design',
            description: 'Optimized database schemas with PostgreSQL, MongoDB, and Redis',
            icon: '🗄️'
        },
        {
            title: 'API Development',
            description: 'RESTful and GraphQL APIs with comprehensive documentation',
            icon: '🔗'
        },
        {
            title: 'DevOps & Deployment',
            description: 'CI/CD pipelines, cloud infrastructure, and monitoring solutions',
            icon: '🚀'
        },
        {
            title: 'Third-Party Integrations',
            description: 'Seamless integration with payment gateways, analytics, and more',
            icon: '🔌'
        }
    ],
    process: [
        {
            step: 'Architecture Planning',
            description: 'Design scalable system architecture and choose appropriate tech stack'
        },
        {
            step: 'Frontend Development',
            description: 'Build responsive user interfaces with modern frameworks and best practices'
        },
        {
            step: 'Backend Development',
            description: 'Develop robust server-side logic, APIs, and database layers'
        },
        {
            step: 'Integration & Testing',
            description: 'Connect all components and conduct comprehensive testing'
        },
        {
            step: 'Deployment & Monitoring',
            description: 'Deploy to production environment and set up monitoring systems'
        }
    ]
};

export default function FullStackDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Tech Stack */}
            <section className="py-16 bg-blue-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Our Full Stack Technology Stack
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Frontend */}
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Frontend</h3>
                            <div className="space-y-3">
                                {['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                                    <div key={tech} className="flex items-center justify-center py-2 px-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Backend</h3>
                            <div className="space-y-3">
                                {['Node.js', 'Python', 'Java', 'Express.js', 'NestJS'].map((tech) => (
                                    <div key={tech} className="flex items-center justify-center py-2 px-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Database */}
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Database</h3>
                            <div className="space-y-3">
                                {['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'].map((tech) => (
                                    <div key={tech} className="flex items-center justify-center py-2 px-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DevOps */}
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">DevOps</h3>
                            <div className="space-y-3">
                                {['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Kubernetes'].map((tech) => (
                                    <div key={tech} className="flex items-center justify-center py-2 px-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />
            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="full-stack-development" />
            <ServiceCTASection />
        </div>
    );
}