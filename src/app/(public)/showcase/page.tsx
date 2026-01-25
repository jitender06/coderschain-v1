import CaseStudy from '@/components/companySections/CaseStudy/CaseStudy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boutique Project Showcase | Digital Masterpieces",
  description: "Explore our curated collection of extraordinary digital solutions. From AI-driven analytics to luxury e-commere, see the impact of our boutique engineering.",
  keywords: ["boutique software", "project portfolio", "digital masterpieces", "software case studies", "premium web solutions"],
  openGraph: {
    title: "Our Boutique Showcase | Exceptional Digital Solutions",
    description: "Explore our curated collection of extraordinary digital solutions and high-impact engineering.",
    type: "website",
  },
}

export default function ShowcasePage() {
  return <CaseStudy />
}