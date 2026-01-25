import { Metadata } from 'next';
import ServiceHero from '@/components/companySections/services/ServiceHero';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import { CheckCircle2, Code2, Rocket, ShieldCheck, Zap, Laptop } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Custom Website Development | Scalable Web Solutions',
    description: 'Grow your business with premium custom website development. We build high-performance, SEO-optimized, and scalable web applications using Next.js, React, and Node.js.',
    keywords: ['custom web development', 'enterprise websites', 'bespoke applications', 'Next.js agency', 'scalable architecture'],
    openGraph: {
        title: 'Custom Website Development | Premium Scalable Solutions',
        description: 'Bespoke digital solutions designed for performance and scale.',
        url: 'https://www.coderschain.com/services/custom-website-development',
    },
};

const serviceData = {
    title: 'Custom Website Development',
    heroDescription: 'From complex enterprise platforms to high-growth startup MVPs, we build bespoke web applications that drive engagement and deliver measurable business results.',
    highlights: [
        {
            title: 'Full-Stack Excellence',
            description: 'End-to-end development using modern stacks that ensure speed, security, and scalability.',
            icon: <Code2 className="w-6 h-6 text-[#fe78b8]" />
        },
        {
            title: 'Performance Optimized',
            description: 'Lightning-fast load times and smooth interactions to keep your users engaged.',
            icon: <Zap className="w-6 h-6 text-[#ce3ef4]" />
        },
        {
            title: 'Enterprise Security',
            description: 'Built-in security best practices to protect your data and user privacy from day one.',
            icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
        }
    ],
    features: [
        {
            title: 'Responsive & Mobile-First',
            description: 'Seamless experiences across desktops, tablets, and smartphones.',
            icon: '📱'
        },
        {
            title: 'SEO Ready Architecture',
            description: 'Semantic HTML and optimized structures for maximum search engine visibility.',
            icon: '🔍'
        },
        {
            title: 'Custom API Integrations',
            description: 'Connecting your platform with the tools you already use and love.',
            icon: '🔌'
        },
        {
            title: 'Cloud-Native Solutions',
            description: 'Leveraging AWS, Vercel, and Google Cloud for high availability.',
            icon: '☁️'
        },
        {
            title: 'Interactive UI/UX',
            description: 'Engaging user interfaces built with React and Framer Motion.',
            icon: '✨'
        },
        {
            title: 'Data-Driven Design',
            description: 'Interfaces designed based on user behavior and conversion goals.',
            icon: '📊'
        }
    ],
    process: [
        {
            step: '01. Discovery',
            description: 'We dive deep into your business goals, target audience, and functional requirements.'
        },
        {
            step: '02. Blueprinting',
            description: 'Creating wireframes and technical architecture to ensure a solid foundation.'
        },
        {
            step: '03. Agile Dev',
            description: 'Rapid iterations with regular demos so you see progress in real-time.'
        },
        {
            step: '04. Pure QA',
            description: 'Rigorous testing for performance, security, and cross-browser compatibility.'
        },
        {
            step: '05. Launch/Scale',
            description: 'Deploying to production and providing ongoing support as you grow.'
        }
    ]
};

export default function CustomWebsiteDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <ServiceHero
                title={serviceData.title}
                description={serviceData.heroDescription}
            />

            {/* Value Proposition Section */}
            <section className="py-24 bg-gray-50/50 dark:bg-neutral-950/50 border-y border-gray-100 dark:border-white/5">
                <div className="container-web mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fe78b8]/10 border border-[#fe78b8]/20 text-[#fe78b8] text-sm font-bold uppercase tracking-wider">
                                <Rocket className="w-4 h-4" />
                                Engineering Excellence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                We don't just build sites; we build <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent">Digital Assets.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our custom web development approach focuses on creating scalable, high-performance applications that solve real business problems. Whether it's a customer portal, an e-commerce powerhouse, or a dynamic SaaS platform, we deliver excellence.
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
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#fe78b8] to-[#ce3ef4] opacity-20 blur-3xl rounded-full" />
                            <div className="relative bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden group">
                                <div className="aspect-[4/3] rounded-[2rem] bg-neutral-100 dark:bg-black border border-gray-100 dark:border-white/5 flex items-center justify-center">
                                    <Laptop className="w-24 h-24 text-[#ce3ef4]/50 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Stack of Winners</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind v4', 'AWS'].map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-gray-50 dark:bg-black border border-gray-100 dark:border-white/5 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFeatures features={serviceData.features} />

            {/* Custom Content: Why Choose Us */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container-web mx-auto px-4 md:px-6 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
                    <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        We blend creative design with technical mastery to deliver products that aren't just beautiful, but are strategic tools for your success.
                    </p>
                </div>
                <div className="container-web mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'User-Centric', desc: 'Every line of code is written with your user in mind.' },
                        { title: 'Always Scalable', desc: 'Build for today, prepare for tomorrow\'s traffic.' },
                        { title: 'Proven Results', desc: '98% client retention rate across all global projects.' }
                    ].map((card, i) => (
                        <div key={i} className="p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-[#fe78b8]/20 transition-all group">
                            <CheckCircle2 className="w-10 h-10 text-[#fe78b8] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ServiceProcess process={serviceData.process} />
            <ServicePortfolio service="custom-website-development" />
            <ServiceCTASection />
        </div>
    );
}
