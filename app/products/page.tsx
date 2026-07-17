import type { Metadata } from "next"
import { ProductsSection } from "@/components/products-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"
import { ProductsPageBanner } from "@/components/products-page-banner"
import { ProductFeatureScroller } from "@/components/product-feature-scroller"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const PRODUCTS_URL = `${SITE_URL}/products`
const PRODUCTS_DESCRIPTION = "Compare TOBEKIN B2B truck bed covers for wholesale, dealer, distributor, Amazon seller, and bulk tonneau cover inquiries."

export const metadata: Metadata = {
  title: "B2B Truck Bed Covers & Tonneau Covers",
  description: PRODUCTS_DESCRIPTION,
  alternates: {
    canonical: PRODUCTS_URL,
  },
  openGraph: {
    url: PRODUCTS_URL,
    title: "B2B Truck Bed Covers & Tonneau Covers | TOBEKIN TONNEAU COVER",
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
    title: "B2B Truck Bed Covers & Tonneau Covers | TOBEKIN",
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

const keywordSections = [
  {
    title: "Soft Roll-Up Tonneau Covers",
    body: "A soft roll-up tonneau cover is a strong everyday choice when you want quick full-bed access, lightweight handling, and simple clamp-on installation. TOBEKIN soft truck bed covers are built for drivers who carry tools, luggage, camping gear, and daily cargo.",
  },
  {
    title: "Low-Profile and Soft Folding Tonneau Covers",
    body: "Low-profile tonneau covers sit closer to the bed rail for a cleaner pickup look, while soft folding tonneau covers make it easy to open part of the bed without removing the cover. These options balance styling, convenience, and weather protection.",
  },
  {
    title: "Hard Folding Truck Bed Covers",
    body: "Hard folding tonneau covers and hard truck bed covers add a more secure feel for covered cargo. They are a fit for pickup owners comparing hard folding truck bed cover options for stronger panels, all-weather protection, and a more finished appearance.",
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare B2B Pickup Truck Bed Cover Styles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use this guide to compare tonneau truck bed covers for wholesale catalogs, dealer programs, distributor sourcing, Amazon listings, and bulk pickup accessory inquiries. TOBEKIN focuses on practical truck bed covers that are easy to quote, easy to explain, and easy to install.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {keywordSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductFeatureScroller features={productFeatures} />
      <ProductsSection />
      <AmazonGuideSection />
      <AmazonGuideLowProfileSection />
      <AmazonGuideTrifoldSection />
    </>
  )
}
