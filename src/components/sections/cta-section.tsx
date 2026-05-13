import React from "react";
import { Rocket } from "lucide-react";
import { Container } from "@/components/layout/container";

export function CtaSection() {
  return (
    <section id="cta" className="py-16 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-700 px-8 py-10 md:px-14 md:py-12 text-white shadow-xl shadow-violet-100">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 h-48 w-48 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Rocket */}
            <div className="shrink-0">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-4 h-5 w-10 bg-white/20 rounded-full blur-sm" />
                <div className="absolute -bottom-4 left-2 h-4 w-7 bg-white/15 rounded-full blur-sm" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                আজই শুরু করুন আপনার ই-কমার্স যাত্রা!
              </h2>
              <p className="text-violet-100 text-sm leading-6">
                Ecomtara এর সাথে আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়।
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#demos"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-7 text-sm font-semibold text-violet-700 shadow transition-all hover:bg-violet-50 hover:scale-105"
              >
                ডেমো দেখুন
              </a>
              <a
                href="tel:+8801234567890"
                className="inline-flex h-11 items-center justify-center rounded-xl border-2 border-white bg-transparent px-7 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105"
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
