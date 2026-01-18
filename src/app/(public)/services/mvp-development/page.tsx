import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';

export const metadata: Metadata = {
  title: 'MVP Development Services | Minimum Viable Product Development',
  description: 'Expert MVP development services to validate your idea quickly and cost-effectively. Build, test, and iterate with our agile MVP development process.',
  keywords: 'MVP development, minimum viable product, startup development, product validation, lean startup',
  openGraph: {
    title: 'MVP Development Services | CodersChain',
    description: 'Rapid development of Minimum Viable Products to validate your idea and attract early adopters',
    type: 'website',
  },
};

const serviceData = {
  title: 'MVP Development',
  description: 'Rapid MVP development services to validate your business idea quickly and cost-effectively.',
  heroDescription: 'We help startups and entrepreneurs build Minimum Viable Products to test market fit, gather user feedback, and attract early adopters with minimal investment.',
  features: [
    {
      title: 'Rapid Prototyping',
      description: 'Quick turnaround from idea to functional prototype for early validation',
      icon: '⚡'
    },
    {
      title: 'Cost-Effective',
      description: 'Focus on core features to minimize development costs and time',
      icon: '💰'
    },
    {
      title: 'User Feedback',
      description: 'Built-in analytics and feedback mechanisms to gather user insights',
      icon: '💬'
    },
    {
      title: 'Scalable Foundation',
      description: 'Architecture designed for easy scaling as your user base grows',
      icon: '🏗️'
    },
    {
      title: 'Iterative Approach',
      description: 'Agile methodology allowing quick pivots based on market response',
      icon: '🔄'
    },
    {
      title: 'Investor Ready',
      description: 'Professional MVP that demonstrates potential to investors',
      icon: '📊'
    }
  ],
  process: [
    {
      step: 'Idea Validation',
      description: 'Analyze your concept and identify core features for MVP'
    },
    {
      step: 'Rapid Prototyping',
      description: 'Develop working prototype with essential functionality'
    },
    {
      step: 'User Testing',
      description: 'Launch to early users and gather quantitative and qualitative feedback'
    },
    {
      step: 'Data Analysis',
      description: 'Analyze user behavior and engagement metrics'
    },
    {
      step: 'Iterate & Scale',
      description: 'Refine product based on insights and prepare for scaling'
    }
  ]
};

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ServiceHero
        title={serviceData.title}
        description={serviceData.heroDescription}
      />
      
      {/* MVP Benefits */}
      <section className="py-16 bg-green-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Start With an MVP?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building an MVP first saves time, money, and helps you make data-driven decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Faster Time to Market</h3>
              <p className="text-gray-600 dark:text-gray-300">Launch your product in weeks instead of months and start learning immediately</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Validate Product-Market Fit</h3>
              <p className="text-gray-600 dark:text-gray-300">Test your core value proposition with real users before heavy investment</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Attract Early Adopters</h3>
              <p className="text-gray-600 dark:text-gray-300">Build an initial user base and gather valuable feedback for future development</p>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServicePortfolio service="mvp-development" />
      <ServiceCTASection />
    </div>
  );
}