import type { Metadata } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const TERMS_URL = `${SITE_URL}/terms`

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for our pickup truck accessories website.",
  alternates: {
    canonical: TERMS_URL,
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: July 3, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              By accessing and using this website, you agree to be bound by these
              Terms of Service. If you do not agree with any part of these terms,
              you must not use this website.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              1. Use of the Website
            </h2>
            <p>
              This website provides information about our pickup truck tonneau
              covers and accessories, with links to purchase products on Amazon and
              other third-party platforms. You may use this website for personal,
              non-commercial purposes only.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              2. Product Information
            </h2>
            <p>
              We strive to provide accurate product information, including
              compatibility details (year, make, model, bed size). However, we do
              not warrant that product descriptions, images, or compatibility
              information are always accurate, complete, reliable, or error-free.
              All purchases are made through Amazon, and Amazon's terms govern the
              actual sale.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              3. Affiliate Disclosure
            </h2>
            <p>
              This website contains affiliate links to Amazon. As an Amazon
              Associate, we earn from qualifying purchases at no extra cost to you.
              This helps support our website and allows us to continue providing
              product information and reviews.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, images,
              and software, is the property of our company or its content providers
              and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              5. Third-Party Links
            </h2>
            <p>
              Our website contains links to third-party websites (such as Amazon).
              We are not responsible for the content, accuracy, or practices of
              these third-party sites. Accessing these links is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              6. Disclaimer of Warranties
            </h2>
            <p>
              This website is provided "as is" and "as available" without any
              warranties of any kind, express or implied. We do not warrant that
              the website will be uninterrupted, error-free, or free of viruses or
              other harmful components.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, our company shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of this website.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold us harmless from any claims,
              damages, losses, or expenses arising from your use of this website or
              violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              10. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will
              be effective immediately upon posting on this page.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              11. Contact
            </h2>
            <p>
              For questions about these Terms, please contact us via our Contact
              page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
