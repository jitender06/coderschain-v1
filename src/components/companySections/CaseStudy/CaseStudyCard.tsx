"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { CaseStudy } from "./data/caseStudies"

interface CaseStudyCardProps {
    study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
    const router = useRouter()

    const handleViewDetails = () => {
        router.push(`/showcase/${study.slug}`)
    }

    return (
        <Card className="group relative overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 h-full">
            <CardContent className="p-0">
                {/* Image Header */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                        <Badge className="bg-primary text-primary-foreground">
                            {study.categories[0]}
                        </Badge>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {study.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {study.excerpt}
                        </p>
                    </div>

                    {/* Client & Duration */}
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span className="font-medium">{study.client}</span>
                        <span>{study.duration}</span>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                        {study.results.map((result, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-primary">{result.metric}</div>
                                <div className="text-xs text-muted-foreground mt-1">{result.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm italic text-muted-foreground mb-2">
                            &ldquo;{study.testimonial.quote}&rdquo;
                        </p>
                        <div className="text-sm font-medium">
                            {study.testimonial.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {study.testimonial.position}
                        </div>
                    </div>

                    {/* CTA */}
                    <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        onClick={handleViewDetails}
                    >
                        View Full Case Study
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}