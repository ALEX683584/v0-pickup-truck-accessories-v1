import Image from "next/image"

export function ProductsPageBanner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px]">
        <div className="relative w-full aspect-[1300/520] overflow-hidden">
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
