import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Need a B2B Tonneau Cover Supplier?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
          Send us your wholesale, dealer, distributor, or bulk order inquiry. We will help you compare tonneau cover options, fitments, and sourcing details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="/contact">Request B2B Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
