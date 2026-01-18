"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
    {
        id: 1,
        icon: "🌐",
        category: "Web Development",
        title: "Web App Development",
        description: "A decade of excellence in custom web application development, transforming visionary ideas into powerful digital solutions with cutting-edge technologies and scalable architectures.",
        features: ["Custom Solutions", "Scalable Architecture", "10+ Years Experience"]
    },
    {
        id: 2,
        icon: "🤖",
        category: "Artificial Intelligence",
        title: "AI App Development",
        description: "Pioneering AI-powered mobile applications that leverage machine learning and advanced algorithms to deliver intelligent, adaptive user experiences and business automation.",
        features: ["Machine Learning", "AI Integration", "Smart Automation"]
    },
    {
        id: 3,
        icon: "🚀",
        category: "Startup Solutions",
        title: "MVP Development Services",
        description: "Accelerate your market entry with our specialized MVP development, transforming concepts into functional prototypes that validate your business model and attract early adopters.",
        features: ["Rapid Prototyping", "Market Validation", "Cost-Effective"]
    },
    {
        id: 4,
        icon: "📱",
        category: "Mobile Excellence",
        title: "Mobile App Development",
        description: "Comprehensive mobile application development with a decade of expertise, delivering cross-platform solutions using the latest frameworks and industry-best practices.",
        features: ["Cross-Platform", "Native Development", "Latest Technologies"]
    },
    {
        id: 5,
        icon: "🎨",
        category: "Design Innovation",
        title: "UI/UX Design Services",
        description: "Transform user experiences with our award-winning UI/UX design team, creating intuitive interfaces and engaging digital journeys that drive conversion and user satisfaction.",
        features: ["User-Centered Design", "Interactive Prototypes", "Brand Alignment"]
    },
    {
        id: 6,
        icon: "👓",
        category: "Immersive Tech",
        title: "AR/VR Development",
        description: "Create captivating augmented and virtual reality experiences that push boundaries, from interactive training simulations to immersive brand engagements and gaming applications.",
        features: ["Immersive Experiences", "3D Modeling", "Interactive Solutions"]
    }
]

export default function ServicesSection() {
    return (
        <section className="w-full bg-background container-web">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Header Section */}
                <div className="text-center space-y-4 mb-12 md:mb-16">
                    <Badge variant="secondary" className="px-4 py-1 text-sm font-semibold">
                        Our Services
                    </Badge>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Transformative Digital
                        <span className="block text-primary mt-2">Solutions</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Empowering businesses with cutting-edge technology solutions, from concept to deployment,
                        delivering exceptional digital experiences that drive growth and innovation.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 md:mt-20">
                    <div className="bg-muted/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Digital Presence?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss how our expertise can bring your vision to life with innovative,
                            scalable, and user-centric solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white  px-8 py-3 rounded-lg font-semibold transition-colors">
                                Start Your Project
                            </button>
                            <button className="border border-input bg-background px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ServiceCardProps {
    service: {
        id: number
        icon: string
        category: string
        title: string
        description: string
        features: string[]
    }
}

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card className="group relative overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20 h-full">
            <CardContent className="p-6 md:p-8">
                {/* Icon and Category */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{service.icon}</div>
                    <Badge variant="outline" className="font-medium">
                        {service.category}
                    </Badge>
                </div>

                {/* Title and Description */}
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                    </p>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-2">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </CardContent>
        </Card>
    )
}