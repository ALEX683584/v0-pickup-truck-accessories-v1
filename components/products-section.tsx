import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Soft Roll-up Tonneau Cover",
    description:
      "Premium soft roll-up tonneau covers designed for easy use and reliable weather protection.",
    image: "/pickup-truck-tonneau-cover-black.jpg",
    features: ["Easy to operate", "Weather-resistant", "Lightweight", "Secure mounting"],
  },
  {
    title: "Soft Low Profile Tonneau Cover",
    description:
      "Low-profile soft tonneau covers that provide a sleek look while keeping your truck bed secure.",
    image: "/pickup-truck-tonneau-cover-black.jpg",
    features: ["Sleek design", "Weather protection", "Tool-free installation", "Durable fabric"],
  },
  {
    title: "Soft Tri-fold Tonneau Cover",
    description:
      "Flexible tri-fold design that allows for partial bed access while maintaining security.",
    image: "/pickup-truck-tonneau-cover-black.jpg",
    features: ["Partial access capability", "Folds for storage", "Secure locking", "UV resistant"],
  },
  {
    title: "Hard Tri-fold Low Profile Tonneau Cover",
    description:
      "Rigid hard panels in a tri-fold configuration for maximum security and protection.",
    image: "/pickup-truck-tonneau-cover-black.jpg",
    features: ["Maximum security", "Rigid protection", "Low profile", "Lockable"],
  },
  {
    title: "Hard Flip-Up Low Profile Tonneau Cover",
    description:
      "Hard panel design that flips up for complete bed access with a sleek low-profile appearance.",
    image: "/pickup-truck-tonneau-cover-black.jpg",
    features: ["Complete access", "Low profile", "Durable construction", "Easy operation"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Specialized in five core tonneau cover product categories with OEM/ODM capabilities
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
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{product.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 w-fit text-sm">
                    Learn More
                    <ArrowRight className="ml-2" size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
