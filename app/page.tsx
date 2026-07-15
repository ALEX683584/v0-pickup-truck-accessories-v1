import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaSection } from "@/components/cta-section"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const HOME_DESCRIPTION = "Shop TOBEKIN premium tonneau covers for pickup trucks, including soft roll-up, low-profile, tri-fold, and hard covers built for weather protection, secure cargo storage, and easy installation."

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    url: SITE_URL,
    title: "TOBEKIN TONNEAU COVER | Premium Tonneau Covers & Truck Accessories",
    description: HOME_DESCRIPTION,
  },
  twitter: {
    title: "TOBEKIN TONNEAU COVER | Premium Tonneau Covers",
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
              Pickup Truck Bed Covers Built for Real-World Use
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TOBEKIN designs tonneau covers for truck owners who want reliable cargo protection without complicated installation. Our lineup includes soft roll-up tonneau covers for everyday convenience, low-profile covers for a cleaner factory-style look, tri-fold tonneau covers for fast bed access, and hard covers for added security.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each truck bed cover is engineered around fitment, weather resistance, and simple clamp-on installation for popular pickup models including Ford F-150, Chevy Silverado, GMC Sierra, Toyota Tacoma, Dodge Ram, Honda Ridgeline, Jeep Gladiator, and Ford Maverick. Whether you use your pickup for work, weekend travel, or daily hauling, TOBEKIN helps keep tools, gear, and cargo cleaner, drier, and better protected.
            </p>
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
