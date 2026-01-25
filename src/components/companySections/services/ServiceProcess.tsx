import * as motion from "framer-motion/client"

export default function ServiceProcess({ process }: { process: Array<{ step: string; description: string }> }) {
    return (
        <section className="py-24 bg-gray-50/50 dark:bg-neutral-950/50 border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="container-web mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Our Strategic <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Execution</span>
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto font-medium">
                        A disciplined, transparent, and iterative approach to turning complex requirements into seamless digital products.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

                    {process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Step Indicator */}
                            <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black border-2 border-indigo-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                <span className="text-indigo-500 font-black text-sm">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                            </div>

                            {/* Content Card */}
                            <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {step.step}
                                </h3>
                                <p className="text-gray-500 dark:text-neutral-400 text-lg leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>

                            {/* Spacer for Desktop Layout */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
