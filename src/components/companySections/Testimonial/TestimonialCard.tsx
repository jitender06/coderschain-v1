interface TestimonialCardProps {
    testimonial: {
        id: number
        quote: string
        subtitle: string
        name: string
        title: string
        company: string
    }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div
            className={`
        relative rounded-2xl overflow-hidden shrink-0 
        border border-gray-200 dark:border-white/10
        bg-white dark:bg-neutral-900/50 text-gray-900 dark:text-white
        shadow-sm
        transition-all duration-300 ease-in-out
        group cursor-pointer font-sans
        hover:shadow-xl hover:border-[#e669fb]/30
        w-full max-w-[380px] h-[280px] md:h-[320px]
      `}
            style={{
                background: `
          radial-gradient(130% 90% at 20% 0%,
            rgba(230, 105, 251, 0.05) 0%,
            rgba(230, 105, 251, 0.01) 30%,
            transparent 60%)
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
            <div className="absolute inset-0 bg-linear-to-br from-[#e669fb]/0 via-[#e669fb]/0 to-transparent group-hover:from-[#e669fb]/5 group-hover:via-[#e669fb]/2 group-hover:to-transparent transition-all duration-500" />

            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <div>
                    {/* <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-[#fe78b8]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div> */}
                    <blockquote className="text-gray-800 dark:text-gray-100 text-lg md:text-xl font-medium leading-relaxed italic">
                        "{testimonial.quote}"
                    </blockquote>
                </div>

                <div className="flex flex-col mt-4 md:mt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-px bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4]" />
                        <div className="text-gray-900 dark:text-white font-bold text-sm tracking-wide uppercase">{testimonial.name}</div>
                    </div>
                    <div className="text-[#ce3ef4] text-xs font-semibold mt-1">
                        {testimonial.title} @ <span className="opacity-80">{testimonial.company}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
