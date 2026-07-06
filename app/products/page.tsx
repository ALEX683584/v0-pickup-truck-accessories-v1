import type { Metadata } from "next"
import { ProductsSection } from "@/components/products-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"
import { ProductsPageBanner } from "@/components/products-page-banner"

export const metadata: Metadata = {
  title: "Products | TOBEKIN TONNEAU COVER",
  description: "Browse our full catalog of premium tonneau covers — soft roll-up, low profile, tri-fold, and hard covers for all major truck models.",
}

export default function ProductsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TOBEKIN Tonneau Covers",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Soft Roll-up Tonneau Cover",
        description: "Easy roll-up operation, lightweight & drill-free installation, water & dust resistance.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soft Low Profile Tonneau Cover",
        description: "Low-profile design, durable soft vinyl, easy clamp-on installation.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Soft Tri-fold Tonneau Cover",
        description: "Tri-fold structure, reinforced vinyl surface, tool-free pre-assembled installation.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Hard Tri-fold Low Profile Tonneau Cover",
        description: "Hard tri-fold panels, low-profile appearance, enhanced security.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Hard Flip-Up Low Profile Tonneau Cover",
        description: "Flip-up panel system, rigid aluminum hard shell, low-profile fit.",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ProductsPageBanner />
      <ProductsSection />
      <AmazonGuideSection />
      <AmazonGuideLowProfileSection />
      <AmazonGuideTrifoldSection />
    </>
  )
}
