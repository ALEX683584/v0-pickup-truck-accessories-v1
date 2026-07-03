import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Warranty Policy",
  description: "Warranty Policy for our pickup truck accessories products.",
}

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Warranty Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: July 3, 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              We stand behind the quality of our products. All warranty claims are
              handled by the manufacturer or Amazon, depending on the specific
              product and issue. This page provides a general overview of warranty
              coverage for our product lines.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Standard Manufacturer Warranty
            </h2>
            <p>
              All tonneau covers and accessories sold through our Amazon links
              come with a standard manufacturer warranty. Warranty terms vary by
              product line:
            </p>

            <h3 className="text-xl font-semibold text-foreground pt-4">
              Soft Roll-Up Tonneau Covers
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Frame: Lifetime limited warranty</li>
              <li>Vinyl tarp: 5-year limited warranty</li>
              <li>Hardware and clamps: 3-year limited warranty</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground pt-4">
              Soft Low-Profile Roll-Up Tonneau Covers
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Frame: Lifetime limited warranty</li>
              <li>Vinyl tarp: 5-year limited warranty</li>
              <li>Hardware and clamps: 3-year limited warranty</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground pt-4">
              Soft Tri-Fold Tonneau Covers
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Frame: 5-year limited warranty</li>
              <li>Vinyl tarp: 3-year limited warranty</li>
              <li>Hardware and clamps: 3-year limited warranty</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              What the Warranty Covers
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Defects in materials and workmanship under normal use</li>
              <li>Structural failure of frame components</li>
              <li>Premature wear of vinyl tarp under normal conditions</li>
              <li>Hardware failure not caused by misuse</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              What the Warranty Does NOT Cover
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Damage caused by accidents, abuse, or improper installation</li>
              <li>Normal wear and tear</li>
              <li>Damage from overloading the cover</li>
              <li>Cosmetic damage that does not affect functionality</li>
              <li>Products modified or repaired by unauthorized parties</li>
              <li>Damage from extreme weather events (hail, flooding, etc.)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              How to File a Warranty Claim
            </h2>
            <p>
              All warranty claims are processed through Amazon or the manufacturer
              directly. To file a claim:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Have your Amazon order number ready</li>
              <li>Take photos of the defect or damage</li>
              <li>Contact Amazon customer service or the manufacturer (see product packaging for contact details)</li>
              <li>Provide your order information and photos</li>
            </ol>
            <p>
              Most claims are resolved within 5-10 business days. We are also
              happy to help you navigate the warranty process — please reach out
              via our Contact page.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Installation Requirements
            </h2>
            <p>
              Warranty coverage requires proper installation following the included
              instructions. Improper installation may void the warranty. We
              strongly recommend professional installation if you are not
              experienced with truck bed accessories.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Replacement Parts
            </h2>
            <p>
              Replacement parts may be available for out-of-warranty products at
              an additional cost. Contact the manufacturer directly to inquire
              about replacement parts.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">
              Questions?
            </h2>
            <p>
              If you have questions about warranty coverage for a specific
              product, please contact us and we will be happy to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
