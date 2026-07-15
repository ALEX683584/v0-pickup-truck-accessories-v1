import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const CONTACT_URL = `${SITE_URL}/contact`
const CONTACT_DESCRIPTION = "Contact TOBEKIN for tonneau cover fitment questions, product support, truck bed cover inquiries, and Amazon order guidance."

export const metadata: Metadata = {
  title: "Contact Us",
  description: CONTACT_DESCRIPTION,
  alternates: {
    canonical: CONTACT_URL,
  },
  openGraph: {
    url: CONTACT_URL,
    title: "Contact Us | TOBEKIN TONNEAU COVER",
    description: CONTACT_DESCRIPTION,
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            Ready to discuss your project? Send us an inquiry and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
