"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const amazonProducts = [
  {
    sku: "V1-TKC001",
    url: "https://www.amazon.com/dp/B0FP4RDFW5?th=1",
  },
  {
    sku: "V1-TKD002",
    url: "https://www.amazon.com/dp/B0FG754TWZ?th=1",
  },
  {
    sku: "V1-TKF003",
    url: "https://www.amazon.com/dp/B0FMPR1J9F?th=1",
  },
  {
    sku: "V1-TKF004",
    url: "https://www.amazon.com/dp/B0FG7591X4?th=1",
  },
  {
    sku: "V1-TKH005",
    url: "https://www.amazon.com/dp/B0G4C91GDF?th=1",
  },
  {
    sku: "V1-TKJ006",
    url: "https://www.amazon.com/dp/B0FG79HNP7?th=1",
  },
  {
    sku: "V1-TKT007",
    url: "https://www.amazon.com/dp/B0FR9M9MB1?th=1",
  },
  {
    sku: "V1-TKC008",
    url: "https://www.amazon.com/dp/B0G24XQ9DM?th=1",
  },
  {
    sku: "V1-TKF009",
    url: "https://www.amazon.com/dp/B0G24WQTFY?th=1",
  },
];

export function AmazonGuideSection() {
  return (
    <section id="amazon-guide" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop on Amazon</h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Find our products on Amazon and order with fast, reliable shipping
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {amazonProducts.map((product) => (
            <Card
              key={product.sku}
              className="overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-lg">{product.sku}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  Amazon official product link
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button className="w-full" variant="default">
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
