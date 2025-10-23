import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative h-[1000px] flex items-center hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img src="https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/back_car_offroad.jpg" alt="Pickup truck" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mt-4 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary-foreground">Leading OEM/ODM Manufacturer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            Premium Tonneau Covers
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl text-pretty leading-relaxed">
            Your trusted partner for high-quality tonneau covers and exterior accessories for pickup trucks.
            15+ years of manufacturing excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8">
              <a href="#products">
                View Products
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="#contact">Request Quote</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-sm text-primary-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-sm text-primary-foreground/70">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">10K+</div>
              <div className="text-sm text-primary-foreground/70">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
