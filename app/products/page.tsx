import type { Metadata } from "next"
import { ProductsSection } from "@/components/products-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"
import { ProductsPageBanner } from "@/components/products-page-banner"
import { ProductFeatureScroller } from "@/components/product-feature-scroller"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const PRODUCTS_URL = `${SITE_URL}/products`
const PRODUCTS_DESCRIPTION = "Browse TOBEKIN tonneau covers for pickup trucks, including soft roll-up, low-profile, tri-fold, hard tri-fold, and flip-up truck bed covers for major models."

export const metadata: Metadata = {
  title: "Tonneau Covers for Pickup Trucks",
  description: PRODUCTS_DESCRIPTION,
  alternates: {
    canonical: PRODUCTS_URL,
  },
  openGraph: {
    url: PRODUCTS_URL,
    title: "Tonneau Covers for Pickup Trucks | TOBEKIN TONNEAU COVER",
    description: PRODUCTS_DESCRIPTION,
    images: [
      {
        url: "/products-banner.jpg",
        width: 1300,
        height: 520,
        alt: "TOBEKIN tonneau covers for pickup trucks",
      },
    ],
  },
  twitter: {
    title: "Tonneau Covers for Pickup Trucks | TOBEKIN",
    description: PRODUCTS_DESCRIPTION,
    images: ["/products-banner.jpg"],
  },
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
    url: PRODUCTS_URL,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Soft Roll-up Tonneau Cover",
          brand: { "@type": "Brand", name: "TOBEKIN" },
          image: `${SITE_URL}/products/v1.jpg`,
          description: "Easy roll-up tonneau cover with lightweight construction, drill-free installation, and water and dust resistance.",
          category: "Truck Bed Cover",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Soft Low Profile Tonneau Cover",
          brand: { "@type": "Brand", name: "TOBEKIN" },
          image: `${SITE_URL}/products/v2.jpg`,
          description: "Low-profile soft tonneau cover with durable vinyl, weather protection, and easy clamp-on installation.",
          category: "Truck Bed Cover",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Soft Tri-fold Tonneau Cover",
          brand: { "@type": "Brand", name: "TOBEKIN" },
          image: `${SITE_URL}/products/v3.jpg`,
          description: "Soft tri-fold tonneau cover with reinforced vinyl surface and tool-free pre-assembled installation.",
          category: "Truck Bed Cover",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Hard Tri-fold Low Profile Tonneau Cover",
          brand: { "@type": "Brand", name: "TOBEKIN" },
          image: `${SITE_URL}/products/v8.jpg`,
          description: "Hard tri-fold low-profile tonneau cover with rigid panels, enhanced cargo security, and all-weather protection.",
          category: "Truck Bed Cover",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Product",
          name: "Hard Flip-Up Low Profile Tonneau Cover",
          brand: { "@type": "Brand", name: "TOBEKIN" },
          image: `${SITE_URL}/products/v9.jpg`,
          description: "Hard flip-up low-profile tonneau cover with rigid aluminum-style panels, bed access, and durable protection.",
          category: "Truck Bed Cover",
        },
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
