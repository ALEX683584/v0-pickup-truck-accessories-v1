import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProducts = [
  {
    title: "Soft Roll-up Tonneau Cover",
    description1: "Easy Roll-Up Operation",
    description2: "Lightweight & Drill-Free Installation",
    description3: "Water & Dust Resistance",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v1.jpg",
    comingSoon: false,
  },
  {
    title: "Soft Low Profile Tonneau Cover",
    description1: "Low-Profile Design",
    description2: "Durable Soft Vinyl",
    description3: "Easy Clamp-On Installation",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v2.jpg",
    comingSoon: false,
  },
  {
    title: "Soft Tri-fold Tonneau Cover",
    description1: "Tri-Fold Structure",
    description2: "Reinforced Vinyl Surface",
    description3: "Tool-Free, Pre-Assembled Installation",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v3.jpg",
    comingSoon: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We specialize in high-quality tonneau covers you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={224}
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-foreground">{product.title}</h3>
                  {product.comingSoon && (
                    <Badge variant="secondary" className="text-sm">Coming soon</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{product.description1}</p>
                <p className="text-sm text-muted-foreground mb-2">{product.description2}</p>
                <p className="text-sm text-muted-foreground mb-4">{product.description3}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
