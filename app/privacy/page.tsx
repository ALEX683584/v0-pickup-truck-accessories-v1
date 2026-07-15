import type { Metadata } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const PRIVACY_URL = `${SITE_URL}/privacy`

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for our pickup truck accessories website.",
  alternates: {
    canonical: PRIVACY_URL,
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: July 3, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              This Privacy Policy describes how our company ("we," "us," or "our")
              collects, uses, and protects your personal information when you visit
              our website or make a purchase through our Amazon product links.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us
              when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out a contact form on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Correspond with us via email</li>
            </ul>
            <p>
              The information we collect may include your name, email address, phone
              number, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              3. Third-Party Services
            </h2>
            <p>
              Our website contains links to Amazon and other third-party websites.
              We are not responsible for the privacy practices of these third
              parties. We encourage you to read the privacy policies of any
              third-party sites you visit. When you click on an Amazon link, Amazon
              may use cookies and collect data according to their own privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              4. Cookies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can control cookies through your
              browser settings.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of transmission
              over the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us using the
              information provided on our Contact page.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              7. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under the age of 13. We do
              not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              through our Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
