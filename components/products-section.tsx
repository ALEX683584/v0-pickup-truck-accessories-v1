import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Soft Roll-up Tonneau Cover",
    description1: "Easy Roll-Up Operation",
    description2: "Lightweight & Drill-Free Installation",
    description3: "Water & Dust Resistance",
    image: "/products/v1.jpg",
    features: ["Easy to operate", "Weather-resistant", "Lightweight", "Secure mounting"],
  },
  {
    title: "Soft Low Profile Tonneau Cover",
    description1: "Low-Profile Design",
    description2: "Durable Soft Vinyl",
    description3: "Easy Clamp-On Installation",
    image: "/products/v2.jpg",
    features: ["Sleek design", "Weather protection", "Tool-free installation", "Durable fabric"],
  },
  {
    title: "Soft Tri-fold Tonneau Cover",
    description1: "Tri-Fold Structure",
    description2: "Reinforced Vinyl Surface",
    description3: "Tool-Free, Pre-Assembled Installation",
    image: "/products/v3.jpg",
    features: ["Partial access capability", "Folds for storage", "Secure locking", "UV resistant"],
  },
  {
    title: "Hard Tri-fold Low Profile Tonneau Cover",
    description1: "Hard Tri-Fold Panels",
    description2: "Low-Profile Appearance",
    description3: "Enhanced Security",
    image: "/products/v8.jpg",
    features: ["Maximum security", "Rigid protection", "Low profile", "Lockable"],
    comingSoon: true,
  },
  {
    title: "Hard Flip-Up Low Profile Tonneau Cover",
    description1: "Flip-Up Panel System",
    description2: "Rigid Aluminum Hard Shell",
    description3: "Low-Profile Fit",
    image: "/products/v9.jpg",
    features: ["Complete access", "Low profile", "Durable construction", "Easy operation"],
    comingSoon: true,
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-pretty">
            We specialize in high-quality tonneau covers you can trust.
          </p>
        </div>

        {/* Products List - Vertical Layout */}
        <div className="space-y-8 max-w-[1200px] mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 h-72">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="md:w-1/2 h-72 p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                    {product.comingSoon && (
                      <Badge variant="secondary" className="text-sm">Coming soon</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xl mb-2 leading-relaxed mt-2">{product.description1}</p>
                  <p className="text-muted-foreground text-xl mb-2 leading-relaxed">{product.description2}</p>
                  <p className="text-muted-foreground text-xl mb-3 leading-relaxed">{product.description3}</p>

                  {/* Features and Learn More button hidden as requested */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
