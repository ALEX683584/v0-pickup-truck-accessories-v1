import type { Metadata } from "next"
import { ProductsSection } from "@/components/products-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"

export const metadata: Metadata = {
  title: "Products | TOBEKIN TONNEAU COVER",
  description: "Browse our full catalog of premium tonneau covers — soft roll-up, low profile, tri-fold, and hard covers for all major truck models.",
}

export default function ProductsPage() {
  return (
    <>
      <ProductsSection />
      <AmazonGuideSection />
      <AmazonGuideLowProfileSection />
      <AmazonGuideTrifoldSection />
    </>
  )
}
