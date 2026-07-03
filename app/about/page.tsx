import type { Metadata } from "next"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Factory, Globe, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | TOBEKIN TONNEAU COVER",
  description: "Learn about TOBEKIN — a premium tonneau cover manufacturer dedicated to quality, innovation, and customer satisfaction.",
}

const stats = [
  { icon: Factory, value: "100%", label: "In-house Manufacturing" },
  { icon: Globe, value: "30+", label: "Countries Shipped" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Award, value: "5+", label: "Product Lines" },
]

const values = [
  {
    title: "Quality First",
    description: "Every tonneau cover undergoes rigorous testing — from material selection to final fitment verification. We never compromise on durability.",
  },
  {
    title: "Customer Focused",
    description: "Real people, real answers. Our support team knows trucks inside out and is ready to help you find the perfect cover for your vehicle.",
  },
  {
    title: "Continuous Innovation",
    description: "From drill-free installation systems to advanced weather-resistant materials, we constantly push the boundaries of what a tonneau cover can be.",
  },
  {
    title: "Global Reach",
    description: "Based in Zhejiang, China, we serve customers worldwide with fast shipping and reliable delivery to over 30 countries.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About TOBEKIN</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed">
            We don&apos;t just sell truck parts — we design, manufacture, and deliver premium tonneau covers built to last.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  TOBEKIN was founded with a simple mission: to make premium-quality tonneau covers accessible to every truck owner. What started as a small operation has grown into a trusted brand serving customers worldwide.
                </p>
                <p>
                  We own the entire process — from design and engineering to manufacturing and quality control. This vertical integration means we can offer superior products at competitive prices, without compromising on the details that matter.
                </p>
                <p>
                  Today, our catalog covers all major truck models, from Chevy Silverado to Ford F-150, Toyota Tacoma to Jeep Gladiator. Every product is precision-engineered for a guaranteed fit.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/pickup-truck-with-tonneau-cover-on-mountain-road.jpg"
                alt="Pickup truck with tonneau cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-sm border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
