import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaSection } from "@/components/cta-section"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const HOME_DESCRIPTION = "TOBEKIN supplies tonneau truck bed covers for B2B buyers, including wholesalers, dealers, distributors, Amazon sellers, and bulk pickup accessory buyers."

export const metadata: Metadata = {
  title: "B2B Tonneau Truck Bed Covers",
  alternates: {
    canonical: SITE_URL,
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    url: SITE_URL,
    title: "B2B Tonneau Truck Bed Covers | TOBEKIN TONNEAU COVER",
    description: HOME_DESCRIPTION,
  },
  twitter: {
    title: "B2B Tonneau Truck Bed Covers | TOBEKIN",
    description: HOME_DESCRIPTION,
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              B2B Tonneau Truck Bed Covers Built for Real-World Use
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TOBEKIN designs tonneau truck bed covers for B2B buyers serving pickup owners who want reliable cargo protection without complicated installation. Our lineup includes soft roll-up tonneau covers for everyday convenience, low-profile tonneau covers for a cleaner factory-style look, soft tri-fold covers for fast bed access, and hard folding tonneau covers for added security.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each pickup truck bed cover is engineered around fitment, weather resistance, and simple clamp-on installation for popular models including Ford F-150, Chevy Silverado, GMC Sierra, Toyota Tacoma, Dodge Ram, Honda Ridgeline, Jeep Gladiator, and Ford Maverick. Wholesalers, dealers, distributors, Amazon sellers, and fleet buyers can send a B2B inquiry for product options, bulk order needs, and sourcing details.
            </p>
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Aftermarket Truck Accessories for Better Cargo Protection
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond tonneau covers, TOBEKIN helps B2B buyers compare practical truck accessories and truck bed accessories that improve everyday hauling. Start with the bed: a well-fit cover is one of the most useful aftermarket truck accessories for keeping cargo protected and the truck looking clean.
            </p>
            <Link
              href="/truck-accessories"
              className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Explore truck accessories
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
