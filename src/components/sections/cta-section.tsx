import React from "react";
import { Rocket } from "lucide-react";
import { Container } from "@/components/layout/container";

export function CtaSection() {
  return (
    <section id="cta" className="py-8 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-violet-700 via-violet-600 to-indigo-700 px-8 py-6 md:px-8 md:py-6 text-white shadow-xl shadow-violet-100">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 h-48 w-48 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="shrink-0">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-4 h-5 w-10 bg-white/20 rounded-full blur-sm" />
                <div className="absolute -bottom-4 left-2 h-4 w-7 bg-white/15 rounded-full blur-sm" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left pl-0 lg:pl-2">
              <h2 className="text-2xl md:text-[28px] font-bold leading-tight mb-2">
                আজই শুরু করুন আপনার ই-কমার্স যাত্রা!
              </h2>
              <p className="text-violet-100 text-[15px] leading-relaxed">
                Ecomtara এর সাথে আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 mt-6 lg:mt-0">
              <a
                href="#demos"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/80 bg-transparent px-8 text-[15px] font-bold text-white transition-all hover:bg-white hover:text-violet-600 hover:scale-105"
              >
                ডেমো দেখুন
              </a>
              <a
                href="tel:+8801234567890"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/80 bg-transparent px-8 text-[15px] font-bold text-white transition-all hover:bg-white hover:text-violet-600 hover:scale-105"
              >
                যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
