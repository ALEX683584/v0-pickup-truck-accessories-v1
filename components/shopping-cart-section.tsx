"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Product data that matches the products-section exactly
const productGallery = [
  {
    id: 1,
    title: "Soft Roll-up Tonneau Cover",
    description1: "Easy Roll-Up Operation",
    description2: "Lightweight & Drill-Free Installation",
    description3: "Water & Dust Resistance",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v1.jpg",
    price: 179.99,
    features: ["Easy to operate", "Weather-resistant", "Lightweight", "Secure mounting"],
  },
  {
    id: 2,
    title: "Soft Low Profile Tonneau Cover",
    description1: "Low-Profile Design",
    description2: "Durable Soft Vinyl",
    description3: "Easy Clamp-On Installation",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v2.jpg",
    price: 179.99,
    features: ["Sleek design", "Weather protection", "Tool-free installation", "Durable fabric"],
  },
  {
    id: 3,
    title: "Soft Tri-fold Tonneau Cover",
    description1: "Tri-Fold Structure",
    description2: "Reinforced Vinyl Surface",
    description3: "Tool-Free, Pre-Assembled Installation",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v3.jpg",
    price: 649.99,
    features: ["Partial access capability", "Folds for storage", "Secure locking", "UV resistant"],
  },
  {
    id: 4,
    title: "Hard Tri-fold Low Profile Tonneau Cover",
    description1: "Hard Tri-Fold Panels",
    description2: "Low-Profile Appearance",
    description3: "Enhanced Security",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v8.jpg",
    price: 799.99,
    features: ["Maximum security", "Rigid protection", "Low profile", "Lockable"],
  },
  {
    id: 5,
    title: "Hard Flip-Up Low Profile Tonneau Cover",
    description1: "Flip-Up Panel System",
    description2: "Rigid Aluminum Hard Shell",
    description3: "Low-Profile Fit",
    image: "https://raw.githubusercontent.com/ALEX683584/special-octo-journey/main/img/v9.jpg",
    price: 699.99,
    features: ["Complete access", "Low profile", "Durable construction", "Easy operation"],
  },
];

export function ShoppingCartSection() {
  return (
    <section id="product-gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Product Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Browse our premium tonneau covers and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {productGallery.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-muted-foreground text-sm">{product.description1}</p>
                  <p className="text-muted-foreground text-sm">{product.description2}</p>
                  <p className="text-muted-foreground text-sm">{product.description3}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                  <Badge variant="secondary">In Stock</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}