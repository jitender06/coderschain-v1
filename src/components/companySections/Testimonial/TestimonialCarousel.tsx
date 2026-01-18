"use client"

import { useRef } from "react"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
    {
        id: 1,
        quote: "CodersChain transformed our legacy system into a high-performance cloud platform. Their technical depth and speed of delivery were exceptional.",
        subtitle: "Expert Cloud Transformation",
        name: "David Chen",
        title: "VP of Engineering",
        company: "Nexus Solutions",
    },
    {
        id: 2,
        quote: "The AI agents they built for us have automated 60% of our manual workflows. Truly a game-changer for our operational efficiency.",
        subtitle: "Cutting-edge AI Integration",
        name: "Elena Rodriguez",
        title: "Operations Director",
        company: "FlowState AI",
    },
    {
        id: 3,
        quote: "From MVP to a full-scale mobile app in just three months. They are more than just developers; they are strategic product partners.",
        subtitle: "Rapid Product Launch",
        name: "Marcus Thorne",
        title: "Founder & CEO",
        company: "SwiftPay",
    },
    {
        id: 4,
        quote: "Exceptional UI/UX design combined with robust architecture. Our user engagement increased by 40% after the redesign.",
        subtitle: "Design-Driven Results",
        name: "Sarah Lindberg",
        title: "Head of Product",
        company: "CreativeCloud",
    },
]

export default function TestimonialCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)

    // Create a continuous array by duplicating testimonials
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background via-background/20 to-transparent pointer-events-none z-30" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-20" />

            {/* Scrolling container */}
            <div
                ref={scrollRef}
                className="flex gap-4"
                style={{
                    animation: 'scroll 20s linear infinite',
                    width: 'fit-content'
                }}
            >
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div key={`${testimonial.id}-${index}`} style={{ flexShrink: 0 }}>
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
            </div>

            {/* Side gradients */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move by exactly 1/3 of total width (4 cards × 380px + 4 gaps × 16px) */
            transform: translateX(calc(-380px * 4 - 16px * 4));
          }
        }
      `}</style>
        </div>
    )
}