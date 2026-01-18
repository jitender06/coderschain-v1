import CallToAction from "@/components/companySections/CallToAction";
import CaseStudy from "@/components/companySections/CaseStudy/CaseStudy";
import HeroGeometric from "@/components/companySections/HeroGeometric";
import ProjectShowcase from "@/components/companySections/ProjectShowcase/ProjectShowcase";
import ServicesSection from "@/components/companySections/ServicesSection";
import TestimonialCarousel from "@/components/companySections/Testimonial/TestimonialCarousel";
import { WobbleCardSection } from "@/components/companySections/WobbleCardSection";

export default function Home() {
  return (
    <>
      <HeroGeometric />
      <ServicesSection/>
      <ProjectShowcase />
      <WobbleCardSection />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
