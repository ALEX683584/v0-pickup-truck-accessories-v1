import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { ShoppingCartSection } from "@/components/shopping-cart-section"
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

        <ContactSection />
      </main>
      <AboutSection />
      <Footer />
    </div>
  )
}
