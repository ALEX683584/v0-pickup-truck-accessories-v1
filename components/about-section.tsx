import { CheckCircle2 } from "lucide-react"

const capabilities = [
  "ISO 9001 Certified Manufacturing",
  "OEM/ODM Custom Solutions",
  "In-house R&D Team",
  "Quality Control at Every Stage",
  "Fast Turnaround Times",
  "Global Shipping Network",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/modern-automotive-facility.png"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm">Years in Business</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About KSCAR AUTO</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              JIAXING KSCAR AUTO ACCESSORIES CO., LTD is a leading designer and manufacturer of premium pickup truck
              accessories. Based in Jiaxing, Zhejiang Province, China, we've been serving the global automotive
              aftermarket for over 15 years.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our focus on four core product categories allows us to maintain exceptional quality standards and deep
              expertise. We work with distributors, retailers, and OEM partners worldwide to deliver innovative
              solutions that enhance vehicle functionality and style.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
