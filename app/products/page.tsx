import type { Metadata } from "next"
import { ProductsSection } from "@/components/products-section"
import { AmazonGuideSection } from "@/components/amazon-guide-section"
import { AmazonGuideLowProfileSection } from "@/components/amazon-guide-lowprofile-section"
import { AmazonGuideTrifoldSection } from "@/components/amazon-guide-trifold-section"
import { ProductsPageBanner } from "@/components/products-page-banner"

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
        width: 1774,
        height: 887,
        alt: "TOBEKIN tonneau covers for pickup trucks",
      },
    ],
  },
  twitter: {
    title: "B2B Truck Bed Covers & Tonneau Covers | TOBEKIN TONNEAU COVER",
    description: PRODUCTS_DESCRIPTION,
    images: ["/products-banner.jpg"],
  },
}

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of tonneau covers does TOBEKIN offer for B2B buyers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TOBEKIN offers soft roll-up, soft low-profile, soft tri-fold, hard tri-fold, and hard flip-up tonneau covers. All models are available for wholesale, dealer, distributor, and bulk purchasing inquiries.",
                },
              },
              {
                "@type": "Question",
                name: "What is a soft roll-up tonneau cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A soft roll-up tonneau cover uses a lightweight vinyl surface that rolls toward the cab for full bed access. It is the most popular style for everyday use and is easy to install without drilling.",
                },
              },
              {
                "@type": "Question",
                name: "What is a low-profile tonneau cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A low-profile tonneau cover sits flush with or just above the truck bed rails for a clean, sleek appearance. TOBEKIN's soft low-profile model uses durable vinyl with a clamp-on installation.",
                },
              },
              {
                "@type": "Question",
                name: "What is a tri-fold tonneau cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A tri-fold tonneau cover folds into three panels, allowing partial or full bed access. TOBEKIN's soft tri-fold is pre-assembled and installs without tools, making it easy to handle for distributors.",
                },
              },
              {
                "@type": "Question",
                name: "How do I place a B2B or wholesale order for TOBEKIN tonneau covers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Submit a B2B inquiry through the contact page with your quantity, truck fitments, product type, and market. TOBEKIN supports wholesalers, dealers, Amazon sellers, distributors, and fleet buyers.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ProductsSection />
      <AmazonGuideSection />
      <AmazonGuideLowProfileSection />
      <AmazonGuideTrifoldSection />
    </>
  )
}
