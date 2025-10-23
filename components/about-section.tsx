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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Crafting the Ultimate Truck Bed Protection | TOBEKIN AUTO</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At TOBEKIN AUTO, we believe the open truck bed represents endless possibility. Our purpose is to protect that possibility. We are dedicated to designing and crafting the finest tonneau covers on the market, merging superior functionality with clean, automotive-grade aesthetics.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Driven by innovation and an obsession with detail, we source only the highest-quality materials. From our ultra-durable, triple-layer vinyl that resists fading and cracking to our aircraft-grade aluminum frameworks, every component is selected for maximum performance and longevity. Our patented latch systems and tension-control mechanisms ensure a weather-tight, rattle-free seal, mile after mile.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We go beyond just selling a cover; we deliver peace of mind. Our products are the result of relentless engineering and real-world testing, ensuring they not only meet but exceed the rigorous demands of truck owners. This is protection redefined—it's security without sacrifice, and style that complements your truck's powerful presence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At TOBEKIN AUTO, we are passionate about trucks and the people who drive them. Every product is tested and trusted to deliver the quality you deserve.
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