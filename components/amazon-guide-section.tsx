"use client";

import { AmazonProductsSection } from "@/components/amazon-products-section";

const softRollUpProducts = [
  {
    sku: "V1-TKC001",
    url: "https://www.amazon.com/dp/B0FP4RDFW5?th=1",
    description: `2014-2025 Chevy Silverado GMC Sierra 1500 (Not Fit 19 LD; 19-24 Classic) | 5'10" (70") Bed`,
  },
  {
    sku: "V1-TKD002",
    url: "https://www.amazon.com/dp/B0FG754TWZ?th=1",
    description: `2009-2024 Dodge Ram 1500 5'7" (67") Bed`,
  },
  {
    sku: "V1-TKF003",
    url: "https://www.amazon.com/dp/B0FMPR1J9F?th=1",
    description: `2015-2025 Ford F-150 5.5' bed`,
  },
  {
    sku: "V1-TKF004",
    url: "https://www.amazon.com/dp/B0FG7591X4?th=1",
    description: `2022-2024 Ford Maverick 4.5' (54") Bed`,
  },
  {
    sku: "V1-TKH005",
    url: "https://www.amazon.com/dp/B0G4C91GDF?th=1",
    description: `2017-2025 Honda Ridgeline 5'4" (64") Bed`,
  },
  {
    sku: "V1-TKJ006",
    url: "https://www.amazon.com/dp/B0FG79HNP7?th=1",
    description: `2020-2024 Jeep Gladiator JT 5' (60") Bed`,
  },
  {
    sku: "V1-TKT007",
    url: "https://www.amazon.com/dp/B0FR9M9MB1?th=1",
    description: `2024 Toyota Tacoma 5' (60") Bed`,
  },
  {
    sku: "V1-TKC008",
    url: "https://www.amazon.com/dp/B0G24XQ9DM?th=1",
    description: `2020-2025 Chevy Silverado GMC Sierra 2500 3500HD | 6'10" (82") Bed`,
  },
  {
    sku: "V1-TKF009",
    url: "https://www.amazon.com/dp/B0G24WQTFY?th=1",
    description: `2015-2025 Ford F-150 6.5' bed`,
  },
];

export function AmazonGuideSection() {
  return (
    <AmazonProductsSection
      id="amazon-guide"
      title="Shop on Amazon"
      subtitle="SOFT ROLL-UP TONNEAU COVER"
      products={softRollUpProducts}
    />
  );
}
