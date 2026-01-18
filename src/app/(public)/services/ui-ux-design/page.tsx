import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
  title: 'UI/UX Design Company | User Experience Design Services',
  description: 'Leading UI/UX design company creating intuitive, user-centered digital experiences that drive engagement and conversions.',
  keywords: 'UI/UX design, user experience design, user interface design, UX research, product design, design systems',
  openGraph: {
    title: 'UI/UX Design Company | CodersChain',
    description: 'User-centered design solutions that enhance engagement and drive conversions',
    type: 'website',
  },
};

const serviceData = {
  title: 'UI/UX Design',
  description: 'Leading UI/UX design services creating intuitive, user-centered digital experiences.',
  heroDescription: 'We design beautiful, functional interfaces that users love and that drive measurable business results through exceptional user experiences.',
  features: [
    {
      title: 'User Research',
      description: 'In-depth user research and analysis to understand user needs and behaviors',
      icon: '🔍'
    },
    {
      title: 'Wireframing',
      description: 'Detailed wireframes and prototypes to visualize user flows and interactions',
      icon: '📐'
    },
    {
      title: 'Visual Design',
      description: 'Stunning visual designs that reflect your brand and enhance user engagement',
      icon: '🎨'
    },
    {
      title: 'Interaction Design',
      description: 'Smooth animations and micro-interactions that delight users',
      icon: '✨'
    },
    {
      title: 'Usability Testing',
      description: 'Comprehensive testing with real users to validate design decisions',
      icon: '✅'
    },
    {
      title: 'Design Systems',
      description: 'Scalable design systems for consistent experiences across platforms',
      icon: '📚'
    }
  ],
  process: [
    {
      step: 'Discovery & Research',
      description: 'Understand business goals, user needs, and market landscape'
    },
    {
      step: 'User Personas & Journey',
      description: 'Create detailed user personas and map user journey flows'
    },
    {
      step: 'Wireframing & Prototyping',
      description: 'Develop interactive prototypes and test user flows'
    },
    {
      step: 'Visual Design',
      description: 'Create pixel-perfect designs with brand consistency'
    },
    {
      step: 'Testing & Iteration',
      description: 'Validate designs with users and iterate based on feedback'
    }
  ]
};

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ServiceHero
        title={serviceData.title}
        description={serviceData.heroDescription}
      />
      
      {/* Design Principles */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Design Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User-Centered</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Design decisions driven by user needs and behaviors</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Goal-Oriented</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Every design element serves a specific business objective</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accessible</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Inclusive designs that work for everyone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Responsive</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Seamless experiences across all devices and screens</p>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServicePortfolio service="ui-ux-design" />
      <ServiceCTASection />
    </div>
  );
}