import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { Palette, Layers, Move, Users, Smartphone, Monitor, Sparkles, Compass, MousePointer2, Figma } from 'lucide-react';
import * as motion from "framer-motion/client"

export const metadata: Metadata = {
  title: 'UI/UX Design | Digital Product Design Agency',
  description: 'Bespoke UI/UX design services. We create intuitive, user-centered digital experiences for web and mobile. Specialized in design systems, prototypes, and user research.',
  keywords: ['UI UX design', 'user experience', 'product design', 'Figma design', 'design systems', 'prototyping'],
  openGraph: {
    title: 'UI/UX Design | Intuitive & Beautiful Experiences',
    description: 'Crafting intuitive and beautiful digital experiences.',
    url: 'https://www.coderschain.com/services/ui-ux-design',
  },
};

const serviceData = {
  title: 'UI/UX Design',
  heroDescription: 'Design is more than how it looks—it\'s how it works. We craft immersive, user-centered experiences that eliminate friction and build emotional connections with your brand.',
  highlights: [
    {
      title: 'Design Systems',
      description: 'Scalable visual languages that ensure consistency across every screen and platform.',
      icon: <Layers className="w-6 h-6 text-[#fe78b8]" />
    },
    {
      title: 'Interactive Prototypes',
      description: 'High-fidelity, clickable simulations that let you feel the product before a single line of code is written.',
      icon: <MousePointer2 className="w-6 h-6 text-[#ce3ef4]" />
    },
    {
      title: 'User-Centric Research',
      description: 'Data-driven insights from real users to ensure every pixel serves a purpose.',
      icon: <Users className="w-6 h-6 text-blue-500" />
    }
  ],
  features: [
    {
      title: 'Visual Identity',
      description: 'Creating a unique aesthetic that captures your brand\'s soul and resonates with your audience.',
      icon: '🎨'
    },
    {
      title: 'Information Architecture',
      description: 'Structuring content logically so users find exactly what they need without thinking.',
      icon: '🗺️'
    },
    {
      title: 'Micro-Interactions',
      description: 'Subtle animations that provide feedback and make the experience feel premium and responsive.',
      icon: '✨'
    },
    {
      title: 'Accessibility First',
      description: 'Inclusive design practices ensuring your product is usable by everyone, regardless of ability.',
      icon: '♿'
    },
    {
      title: 'Conversion Design',
      description: 'Optimizing layouts to guide users toward key actions and drive business growth.',
      icon: '📈'
    },
    {
      title: 'Mobile-Native UI',
      description: 'Interface designs optimized for touch, gestures, and the unique constraints of mobile devices.',
      icon: '📱'
    }
  ],
  process: [
    {
      step: '01. Empathize',
      description: 'Deep-diving into your users\' worlds to understand their pain points, goals, and behaviors.'
    },
    {
      step: '02. Define',
      description: 'Synthesizing research into clear user personas, journey maps, and project requirements.'
    },
    {
      step: '03. Ideate',
      description: 'Rapidly sketching and wireframing diverse solutions to find the most effective approach.'
    },
    {
      step: '04. Prototype',
      description: 'Building high-fidelity mockups and interactive flows in Figma for feedback and testing.'
    },
    {
      step: '05. Validate',
      description: 'Testing designs with real users and iterating until the experience is flawless.'
    }
  ]
};

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <ServiceHero
        title={serviceData.title}
        description={serviceData.heroDescription}
      />

      {/* Design Philosophy Section */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-500 text-sm font-bold uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                Aesthetic Engineering
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                Where Beauty Meets <span className="bg-gradient-to-r from-violet-500 to-fuchsia-600 bg-clip-text text-transparent">Behavioral Science.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We don't just "paint" interfaces. We architect digital experiences. By combining a deep understanding of human psychology with cutting-edge visual design, we ensure your product is as intuitive as it is beautiful.
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-fuchsia-600 opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                  <Figma className="w-24 h-24 text-violet-500/50 group-hover:rotate-6 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mastering the Canvas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe XD', 'Principle', 'Spline', 'Protopie', 'UVP Design', 'Webflow'].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-tighter rounded-lg border border-violet-100 dark:border-violet-500/20">
                        {tool}
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

      {/* Design Impact Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Impact</h2>
            <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Great design is an investment, not a cost. We help you increase retention, boost conversions, and build a brand that people actually enjoy using.
            </p>
          </motion.div>
        </div>
        <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'UX Research', desc: 'We validate designs with heatmaps, user testing, and behavioral analytics.', icon: <Compass className="w-10 h-10 text-violet-500" /> },
            { title: 'Brand Alignment', desc: 'Your product will feel like an extension of your brand story, not just a tool.', icon: <Sparkles className="w-10 h-10 text-amber-500" /> },
            { title: 'Platform Agnostic', desc: 'Designs that look and feel perfect whether on an iPhone, a tablet, or a 4K monitor.', icon: <Monitor className="w-10 h-10 text-emerald-500" /> }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-violet-500/20 transition-all group shadow-sm"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ServiceProcess process={serviceData.process} />
      <ServicePortfolio service="ui-ux-design" />
      <ServiceCTASection />
    </div>
  );
}

// Fixed import for CheckCircle2 (if needed, though not used here directly in the template)
// import { CheckCircle2 } from 'lucide-react';
