"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { caseStudies } from "./data/caseStudies"
import { filterCategories } from "./data/filterCategories"
import { CaseStudyCard } from "./CaseStudyCard"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, LayoutGrid, Filter } from "lucide-react"

export default function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.categories.includes(activeFilter))

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Premium Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <div className="container-web mx-auto px-4 md:px-6 relative z-10 pt-0 pb-0">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-purple-500 mb-6"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">The Proof of Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
            >
              Our <span className="bg-gradient-to-r from-[#fe78b8] to-[#ce3ef4] bg-clip-text text-transparent italic pr-4">Boutique</span> Showcase
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed"
            >
              A curated collection of high-impact digital solutions engineered for global visionaries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Logic & Filter Section */}
      <section className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-y border-neutral-100 dark:border-white/5 py-6">
        <div className="container-web mx-auto px-4 md:px-6 pb-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-neutral-400">
              <Filter className="w-3 h-3 text-purple-500" />
              Filter by Expertise
            </div>

            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeFilter === category.id
                      ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-white/10 text-neutral-500 hover:border-purple-500/50 hover:text-purple-500"
                    }`}
                >
                  {category.label}
                  <span className={`ml-2 ${activeFilter === category.id ? "text-white/60" : "text-neutral-400/50"}`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-web mx-auto px-4 md:px-6">
          <div className="mb-12 flex items-center justify-between">
            <div className="text-xs font-bold text-neutral-400 tracking-widest uppercase">
              Showing {filteredCaseStudies.length} Extraordinary Projects
            </div>
            <LayoutGrid className="w-4 h-4 text-neutral-400" />
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-40 bg-neutral-50 dark:bg-neutral-900 rounded-[3rem] border border-dashed border-neutral-200 dark:border-white/10"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-black mb-2">No projects found</h3>
              <p className="text-neutral-500 mb-8">Try selecting a different specialization.</p>
              <Button
                variant="outline"
                className="rounded-full font-black uppercase tracking-widest text-[10px]"
                onClick={() => setActiveFilter("all")}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-40 border-t border-neutral-100 dark:border-white/5">
        <div className="container-web mx-auto px-4 md:px-6 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-12">
            Ready to build your <br />
            <span className="text-purple-600 italic">Masterpiece?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] px-12 h-16 hover:scale-105 transition-transform">
              Start a Project
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-neutral-200 dark:border-white/10 font-black uppercase tracking-[0.2em] px-12 h-16 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
