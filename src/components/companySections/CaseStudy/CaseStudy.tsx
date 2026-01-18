"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { caseStudies } from "./data/caseStudies"
import { filterCategories } from "./data/filterCategories"
import { CaseStudyCard } from "./CaseStudyCard"

export default function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.categories.includes(activeFilter))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6 pt-28 pb-5">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge variant="secondary" className="px-4 py-1 text-sm font-semibold">
              Success Stories
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Proven Results,
              <span className="block text-primary mt-2">Real Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how we&apos;ve helped businesses transform their digital presence
              and achieve remarkable growth through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full">
        <div className="container-web px-4 md:px-6">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-muted-foreground text-lg">
                Filter by category to explore our work
              </p>
            </div>

            {/* Filter Badges */}
            <div className="flex flex-wrap gap-3">
              {filterCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className="px-4 py-2 cursor-pointer transition-all duration-200 hover:scale-105"
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                  <span className="ml-2 text-muted-foreground/70">
                    ({category.count.toString().padStart(2, '0')})
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredCaseStudies.length} case study{filteredCaseStudies.length !== 1 ? 'ies' : ''}
              {activeFilter !== "all" && ` in ${filterCategories.find(cat => cat.id === activeFilter)?.label}`}
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>

          {/* Empty State */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground text-lg mb-4">
                No case studies found for this category.
              </div>
              <Button
                variant="outline"
                onClick={() => setActiveFilter("all")}
              >
                View All Case Studies
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}