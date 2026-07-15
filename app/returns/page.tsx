import type { Metadata } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"
const RETURNS_URL = `${SITE_URL}/returns`
const RETURNS_DESCRIPTION = "Review TOBEKIN return guidance for pickup truck tonneau covers purchased through Amazon, including return steps, shipping, refunds, and damaged items."

export const metadata: Metadata = {
  title: "Return Policy",
  description: RETURNS_DESCRIPTION,
  alternates: {
    canonical: RETURNS_URL,
  },
  openGraph: {
    url: RETURNS_URL,
    title: "Return Policy | TOBEKIN TONNEAU COVER",
    description: RETURNS_DESCRIPTION,
  },
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Return Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: July 3, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              All products featured on this website are sold and shipped by Amazon
              or its authorized sellers. As an affiliate site, we do not directly
              process orders, payments, or returns. All return requests are handled
              through Amazon's return system.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Amazon's Standard Return Policy
            </h2>
            <p>
              Most items sold on Amazon can be returned within 30 days of receipt
              for a full refund. Items must be returned in their original condition
              and packaging. Some products may have different return windows or
              restrictions as indicated on the product listing page.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              How to Initiate a Return
            </h2>
            <p>To return a product purchased through one of our Amazon links:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Go to Amazon.com and sign in to your account</li>
              <li>Navigate to "Your Orders"</li>
              <li>Find the order containing the item you want to return</li>
              <li>Click "Return or Replace Items"</li>
              <li>Follow the on-screen instructions to complete your return</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Return Shipping
            </h2>
            <p>
              For most returns, Amazon provides a prepaid return shipping label at
              no cost to you. For certain items or return reasons, return shipping
              fees may apply as outlined in Amazon's return policy.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Refund Processing
            </h2>
            <p>
              Once Amazon receives and inspects your return, a refund will be
              issued to your original payment method within 3-5 business days.
              Amazon will notify you via email when the refund has been processed.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Non-Returnable Items
            </h2>
            <p>Some items may not be eligible for return, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items marked as "non-returnable" on the product page</li>
              <li>Items that have been used, installed, or damaged after delivery</li>
              <li>Custom-made or personalized products</li>
              <li>Gift cards and downloadable software</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Defective or Damaged Items
            </h2>
            <p>
              If you receive a defective or damaged product, please contact Amazon
              customer service immediately for a replacement or refund. We are also
              happy to assist you in navigating the return process — please reach
              out via our Contact page.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Compatibility Issues
            </h2>
            <p>
              We make every effort to provide accurate compatibility information
              (year, make, model, bed size) for our products. If a product does not
              fit your vehicle, it is eligible for return under Amazon's standard
              return policy.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Need Help?
            </h2>
            <p>
              If you have any questions or need assistance with a return, please
              don't hesitate to contact us through our Contact page. While we
              cannot process returns directly, we can help guide you through
              Amazon's return process.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
