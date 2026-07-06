import Image from "next/image"

export function ProductsPageBanner() {
  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full aspect-[1080/600] max-h-[600px] overflow-hidden">
        <Image
          src="/products-banner.jpg"
          alt="All Weather Protection - TOBEKIN Tonneau Covers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
