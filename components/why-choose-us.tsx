import { CheckCircle2, Factory, Headphones, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Manufacturer Direct",
    description: "We own the entire design, manufacturing, and quality control process — no middlemen, better prices.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Fit",
    description: "Every cover is precision-engineered for specific truck models. Perfect fit, every time.",
  },
  {
    icon: Headphones,
    title: "Real People, Real Answers",
    description: "Our support team knows trucks. No scripts, no bots — just expert help when you need it.",
  },
  {
    icon: Sparkles,
    title: "Unmatched Innovation",
    description: "From drill-free installation to weather-resistant materials, we constantly push the boundaries.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose TOBEKIN?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The perfect fit and the long-term durability you need for your truck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
