import * as motion from "framer-motion/client"
import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: string | ReactNode;
}

export default function ServiceFeatures({ features }: { features: Feature[] }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="container-web mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What We <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto font-medium">
            Comprehensive solutions engineered for excellence and tailored to your specific strategic objectives.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 rounded-[2.5rem] bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:border-purple-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                {typeof feature.icon === 'string' ? feature.icon : feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-neutral-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
