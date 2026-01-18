import CaseStudy from '@/components/companySections/CaseStudy/CaseStudy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Case Studies | Success Stories & Portfolio",
  description: "Explore our portfolio of successful projects. See how we've helped businesses transform their digital presence with cutting-edge technology solutions.",
  keywords: ["case studies", "portfolio", "success stories", "web development", "mobile apps", "UI/UX design"],
  openGraph: {
    title: "Our Case Studies | Success Stories & Portfolio",
    description: "Explore our portfolio of successful projects and see real results.",
    type: "website",
  },
}

export default function ShowcasePage() {
  return <CaseStudy />
}