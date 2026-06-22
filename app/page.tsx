import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { ShoppingCartSection } from "@/components/shopping-cart-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ShoppingCartSection />
        <AmazonGuideSection />
        <AmazonGuideLowProfileSection />
        <AmazonGuideTrifoldSection />

        <ContactSection />
      </main>
      <AboutSection />
      <Footer />
    </div>
  )
}
