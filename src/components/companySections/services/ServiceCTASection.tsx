import Link from 'next/link';
import * as motion from "framer-motion/client"
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function ServiceCTASection() {
    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container-web relative z-10 mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-[3rem] bg-indigo-600 dark:bg-indigo-600 overflow-hidden relative group shadow-2xl shadow-indigo-500/20"
                >
                    {/* Decorative Patterns */}
                    <div className="absolute top-0 right-0 p-8 text-white/10 flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-16 bg-current rounded-full rotate-45" />
                        ))}
                    </div>

                    <div className="max-w-3xl relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                            Ready to transform your <span className="text-indigo-200">digital vision</span> into reality?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-12 max-w-xl font-medium leading-relaxed">
                            Stop waiting for the perfect moment. Let's discuss your project today and build something that truly defines your market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-white/20 transition-all"
                                >
                                    Get Free Consultation <MessageSquare className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                                >
                                    View Our Work <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Subtle Shine Effect on Background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </motion.div>
            </div>
        </section>
    );
}
