import React from "react";
import { Container } from "@/components/layout/container";
import { ShoppingBag, UtensilsCrossed, Sparkles, Layers, Store, Smartphone } from "lucide-react";

const brands = [
  { name: "TechMart",    icon: ShoppingBag },
  { name: "DailyFood",   icon: UtensilsCrossed },
  { name: "BeautyCare",  icon: Sparkles },
  { name: "FashionHub",  icon: Layers },
  { name: "MegaStore",   icon: Store },
  { name: "DigitalShop", icon: Smartphone },
];

export function TrustedSection() {
  return (
    <section className="py-14 bg-white">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900 mb-10">
          যারা আমাদের উপর বিশ্বাস রেখেছেন
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-6">
          {brands.map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors duration-200 cursor-default"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-slate-600 tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
