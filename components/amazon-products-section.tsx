"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface AmazonProduct {
  sku: string;
  url: string;
  description: string;
}

export interface AmazonProductsSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: AmazonProduct[];
}

export function AmazonProductsSection({
  id,
  title,
  subtitle,
  products,
}: AmazonProductsSectionProps) {
  return (
    <section id={id} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          <h3 className="text-lg md:text-xl font-semibold tracking-wide text-primary uppercase mb-4">
            {subtitle}
          </h3>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Find our products on Amazon and order with fast, reliable shipping
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card
              key={product.sku}
              className="overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-lg leading-snug">{product.description}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col mt-auto">
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
