import type { Metadata } from "next"
import { ProductsSection } from "@/components/products-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"
import { ProductsPageBanner } from "@/components/products-page-banner"
import { ProductFeatureScroller } from "@/components/product-feature-scroller"

export const metadata: Metadata = {
  title: "Products | TOBEKIN TONNEAU COVER",
  description: "Browse our full catalog of premium tonneau covers — soft roll-up, low profile, tri-fold, and hard covers for all major truck models.",
}

const productFeatures = [
  {
    title: "Soft Roll-Up",
    description: "Light by design. Ready for everyday essentials.",
    image: "/products/v1.jpg",
    href: "#soft-roll-up",
  },
  {
    title: "Soft Low Profile",
    description: "Sleek low-profile design with durable soft vinyl.",
    image: "/products/v2.jpg",
    href: "#soft-low-profile",
  },
  {
    title: "Soft Tri-Fold",
    description: "A simple, stylish way to keep life&apos;s cargo clean and dry.",
    image: "/products/v3.jpg",
    href: "#soft-tri-fold",
  },
  {
    title: "Hard Tri-Fold",
    description: "Enhanced security. All-weather protection. Everyday confidence.",
    image: "/products/v8.jpg",
    href: "#hard-tri-fold",
  },
  {
    title: "Hard Flip-Up",
    description: "The cover that does it all. Protection, security, and full bed access.",
    image: "/products/v9.jpg",
    href: "#hard-flip-up",
  },
]

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
      <ProductFeatureScroller features={productFeatures} />
      <ProductsSection />
      <AmazonGuideSection />
      <AmazonGuideLowProfileSection />
      <AmazonGuideTrifoldSection />
    </>
  )
}
