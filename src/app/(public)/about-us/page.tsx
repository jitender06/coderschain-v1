import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    LightbulbIcon,
    UsersIcon,
    CodeIcon,
    GlobeIcon,
    RocketIcon,
    TargetIcon
} from 'lucide-react'

export const metadata = {
    title: 'About Coderschain | Our Mission & Team',
    description: 'Learn about Coderschain - a software development agency founded by Jitender Choudhary. We specialize in delivering high-quality web, mobile, and AI solutions.',
    keywords: 'coderschain, softare development agency, about us, tech team, startup solutions, software engineering india',
}

function Page() {
    const services = [
        {
            icon: <CodeIcon className="h-6 w-6" />,
            title: 'Tech Blogs & Content',
            description: 'Comprehensive technical articles, tutorials, and guides to help developers at all levels'
        },
        {
            icon: <UsersIcon className="h-6 w-6" />,
            title: 'Mentorship & Guidance',
            description: 'Personalized mentorship programs to accelerate your learning and career growth'
        },
        {
            icon: <RocketIcon className="h-6 w-6" />,
            title: 'Project Development',
            description: 'End-to-end project development from concept to deployment with best practices'
        },
        {
            icon: <GlobeIcon className="h-6 w-6" />,
            title: 'Web Development Services',
            description: 'Professional website and web application development for startups and businesses'
        }
    ]

    const techStack = [
        'MERN Stack', 'MEAN Stack', 'React Native', 'PWA', 'Hybrid Apps',
        'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'
    ]

    const teamStats = [
        { value: '3+', label: 'Years Experience' },
        { value: '20+', label: 'Clients Served' },
        { value: '50+', label: 'Projects Completed' },
        { value: '10', label: 'Team Members' }
    ]

    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-4">
                            Empowering Developers Worldwide
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            About <span className="text-blue-600 dark:text-blue-400">CodersChain</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Your trusted partner in the tech journey - from learning to building
                            and scaling amazing digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-2 border-blue-200 dark:border-blue-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                    <TargetIcon className="h-6 w-6" />
                                    Our Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    To democratize tech education and empower new developers with
                                    practical knowledge, real-world projects, and continuous mentorship.
                                    We believe in building a strong foundation that helps developers
                                    thrive in the ever-evolving tech industry.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-green-200 dark:border-green-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                    <LightbulbIcon className="h-6 w-6" />
                                    Our Vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Creating a global community where every aspiring developer has
                                    access to quality resources, mentorship, and opportunities to
                                    build amazing products that solve real-world problems.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Meet Our Founder
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* <div className="flex justify-center">
                            <div className="text-center">
                                <Avatar className="h-48 w-48 mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-lg">
                                    <AvatarImage src="/images/jitender-choudhary.jpg" alt="Jitender Choudhary" />
                                    <AvatarFallback className="text-2xl bg-blue-100 dark:bg-blue-900">
                                        JC
                                    </AvatarFallback>
                                </Avatar>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Jitender Choudhary
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 mt-2">
                                    Software Engineer & Founder
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Rajasthan, India
                                </p>
                            </div>
                        </div> */}

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Experience & Background
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    With over 3 years of experience as a Software Engineer, I've worked
                                    extensively with numerous startups, gaining deep insights into
                                    industry requirements and challenges. My journey through the startup
                                    ecosystem has given me a unique understanding of what it takes to
                                    build successful digital products.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Freelance Expertise
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    As a freelancer, I've successfully delivered projects for 20+ clients
                                    and startups, specializing in web applications, software development,
                                    PWA apps, and hybrid applications using React Native.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            What We Offer
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Comprehensive solutions to support developers at every stage of their journey
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                                            {service.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-800 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {teamStats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold">
                                    {stat.value}
                                </div>
                                <div className="text-blue-100 dark:text-blue-200">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-b-2">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Specialized in modern technologies and frameworks
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="px-4 py-2 text-sm bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team & Company */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Team & Company
                            </h2>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    At <strong>CodersChain</strong>, we have a dedicated team of 10 passionate
                                    professionals who are committed to delivering excellence in every project.
                                </p>
                                <p className="leading-relaxed">
                                    Our team manages projects end-to-end, ensuring quality delivery,
                                    timely execution, and continuous support. We believe in building
                                    long-term relationships with our clients and community members.
                                </p>
                                <p className="leading-relaxed">
                                    Whether you're a startup looking to build your first MVP or an
                                    established business seeking to scale, we have the expertise and
                                    resources to bring your vision to life.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Why Choose CodersChain?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Industry-experienced team
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Startup-friendly approach
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    End-to-end project management
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Continuous support & mentorship
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Quality-driven development
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t-2">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
                        Join our community, explore our services, or start your next project with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-blue-600">
                            Explore Services
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page