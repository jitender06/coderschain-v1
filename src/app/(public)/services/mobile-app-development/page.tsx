import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
    title: 'Mobile App Development Company | iOS & Android Apps',
    description: 'Expert mobile app development services for iOS and Android. We create native and cross-platform mobile applications with exceptional user experience.',
    keywords: 'mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter',
    openGraph: {
        title: 'Mobile App Development Company | CodersChain',
        description: 'Native and cross-platform mobile applications for iOS and Android',
        type: 'website',
    },
};

const serviceData = {
    title: 'Mobile App Development',
    description: 'Expert mobile app development services creating native and cross-platform applications for iOS and Android.',
    heroDescription: 'We build high-performance mobile applications that deliver exceptional user experiences and drive business growth across all platforms.',
    features: [
        {
            title: 'Native iOS & Android',
            description: 'Platform-specific development for optimal performance and user experience',
            icon: '📱'
        },
        {
            title: 'Cross-Platform',
            description: 'Single codebase solutions with React Native and Flutter for cost efficiency',
            icon: '🔄'
        },
        {
            title: 'App Store Optimization',
            description: 'Strategic optimization to maximize visibility and downloads in app stores',
            icon: '📈'
        },
        {
            title: 'Offline Capability',
            description: 'Apps that work seamlessly even without internet connection',
            icon: '📶'
        },
        {
            title: 'Push Notifications',
            description: 'Engage users with targeted push notifications and updates',
            icon: '🔔'
        },
        {
            title: 'API Integration',
            description: 'Seamless integration with backend services and third-party APIs',
            icon: '🔗'
        }
    ],
    process: [
        {
            step: 'Strategy & Planning',
            description: 'Define app objectives, target audience, and platform strategy'
        },
        {
            step: 'UI/UX Design',
            description: 'Create intuitive mobile interfaces following platform guidelines'
        },
        {
            step: 'Development',
            description: 'Agile development with regular testing and user feedback'
        },
        {
            step: 'Quality Testing',
            description: 'Comprehensive testing on real devices and various network conditions'
        },
        {
            step: 'App Store Deployment',
            description: 'Assistance with app store submission, approval, and launch'
        }
    ]
};

export default function MobileAppDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Platform Comparison */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Choose Your Development Approach
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Native iOS</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">Swift & Objective-C for optimal Apple ecosystem performance</p>
                            <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li>• Best performance on Apple devices</li>
                                <li>• Full access to iOS features</li>
                                <li>• Apple Design Guidelines</li>
                                <li>• SwiftUI & UIKit</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg border-2 border-blue-500 dark:border-blue-400">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cross-Platform</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">React Native & Flutter for cost-effective development</p>
                            <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li>• Single codebase for both platforms</li>
                                <li>• Faster development time</li>
                                <li>• Consistent user experience</li>
                                <li>• Hot reload for rapid iteration</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg">
                            <div className="text-4xl mb-4">🤖</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Native Android</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">Kotlin & Java for superior Android experience</p>
                            <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li>• Optimized for Android ecosystem</li>
                                <li>• Material Design principles</li>
                                <li>• Google Play Store compliance</li>
                                <li>• Jetpack Compose</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />
            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="mobile-app-development" />
            <ServiceCTASection />
        </div>
    );
}