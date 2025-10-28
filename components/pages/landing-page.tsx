import { PublicLayout } from "@/components/templates/public-layout"
import { HeroSection } from "@/components/organisms/hero-section"
import { FeaturesSection } from "@/components/organisms/features-section"
import { HowItWorksSection } from "@/components/organisms/how-it-works-section"
import { PricingSection } from "@/components/organisms/pricing-section"
import { CTASection } from "@/components/organisms/cta-section"

export function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </PublicLayout>
  )
}
