import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Custom Software Development Solutions',
    description: 'Comprehensive software development services including web, mobile, AI, AR/VR, and UI/UX design. End-to-end development solutions.',
    keywords: ['software development', 'web apps', 'mobile apps', 'AI integration', 'AR VR solutions', 'UI UX design', 'MVP development'],
};

const services = [
    {
        slug: 'custom-website-development',
        title: 'Custom Website Development',
        description: 'Bespoke web applications tailored to your business needs with modern technologies and scalable architecture.',
        icon: '🌐',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
        icon: '📱',
        features: ['iOS & Android', 'Cross-Platform', 'App Store Ready']
    },
    {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'User-centered design solutions that enhance engagement and drive conversions.',
        icon: '🎨',
        features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
        slug: 'mvp-development',
        title: 'MVP Development',
        description: 'Rapid development of Minimum Viable Products to validate your idea and attract early adopters.',
        icon: '🚀',
        features: ['Fast Delivery', 'Cost-Effective', 'Scalable Foundation']
    },
    {
        slug: 'full-stack-development',
        title: 'Full Stack Development',
        description: 'End-to-end development services from frontend to backend with modern tech stacks.',
        icon: '💻',
        features: ['Frontend & Backend', 'Database Design', 'API Development']
    },
    {
        slug: 'ar-vr-development',
        title: 'AR/VR Development',
        description: 'Immersive augmented and virtual reality experiences for various industries and use cases.',
        icon: '🥽',
        features: ['3D Modeling', 'Interactive Experiences', 'Multi-Platform']
    },
    {
        slug: 'ai-agent-development',
        title: 'AI Agent Development',
        description: 'Intelligent AI agents and automation solutions to streamline your business processes.',
        icon: '🤖',
        features: ['Machine Learning', 'Process Automation', 'AI Integration']
    },
    {
        slug: 'landing-page-development',
        title: 'Landing Page Development',
        description: 'High-converting landing pages designed to capture leads and drive business growth.',
        icon: '📄',
        features: ['Conversion Focused', 'A/B Testing', 'Fast Loading']
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Development Services
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive software development solutions tailored to drive your business growth and digital transformation.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block group"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 h-full">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                                    Learn more →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}