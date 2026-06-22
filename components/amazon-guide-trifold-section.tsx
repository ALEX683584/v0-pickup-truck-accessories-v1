"use client";

import { AmazonProductsSection } from "@/components/amazon-products-section";

const triFoldProducts = [
  {
    sku: "TBK-C310",
    url: "https://www.amazon.com/dp/B0G2521XZ3?th=1",
    description: `2015-2025 Chevy Colorado/GMC Canyon 5.2ft Bed (61.7")`,
  },
  {
    sku: "TBK-F303",
    url: "https://www.amazon.com/dp/B0G254MGSZ?th=1",
    description: `2015-2025 Ford F150 5.5 FT Bed Cover`,
  },
  {
    sku: "TBK-F304",
    url: "https://www.amazon.com/dp/B0G25314MC?th=1",
    description: `2022-2025 Ford Maverick 4.5' (54") Bed`,
  },
  {
    sku: "TBK-H305",
    url: "https://www.amazon.com/dp/B0G24ZC4KJ?th=1",
    description: `2017-2025 Honda Ridgeline 5'4" (64") Bed`,
  },
  {
    sku: "TBK-J306",
    url: "https://www.amazon.com/dp/B0G24YF4TT?th=1",
    description: `2020-2024 Jeep Gladiator JT 5' (60") Bed`,
  },
  {
    sku: "TBK-T307",
    url: "https://www.amazon.com/dp/B0G2525FYP?th=1",
    description: `2024-2025 Toyota Tacoma 5' (60") Bed`,
  },
  {
    sku: "TBK-T311",
    url: "https://www.amazon.com/dp/B0G24YJD8F?th=1",
    description: `2016-2023 Toyota Tacoma 5' (60") Bed`,
  },
];

export function AmazonGuideTrifoldSection() {
  return (
    <AmazonProductsSection
      id="amazon-guide-trifold"
      title="Shop on Amazon"
      subtitle="SOFT TRI-FOLD TONNEAU COVER"
      products={triFoldProducts}
    />
  );
}
