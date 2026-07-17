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
  title: "B2B Aftermarket Truck Accessories",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: "B2B Aftermarket Truck Accessories | TOBEKIN TONNEAU COVER",
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/products-banner.jpg",
        width: 1300,
        height: 520,
        alt: "TOBEKIN aftermarket truck accessories and tonneau covers",
      },
    ],
  },
  twitter: {
    title: "B2B Aftermarket Truck Accessories | TOBEKIN",
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
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Truck Accessories That Start with the Bed
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many pickup truck accessories are cosmetic, but a tonneau cover changes how the truck works every day. It helps protect cargo from weather, hides gear from view, and gives B2B buyers a practical product category for pickup accessory sales.
            </p>
          </div>

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Popular Pickup Truck Accessory Searches
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "aftermarket truck accessories",
                "pickup truck accessories",
                "truck bed accessories",
                "truck accessories for cargo protection",
                "soft roll-up tonneau cover",
                "hard folding tonneau cover",
              ].map((term) => (
                <div key={term} className="flex items-center gap-3 rounded-lg border border-border p-4">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="text-foreground font-medium">{term}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
