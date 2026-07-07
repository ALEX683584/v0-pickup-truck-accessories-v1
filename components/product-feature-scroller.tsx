"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export interface ProductFeature {
  title: string
  description: string
  image: string
  href: string
}

export interface ProductFeatureScrollerProps {
  features: ProductFeature[]
}

export function ProductFeatureScroller({ features }: ProductFeatureScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.clientWidth / 5
    const distance = direction === "left" ? -cardWidth : cardWidth
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" })
  }

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container px-4 relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-border rounded-full shadow-md items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="text-foreground" size={20} />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group flex-shrink-0 w-[calc((100%-4*24px)/5)] min-w-[220px]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-muted mb-3">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-border rounded-full shadow-md items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="text-foreground" size={20} />
          </button>
        )}
      </div>
    </section>
  )
}
