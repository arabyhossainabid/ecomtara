import React from "react";
import { Container } from "@/components/layout/container";
import { ShoppingBag, UtensilsCrossed, Sparkles, Layers, Store, Smartphone } from "lucide-react";

const brands = [
  { name: "TechMart", icon: ShoppingBag },
  { name: "DailyFood", icon: UtensilsCrossed },
  { name: "BeautyCare", icon: Sparkles },
  { name: "FashionHub", icon: Layers },
  { name: "MegaStore", icon: Store },
  { name: "DigitalShop", icon: Smartphone },
];

export function TrustedSection() {
  return (
    <section className="py-4 bg-white">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          যারা আমাদের উপর বিশ্বাস রেখেছেন
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 max-w-5xl mx-auto">
          {brands.map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2.5 text-slate-500 hover:text-slate-700 transition-colors duration-200 cursor-default px-2"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50/50">
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[15px] font-semibold text-slate-700 tracking-tight whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
