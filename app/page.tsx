import { HeroSection } from "@/app/components/home/hero-section"
import { FeatureSection } from "@/app/components/home/feature-section"
import { TestimonialSection } from "@/app/components/home/testimonial-section"
import { HowItWorksSection } from "@/app/components/home/how-it-works-section"
import { CTASection } from "@/app/components/home/cta-section"
import { FAQSection } from "@/app/components/home/faq-section"
import { Footer } from "@/app/components/home/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
