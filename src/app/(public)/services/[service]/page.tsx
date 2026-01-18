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
        title: 'Custom Website Development Company',
        description: 'Expert custom web development services creating scalable, high-performance websites tailored to your business objectives.',
        heroDescription: 'We build bespoke web applications that drive growth and deliver exceptional user experiences with modern technologies.',
        features: [
            {
                title: 'Responsive Design',
                description: 'Mobile-first approach ensuring perfect display across all devices',
                icon: '📱'
            },
            {
                title: 'SEO Optimized',
                description: 'Built with search engine best practices for better visibility',
                icon: '🔍'
            },
            {
                title: 'Fast Performance',
                description: 'Lightning-fast loading times for better user engagement',
                icon: '⚡'
            },
            {
                title: 'Scalable Architecture',
                description: 'Future-proof solutions that grow with your business',
                icon: '📈'
            }
        ],
        process: [
            {
                step: 'Discovery & Planning',
                description: 'Understanding your requirements and creating a detailed project roadmap'
            },
            {
                step: 'UI/UX Design',
                description: 'Creating intuitive user interfaces and seamless user experiences'
            },
            {
                step: 'Development',
                description: 'Agile development with regular updates and iterations'
            },
            {
                step: 'Testing & Quality',
                description: 'Comprehensive testing to ensure bug-free delivery'
            },
            {
                step: 'Deployment',
                description: 'Smooth deployment with ongoing support and maintenance'
            }
        ]
    },
    // Add similar data for other services...
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