import React from "react";
import Image from "next/image";
import { demoItems } from "@/constants/demos";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";
import { ShoppingCart, UtensilsCrossed, Sparkles, ShoppingBag } from "lucide-react";

const demoMeta = [
  { icon: ShoppingCart, color: "text-blue-600", urlLabel: "electro.shopxet.com" },
  { icon: UtensilsCrossed, color: "text-red-500", urlLabel: "food.shopxet.com" },
  { icon: Sparkles, color: "text-pink-500", urlLabel: "cosmetics.shopxet.com" },
  { icon: ShoppingBag, color: "text-indigo-600", urlLabel: "fashion.shopxet.com" },
];

export function DemosSection() {
  return (
    <section id="demos" className="py-8 bg-slate-50/60">
      <Container>
        <SectionHeading
          title="আমাদের লাইভ ডেমো"
          subtitle="বিভিন্ন ক্যাটাগরির প্রস্তুত ডেমো দেখুন"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {demoItems.map((demo, index) => {
            const { icon: Icon, color, urlLabel } = demoMeta[index];
            return (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={demo.screenshot}
                    alt={demo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className={`flex h-9 w-9 shrink-0 items-center font-semibold justify-center rounded-lg bg-slate-50 ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-800">{demo.title}</p>
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-semibold ${color} hover:underline`}
                    >
                      {urlLabel}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
