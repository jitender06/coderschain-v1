interface TestimonialCardProps {
    testimonial: {
        id: number
        quote: string
        subtitle: string
        name: string
        title: string
        company: string
        avatar: string
        logo: string
    }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div
            className={`
        relative rounded-2xl overflow-hidden flex-shrink-0 
        border border-border
        bg-card text-card-foreground
        shadow-sm
        transition-all duration-300 ease-in-out
        group cursor-pointer font-sans
        hover:shadow-md hover:border-border/80
        w-full max-w-[380px] h-[280px] md:h-[320px]
      `}
            style={{
                background: `
          radial-gradient(130% 90% at 20% 0%,
            rgba(255,255,255,.08) 0%,
            rgba(255,255,255,.03) 30%,
            transparent 60%),
          linear-gradient(180deg,
            rgba(255,255,255,.02), rgba(0,0,0,.10))
        `,
                boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,.04),
          0 4px 12px rgba(0,0,0,.1)
        `,
            }}
        >
            <span
                className="pointer-events-none absolute inset-0 opacity-5 dark:opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-transparent group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-500" />

            <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
                <div>
                    <blockquote className="text-card-foreground text-lg md:text-2xl font-medium leading-relaxed mb-3">
                        "{testimonial.quote}"
                    </blockquote>
                    <p className="text-muted-foreground text-sm font-medium">{testimonial.subtitle}</p>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-6">
                    <div className="relative flex items-center">
                        <img
                            src={testimonial.logo || "/placeholder.svg"}
                            alt={`${testimonial.company} logo`}
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-muted p-1 md:p-2"
                        />
                        <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover border-2 border-muted -ml-2"
                        />
                    </div>
                    <div>
                        <div className="text-card-foreground font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-primary text-xs">
                            {testimonial.title} - {testimonial.company}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}