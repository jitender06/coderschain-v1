import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Rocket, Zap, BarChart3, Users, Target, ShieldCheck, Layers, Cpu, Timer, Lightbulb } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
  title: 'MVP Development | Launch Your Idea Fast',
  description: 'Expert MVP development for startups and enterprises. We build Minimum Viable Products in 4-8 weeks to validate your market fit and attract early adopters.',
  keywords: ['MVP development', 'lean startup', 'product validation', 'rapid prototyping', 'startup engineering', 'minimum viable product'],
  openGraph: {
    title: 'MVP Development | High-Velocity Startup Engineering',
    description: 'Validate your business idea quickly with a high-performance MVP.',
    url: 'https://www.coderschain.com/services/mvp-development',
  },
};

const serviceData = {
  title: 'MVP Development',
  heroDescription: 'Don\'t spend months building what nobody wants. We help you launch a polished, functional Minimum Viable Product in weeks, so you can start learning from real users today.',
  highlights: [
    {
      title: '4-8 Week Launch',
      description: 'Hyper-focused development cycles designed to get you into the market as fast as possible.',
      icon: <Timer className="w-6 h-6 text-[#fe78b8]" />
    },
    {
      title: 'Lean Engineering',
      description: 'Building only what is necessary to validate your core hypothesis and save on initial capital.',
      icon: <Layers className="w-6 h-6 text-[#ce3ef4]" />
    },
    {
      title: 'Scalable Foundation',
      description: 'We use premium tech stacks so your MVP can easily evolve into a full-scale enterprise product.',
      icon: <Cpu className="w-6 h-6 text-blue-500" />
    }
  ],
  features: [
    {
      title: 'Feature Prioritization',
      description: 'Strategic consulting to identify the "Must-Haves" that define your product\'s uniqueness.',
      icon: '🎯'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Convert your vision into interactive mockups and working prototypes within days.',
      icon: '⚡'
    },
    {
      title: 'Built-in Analytics',
      description: 'Every MVP comes with tracking to monitor user behavior and quantitative metrics.',
      icon: '📊'
    },
    {
      title: 'Investor-Ready UI',
      description: 'A professional design that builds trust and helps you secure your next round of funding.',
      icon: '💎'
    },
    {
      title: 'Feedback Loops',
      description: 'Integrated tools to capture qualitative user feedback directly within the application.',
      icon: '💬'
    },
    {
      title: 'Cloud Managed',
      description: 'Zero-config deployment that grows with your traffic, from 1 to 100,000+ users.',
      icon: '☁️'
    }
  ],
  process: [
    {
      step: '01. Discovery',
      description: 'We workshop your idea to extract the core value proposition and primary user persona.'
    },
    {
      step: '02. MVP Blueprint',
      description: 'Mapping the minimum feature set and technical architecture required for validation.'
    },
    {
      step: '03. Agile Sprint',
      description: 'Intensive development with weekly demos to ensure we are aligned with your vision.'
    },
    {
      step: '04. Soft Launch',
      description: 'Deploying to a closed group of early adopters to gather baseline performance data.'
    },
    {
      step: '05. Data Review',
      description: 'Analyzing results to decide whether to pivot, persevere, or begin scaling up.'
    }
  ]
};

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <ServiceHero
        title={serviceData.title}
        description={serviceData.heroDescription}
      />

      {/* Growth Strategy Section */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                Startup Velocity
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                Turn Your Vision into a <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Market Reality.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Most products fail because they build too much, too soon. We specialize in the "Least Build for the Most Learning"—helping you find product-market fit without wasting time or capital on unvetted features.
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-500 to-emerald-600 opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                  <Rocket className="w-24 h-24 text-green-500/50 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Validate Your Idea</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    {['Market Validation', 'Early Traction', 'User Insights', 'Cost Efficiency', 'Risk Mitigation'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg border border-green-100 dark:border-green-500/20">
                        {tag}
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

      {/* Validation Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Start With Coderschain?</h2>
            <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We don't just write code; we help you think like a founder. We provide the technical muscle and strategic insight needed to navigate the early-stage startup phase.
            </p>
          </motion.div>
        </div>
        <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Data-Driven Pivots', desc: 'Use real-time user metrics to decide exactly what feature to build next.', icon: <BarChart3 className="w-10 h-10 text-green-500" /> },
            { title: 'Investor Relations', desc: 'Deploy an MVP that looks like a finished product, ready to wow VCs and Angels.', icon: <CheckCircle2 className="w-10 h-10 text-blue-500" /> },
            { title: 'Founder Focused', desc: 'Direct access to senior architects who understand the speed of a startup.', icon: <Users className="w-10 h-10 text-emerald-500" /> }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-green-500/20 transition-all group shadow-sm"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ServiceProcess process={serviceData.process} />
      <ServicePortfolio service="mvp-development" />
      <ServiceCTASection />
    </div>
  );
}

// Fixed import for CheckCircle2
import { CheckCircle2 } from 'lucide-react';
