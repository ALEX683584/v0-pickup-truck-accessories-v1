import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tobekin.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "",           priority: 1.0, changeFrequency: "weekly"  as const, lastModified: "2026-07-28" },
    { path: "/products",  priority: 0.9, changeFrequency: "weekly"  as const, lastModified: "2026-07-28" },
    { path: "/truck-accessories", priority: 0.8, changeFrequency: "weekly"  as const, lastModified: "2026-07-28" },
    { path: "/about",     priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-07-03" },
    { path: "/contact",   priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-07-03" },
    { path: "/returns",   priority: 0.4, changeFrequency: "yearly"  as const, lastModified: "2026-07-03" },
    { path: "/warranty",  priority: 0.4, changeFrequency: "yearly"  as const, lastModified: "2026-07-03" },
  ]

  return staticPages.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
