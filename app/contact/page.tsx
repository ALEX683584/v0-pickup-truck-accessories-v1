import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | TOBEKIN TONNEAU COVER",
  description: "Get in touch with TOBEKIN. Send us an inquiry and our team will respond within 24 hours.",
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
