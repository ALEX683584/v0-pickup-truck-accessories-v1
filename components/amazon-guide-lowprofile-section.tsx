"use client";

import { AmazonProductsSection } from "@/components/amazon-products-section";

const lowProfileProducts = [
  {
    sku: "V2-TKC001",
    url: "https://www.amazon.com/dp/B0FG75F4P3?th=1",
    description: `2014-2025 Chevy Silverado GMC Sierra 1500 (Not Fit 19 LD; 19-24 Classic) | 5'10" (70") Bed`,
  },
  {
    sku: "V2-TKD002",
    url: "https://www.amazon.com/dp/B0FWD2YXB5?th=1",
    description: `2009-2024 Dodge Ram 1500 5'7" (67") Bed`,
  },
  {
    sku: "V2-TKF003",
    url: "https://www.amazon.com/dp/B0FG7CTVBL?th=1",
    description: `2015-2025 Ford F-150 5.5' bed`,
  },
];

export function AmazonGuideLowProfileSection() {
  return (
    <AmazonProductsSection
      id="amazon-guide-lowprofile"
      title="Shop on Amazon"
      subtitle="SOFT LOW-PROFILE ROLL-UP TONNEAU COVER"
      products={lowProfileProducts}
    />
  );
}
