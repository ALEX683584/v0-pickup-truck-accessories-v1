import Image from "next/image"

export function ProductsPageBanner() {
  return (
    <section className="w-full bg-white">
      <div className="container px-4 space-y-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Tonneau Covers for Pickup Trucks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Compare TOBEKIN soft roll-up, low-profile, tri-fold, hard tri-fold, and flip-up truck bed covers designed for weather protection, cleaner cargo storage, and confident fitment on popular pickup models.
          </p>
        </div>
        <div className="relative w-full aspect-[1300/520] overflow-hidden rounded-lg">
          <Image
            src="/products-banner.jpg"
            alt="All Weather Protection - TOBEKIN Tonneau Covers"
            fill
            priority
            sizes="(max-width: 1300px) 100vw, 1300px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
