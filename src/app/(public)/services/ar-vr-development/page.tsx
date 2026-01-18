import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
    title: 'AR/VR Development Services | Augmented & Virtual Reality Solutions',
    description: 'Expert AR/VR development services creating immersive experiences for training, marketing, entertainment, and enterprise applications.',
    keywords: 'AR development, VR development, augmented reality, virtual reality, immersive technology, 3D development',
    openGraph: {
        title: 'AR/VR Development Services | CodersChain',
        description: 'Immersive augmented and virtual reality experiences for various industries and use cases',
        type: 'website',
    },
};

const serviceData = {
    title: 'AR/VR Development',
    description: 'Immersive AR/VR development services creating cutting-edge augmented and virtual reality experiences.',
    heroDescription: 'We create immersive augmented and virtual reality solutions that transform how users interact with digital content across various industries and applications.',
    features: [
        {
            title: '3D Modeling',
            description: 'High-quality 3D assets and environments optimized for real-time rendering',
            icon: '🎮'
        },
        {
            title: 'Interactive Experiences',
            description: 'Engaging user interactions and intuitive controls for immersive experiences',
            icon: '👆'
        },
        {
            title: 'Multi-Platform Support',
            description: 'Development for VR headsets, mobile AR, and web-based experiences',
            icon: '🌐'
        },
        {
            title: 'Spatial Computing',
            description: 'Advanced spatial awareness and environment mapping capabilities',
            icon: '🗺️'
        },
        {
            title: 'Performance Optimization',
            description: 'Optimized experiences ensuring smooth performance across devices',
            icon: '⚡'
        },
        {
            title: 'Enterprise Solutions',
            description: 'AR/VR applications for training, simulations, and industrial use cases',
            icon: '🏢'
        }
    ],
    process: [
        {
            step: 'Concept & Storyboarding',
            description: 'Define experience goals, user journey, and technical requirements'
        },
        {
            step: '3D Asset Creation',
            description: 'Develop high-quality 3D models, animations, and environments'
        },
        {
            step: 'Development & Integration',
            description: 'Build interactive experiences with physics, AI, and user interactions'
        },
        {
            step: 'Testing & Optimization',
            description: 'Test across target devices and optimize for performance'
        },
        {
            step: 'Deployment & Distribution',
            description: 'Publish to app stores, web platforms, or enterprise systems'
        }
    ]
};

export default function ARVRDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Use Cases */}
            <section className="py-16 bg-purple-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        AR/VR Applications Across Industries
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🏥</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Healthcare</h3>
                            <p className="text-gray-600 dark:text-gray-300">Surgical simulations, patient education, and medical training</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🏭</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Manufacturing</h3>
                            <p className="text-gray-600 dark:text-gray-300">Assembly line training, maintenance guides, and factory planning</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🏫</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Education</h3>
                            <p className="text-gray-600 dark:text-gray-300">Immersive learning experiences and virtual classrooms</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🛍️</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Retail</h3>
                            <p className="text-gray-600 dark:text-gray-300">Virtual try-ons, product visualization, and virtual stores</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🎮</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Entertainment</h3>
                            <p className="text-gray-600 dark:text-gray-300">Immersive games, virtual events, and interactive storytelling</p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-4">🏢</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real Estate</h3>
                            <p className="text-gray-600 dark:text-gray-300">Virtual property tours and architectural visualization</p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />
            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="ar-vr-development" />
            <ServiceCTASection />
        </div>
    );
}