import { PublicLayout } from "@/components/templates/public-layout"
import { HeroSection } from "@/components/organisms/hero-section"
import { FeaturesSection } from "@/components/organisms/features-section"
import { HowItWorksSection } from "@/components/organisms/how-it-works-section"
import { ExamplesSection } from "@/components/organisms/examples-section"
import { TestimonialsSection } from "@/components/organisms/testimonials-section"
import { CTASection } from "@/components/organisms/cta-section"

export function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ExamplesSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </PublicLayout>
  )
}
