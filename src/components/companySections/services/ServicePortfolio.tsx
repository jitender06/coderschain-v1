import * as motion from "framer-motion/client"
import { ExternalLink, Layers } from "lucide-react"

export default function ServicePortfolio({ service }: { service: string }) {
    // Portfolio items placeholders with a more premium look
    const portfolioItems = [
        { title: "Enterprise Solution", category: "Full-scale System" },
        { title: "Consumer Platform", category: "B2C Excellence" },
        { title: "Innovation Lab", category: "R&D Prototype" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
            <div className="container-web mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Case <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Studies</span>
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto font-medium">
                        Real-world examples of how we've solved complex technical challenges for world-class clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center relative overflow-hidden">
                                <Layers className="w-12 h-12 text-gray-400 dark:text-neutral-700 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2 block">{item.category}</span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                    View Full Project <ExternalLink className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
