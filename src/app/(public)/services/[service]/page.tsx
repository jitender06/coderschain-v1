import { Metadata } from 'next';
import ServiceFeatures from '@/components/companySections/services/ServiceFeatures';
import ServiceProcess from '@/components/companySections/services/ServiceProcess';
import ServicePortfolio from '@/components/companySections/services/ServicePortfolio';
import ServiceCTASection from '@/components/companySections/services/ServiceCTASection';
import ServiceHero from '@/components/companySections/services/ServiceHero';

interface ServicePageProps {
    params: {
        service: string;
    };
}

// Service data - you can move this to a separate data file
const serviceData: { [key: string]: any } = {
    'custom-website-development': {
        title: 'Custom Website Development Agency',
        description: 'Expert custom web development services creating scalable, high-performance websites tailored to your business objectives.',
        heroDescription: 'We build bespoke web applications that drive growth and deliver exceptional user experiences with modern technologies.',
        features: [
            { title: 'Responsive Design', description: 'Mobile-first approach ensuring perfect display across all devices', icon: '📱' },
            { title: 'SEO Optimized', description: 'Built with search engine best practices for better visibility', icon: '🔍' },
            { title: 'Fast Performance', description: 'Lightning-fast loading times for better user engagement', icon: '⚡' },
            { title: 'Scalable Architecture', description: 'Future-proof solutions that grow with your business', icon: '📈' }
        ],
        process: [
            { step: 'Discovery & Planning', description: 'Understanding your requirements and creating a detailed project roadmap' },
            { step: 'UI/UX Design', description: 'Creating intuitive user interfaces and seamless user experiences' },
            { step: 'Development', description: 'Agile development with regular updates and iterations' },
            { step: 'Testing & Quality', description: 'Comprehensive testing to ensure bug-free delivery' },
            { step: 'Deployment', description: 'Smooth deployment with ongoing support and maintenance' }
        ]
    },
    'mobile-app-development': {
        title: 'Mobile App Development Services',
        description: 'Build native and cross-platform mobile applications for iOS and Android that engage users and deliver value.',
        heroDescription: 'Transform your ideas into powerful mobile experiences with our expert iOS, Android, and cross-platform development solutions.',
        features: [
            { title: 'iOS & Android', description: 'Native performance for both major platforms', icon: '📱' },
            { title: 'Cross-Platform', description: 'Reach more users with Flutter and React Native solutions', icon: '🔄' },
            { title: 'User Experience', description: 'Intuitive navigation and seamless mobile interactions', icon: '✨' },
            { title: 'Offline Support', description: 'Apps that work reliably even without an internet connection', icon: '📶' }
        ],
        process: [
            { step: 'App Strategy', description: 'Defining target audience, core features, and monetization strategy' },
            { step: 'Mobile Design', description: 'Crafting pixel-perfect designs optimized for mobile gestures' },
            { step: 'App Development', description: 'Building the frontend and backend with secure API integrations' },
            { step: 'Device Testing', description: 'Rigorous testing on multiple real devices and screen sizes' },
            { step: 'Store Submission', description: 'Handling the complex App Store and Play Store launch process' }
        ]
    },
    'ui-ux-design': {
        title: 'UI/UX Design Studio',
        description: 'Create beautiful, intuitive, and user-centric designs that drive engagement and business results.',
        heroDescription: 'We blend aesthetics with functionality to create digital experiences that users love and businesses thrive on.',
        features: [
            { title: 'User Research', description: 'Deep diving into user behavior and market requirements', icon: '🔍' },
            { title: 'Prototyping', description: 'Interactive wireframes and high-fidelity mockups', icon: '✍️' },
            { title: 'Visual Identity', description: 'Creating a cohesive look and feel for your brand', icon: '🎨' },
            { title: 'Usability Testing', description: 'Validating designs with real users to ensure perfection', icon: '🧪' }
        ],
        process: [
            { step: 'User Discovery', description: 'Analyzing user personas and journey mapping' },
            { step: 'Wireframing', description: 'Creating the structural blueprint of the application' },
            { step: 'Visual Design', description: 'Applying brand elements and high-fidelity visual assets' },
            { step: 'Interaction Design', description: 'Adding animations and micro-interactions for polished feel' },
            { step: 'Design Handoff', description: 'Preparing assets and documentation for the development team' }
        ]
    },
    'mvp-development': {
        title: 'MVP Development for Startups',
        description: 'Launch your product fast with a high-quality Minimum Viable Product that validates your vision.',
        heroDescription: 'We help startups turn ideas into reality in weeks, not months, focusing on core features that matter most.',
        features: [
            { title: 'Rapid Prototype', description: 'Get a working version of your idea in record time', icon: '⚡' },
            { title: 'Core Feature Focus', description: 'Identifying and building the essential functionality first', icon: '🎯' },
            { title: 'Scalable Foundation', description: 'Built with a architecture that grows with your users', icon: '🏗️' },
            { title: 'Lean Methodology', description: 'Iterative development based on real user feedback', icon: '🔄' }
        ],
        process: [
            { step: 'Lean Discovery', description: 'Defining the smallest possible version of your product' },
            { step: 'Rapid Prototyping', description: 'Quick visual validation of the core user flow' },
            { step: 'Agile Build', description: 'Focusing on high-impact features for initial launch' },
            { step: 'Beta Launch', description: 'Getting your product into the hands of early adopters' },
            { step: 'Feedback Loop', description: 'Analyzing data to plan the next phase of development' }
        ]
    },
    'full-stack-development': {
        title: 'Full Stack Development Agency',
        description: 'Comprehensive end-to-end development services covering both frontend and backend systems.',
        heroDescription: 'We provide complete development solutions, ensuring a seamless connection between your user interface and server logic.',
        features: [
            { title: 'Scalable Backend', description: 'Robust server-side logic and database architecture', icon: '⚙️' },
            { title: 'Modern Frontend', description: 'Responsive and interactive interfaces with React and Next.js', icon: '💻' },
            { title: 'API Integration', description: 'Connecting your app with external services and internal systems', icon: '🔗' },
            { title: 'Cloud Infrastructure', description: 'Deploying and managing apps on AWS, Azure, or GCP', icon: '☁️' }
        ],
        process: [
            { step: 'Arch Design', description: 'Planning the full system architecture and tech stack' },
            { step: 'Database Design', description: 'Creating optimized data structures and relations' },
            { step: 'Parallel Dev', description: 'Building frontend and backend concurrently for efficiency' },
            { step: 'Integration', description: 'Ensuring seamless data flow across the entire stack' },
            { step: 'DevOps & CI/CD', description: 'Setting up automated testing and deployment pipelines' }
        ]
    },
    'ar-vr-development': {
        title: 'AR/VR Development Services',
        description: 'Create immersive augmented and virtual reality experiences that push the boundaries of digital interaction.',
        heroDescription: 'Experience the future with our cutting-edge AR and VR solutions designed for training, retail, and gaming.',
        features: [
            { title: '3D Modeling', description: 'High-quality 3D assets and environment creation', icon: '🧊' },
            { title: 'Interactive VR', description: 'Fully immersive virtual reality experiences', icon: '🥽' },
            { title: 'Augmented reality', description: 'Overlaying digital info on the physical world', icon: '📱' },
            { title: 'Multi-platform', description: 'Support for Meta Quest, Vision Pro, and mobile AR', icon: '🌐' }
        ],
        process: [
            { step: 'Spatial Planning', description: 'Designing the user journey in a 3D environment' },
            { step: 'Asset Creation', description: 'Modeling and texturing all 3D assets needed' },
            { step: 'Interact Script', description: 'Programming the logic for spatial interactions' },
            { step: 'Perf Optimize', description: 'Ensuring high frame rates for comfortable viewing' },
            { step: 'Platform Launch', description: 'Deploying to appropriate AR/VR headsets or stores' }
        ]
    },
    'ai-agent-development': {
        title: 'AI Agent & Automation Solutions',
        description: 'Leverage the power of Artificial Intelligence to automate complex tasks and enhance user intelligence.',
        heroDescription: 'We build intelligent AI agents and integrate Large Language Models to transform how your business operates.',
        features: [
            { title: 'LLM Integration', description: 'Powering your app with GPT-4, Claude, or custom models', icon: '🧠' },
            { title: 'Custom AI Agents', description: 'Autonomous agents that handle specific business workflows', icon: '🤖' },
            { title: 'NLP Solutions', description: 'Advanced sentiment analysis and document processing', icon: '📝' },
            { title: 'Data Intelligence', description: 'Turning raw data into actionable business insights with AI', icon: '📊' }
        ],
        process: [
            { step: 'AI Feasibility', description: 'Identifying high-impact AI opportunities in your workflow' },
            { step: 'Data Prep', description: 'Gathering and cleaning data for model fine-tuning or RAG' },
            { step: 'Model Dev', description: 'Developing custom agents or integrating existing LLMs' },
            { step: 'Prompt Engineer', description: 'Optimizing AI responses for accuracy and reliability' },
            { step: 'Security Check', description: 'Ensuring AI interactions follow safety and privacy protocols' }
        ]
    },
    'landing-page-development': {
        title: 'High-Converting Landing Pages',
        description: 'Design and develop landing pages that convert visitors into customers with lightning speed.',
        heroDescription: 'Direct your campaign traffic to pages that deliver results. Fast, responsive, and optimized for sales.',
        features: [
            { title: 'Conversion Focus', description: 'Strategically placed CTAs and persuasive copy layout', icon: '🎯' },
            { title: 'Speed Optimized', description: 'Sub-second loading times for better ad performance', icon: '⚡' },
            { title: 'A/B Testing Ready', description: 'Built to support easy testing of different versions', icon: '📊' },
            { title: 'Lead Capture', description: 'Seamless integration with your CRM and email tools', icon: '📥' }
        ],
        process: [
            { step: 'Goal Setting', description: 'Defining the primary conversion objective for the page' },
            { step: 'Copywriting', description: 'Drafting persuasive content that speaks to your audience' },
            { step: 'Speed Build', description: 'Developing the page with a focus on core web vitals' },
            { step: 'Tracking Setup', description: 'Implementing analytics and conversion tracking pixels' },
            { step: 'Live Testing', description: 'Verifying the page across devices before driving traffic' }
        ]
    },
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = serviceData[params.service];

    return {
        title: `${service.title} | CodersChain`,
        description: service.description,
        keywords: `${service.title}, web development, software development`,
        openGraph: {
            title: service.title,
            description: service.description,
            type: 'website',
        },
    };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
    const service = serviceData[params.service];

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <ServiceHero
                title={service.title}
                description={service.heroDescription}
            />

            <ServiceFeatures features={service.features} />

            <ServiceProcess process={service.process} />

            <ServicePortfolio service={params.service} />

            <ServiceCTASection />
        </div>
    );
}

// Generate static paths for better SEO
export async function generateStaticParams() {
    return Object.keys(serviceData).map((service) => ({
        service: service,
    }));
}