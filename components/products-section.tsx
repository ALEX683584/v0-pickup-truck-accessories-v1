import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Tonneau Covers",
    description:
      "Premium soft and hard tonneau covers including roll-up, tri-fold, and flip-up designs. Weather-resistant and durable construction.",
    image: "/pickup-truck-tonneau-cover-black.jpg",
    features: ["Soft Roll-up", "Tri-fold", "Hard Flip-up", "Low Profile"],
  },
  {
    title: "Electric Running Boards",
    description:
      "Automatic retractable running boards with smart sensors. Heavy-duty aluminum construction with anti-slip surface.",
    image: "/electric-running-boards-on-pickup-truck.jpg",
    features: ["Auto Deploy", "LED Lighting", "Weather Sealed", "500lb Capacity"],
  },
  {
    title: "Fender Flares",
    description:
      "Stylish and protective fender flares for all major pickup models. Easy installation with OEM-quality fit and finish.",
    image: "/pickup-truck-fender-flares-black.jpg",
    features: ["Pocket Style", "Smooth Style", "UV Protected", "Easy Install"],
  },
  {
    title: "Car Mats",
    description:
      "Custom-fit floor mats and liners. All-weather protection with raised edges to contain spills and debris.",
    image: "/pickup-truck-floor-mats-rubber.jpg",
    features: ["Custom Fit", "All-Weather", "Easy Clean", "Non-Slip"],
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
            Specialized in four core product categories with OEM/ODM capabilities
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
