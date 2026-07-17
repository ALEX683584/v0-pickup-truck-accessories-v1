import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const CONTACT_URL = `${SITE_URL}/contact`
const CONTACT_DESCRIPTION = "Send a B2B inquiry to TOBEKIN for wholesale tonneau covers, dealer pricing, bulk truck bed cover orders, fitment support, and supplier information."

export const metadata: Metadata = {
  title: "B2B Tonneau Cover Inquiry",
  description: CONTACT_DESCRIPTION,
  alternates: {
    canonical: CONTACT_URL,
  },
  openGraph: {
    url: CONTACT_URL,
    title: "B2B Tonneau Cover Inquiry | TOBEKIN TONNEAU COVER",
    description: CONTACT_DESCRIPTION,
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">B2B Tonneau Cover Inquiry</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            Send your wholesale, dealer, distributor, or bulk purchase inquiry. Our team will respond within 24 hours with fitment guidance, product options, and next steps.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
