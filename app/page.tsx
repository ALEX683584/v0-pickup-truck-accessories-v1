import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
