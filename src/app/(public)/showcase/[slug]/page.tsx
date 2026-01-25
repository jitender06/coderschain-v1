import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyDetail } from "@/components/companySections/CaseStudy/CaseStudyDetail"
import { caseStudies } from "@/components/companySections/CaseStudy/data/caseStudies"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const study = caseStudies.find(s => s.slug === slug)

    if (!study) {
        return {
            title: "Case Study Not Found",
            description: "The requested case study could not be found."
        }
    }

    return {
        title: study.seo.title,
        description: study.seo.description,
        keywords: study.seo.keywords,
        openGraph: {
            title: study.seo.title,
            description: study.seo.description,
            type: "article",
            publishedTime: study.completionDate,
            images: [study.image],
        },
        twitter: {
            card: "summary_large_image",
            title: study.seo.title,
            description: study.seo.description,
            images: [study.image],
        },
    }
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }))
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params
    const study = caseStudies?.find(s => s?.slug === slug)

    if (!study) {
        notFound()
    }

    return <CaseStudyDetail study={study} />
}