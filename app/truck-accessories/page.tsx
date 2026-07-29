import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield, Truck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const PAGE_URL = `${SITE_URL}/truck-accessories`
const PAGE_DESCRIPTION = "Send B2B inquiries for TOBEKIN aftermarket truck accessories, including tonneau covers, truck bed accessories, and bulk sourcing support."

const accessoryGroups = [
  {
    title: "Tonneau Covers",
    description: "Soft roll-up, low-profile, soft folding, hard folding, and flip-up tonneau covers for everyday cargo protection.",
    href: "/products",
  },
  {
    title: "Truck Bed Accessories",
    description: "Pickup truck bed accessories that help protect tools, travel gear, work equipment, and weekend cargo from weather and road dust.",
    href: "/products",
  },
  {
    title: "Aftermarket Truck Upgrades",
    description: "Practical aftermarket truck accessories for wholesalers, dealers, distributors, Amazon sellers, and bulk pickup accessory buyers.",
    href: "/contact",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Cargo Protection",
    description: "A quality truck bed cover helps keep tools, luggage, and outdoor gear cleaner, drier, and better protected.",
  },
  {
    icon: Truck,
    title: "Pickup Fitment",
    description: "TOBEKIN focuses on truck accessories for popular pickups including Ford, Chevy, GMC, Toyota, Ram, Honda, and Jeep models.",
  },
  {
    icon: Wrench,
    title: "B2B Inquiry Support",
    description: "Send your target quantity, market, truck fitments, and product needs so our team can respond with suitable cover options.",
  },
]

export const metadata: Metadata = {
  title: "B2B Aftermarket Truck Accessories & Sourcing | TOBEKIN",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: "B2B Aftermarket Truck Accessories & Sourcing | TOBEKIN",
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/products-banner.jpg",
        width: 1774,
        height: 887,
        alt: "TOBEKIN aftermarket truck accessories and tonneau covers",
      },
    ],
  },
  twitter: {
    title: "B2B Aftermarket Truck Accessories & Sourcing | TOBEKIN",
    description: PAGE_DESCRIPTION,
    images: ["/products-banner.jpg"],
  },
}

export default function TruckAccessoriesPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "B2B Aftermarket Truck Accessories",
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    mainEntity: {
      "@type": "ItemList",
      name: "TOBEKIN truck accessories",
      itemListElement: accessoryGroups.map((group, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: group.title,
        description: group.description,
        url: `${SITE_URL}${group.href}`,
      })),
    },
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
                name: "What are the most popular pickup truck bed accessories for B2B buyers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tonneau covers are the most popular pickup truck bed accessories for B2B sourcing. TOBEKIN offers soft roll-up, low-profile, tri-fold, and hard folding covers suitable for wholesale, dealer, and distributor catalogs.",
                },
              },
              {
                "@type": "Question",
                name: "Why should B2B buyers stock tonneau covers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tonneau covers improve cargo protection, reduce wind drag for better fuel efficiency, and provide a clean appearance. They are practical for daily commuting, jobsite storage, and weekend hauling, making them a high-demand aftermarket truck accessory.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a soft and hard tonneau cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Soft tonneau covers use vinyl or fabric and are lighter, easier to install, and more affordable. Hard tonneau covers use rigid panels (usually aluminum) for greater security and durability. Both types are available from TOBEKIN for B2B purchase.",
                },
              },
              {
                "@type": "Question",
                name: "Do TOBEKIN tonneau covers fit all pickup truck models?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TOBEKIN tonneau covers are precision-engineered for specific truck models and bed sizes, including Ford F-150, Chevy Silverado, GMC Sierra, RAM 1500, Toyota Tundra, and more. Fitment details are available for each product.",
                },
              },
              {
                "@type": "Question",
                name: "How do I submit a bulk or wholesale inquiry for truck accessories?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the TOBEKIN contact page to submit a B2B inquiry. Include your target quantity, truck fitments, product type, and buyer role (wholesaler, dealer, Amazon seller, distributor, or fleet buyer). Our team responds within 24 hours.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/70 mb-4">
              Pickup truck accessories
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              B2B Aftermarket Truck Accessories for Pickup Buyers
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed text-pretty mb-8">
              Source practical truck accessories built around cargo protection, cleaner styling, and everyday utility. TOBEKIN specializes in tonneau covers and truck bed accessories for wholesalers, dealers, distributors, Amazon sellers, and bulk buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/products">
                  Shop Truck Bed Covers
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">Send B2B Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {accessoryGroups.map((group) => (
              <Link
                key={group.title}
                href={group.href}
                className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
                <p className="text-muted-foreground leading-relaxed">{group.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Tonneau Covers Belong on Every Truck Accessories List
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  When B2B buyers compare aftermarket truck accessories, tonneau covers are one of the most useful categories because they improve the truck bed without changing how the pickup drives. A cover can support daily commuting, jobsite storage, camping trips, and weekend hauling.
                </p>
                <p>
                  TOBEKIN focuses on pickup truck bed accessories that are easy to understand and easy to quote: soft roll-up covers for convenience, low-profile covers for clean styling, soft folding covers for quick access, and hard folding covers for added security.
                </p>
              </div>
            </div>
            <div className="grid gap-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="flex gap-4 bg-background rounded-lg p-5 border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
