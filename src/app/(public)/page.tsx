import CallToAction from "@/components/companySections/CallToAction";
import CaseStudy from "@/components/companySections/CaseStudy/CaseStudy";
import HeroGeometric from "@/components/companySections/HeroGeometric";
import ProjectShowcase from "@/components/companySections/ProjectShowcase/ProjectShowcase";
import ServicesSection from "@/components/companySections/ServicesSection";
import TestimonialCarousel from "@/components/companySections/Testimonial/TestimonialCarousel";
import { WobbleCardSection } from "@/components/companySections/WobbleCardSection";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coderschain | Leading Custom Software & AI Development Agency',
  description: 'Coderschain provides end-to-end software development services, including custom web apps, mobile apps, AI automation, and UI/UX design. Build your digital legacy with us.',
};

export default function Home() {
  return (
    <>
      <HeroGeometric />
      <ServicesSection />
      <ProjectShowcase />
      <WobbleCardSection />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
