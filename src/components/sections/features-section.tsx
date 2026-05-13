import React from "react";
import { features } from "@/constants/features";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/layout/container";

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-white">
      <Container>
        <SectionHeading
          title="সবকিছু এক প্ল্যাটফর্মে"
          subtitle="আপনার ই-কমার্স ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল ফিচার"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-slate-100 bg-white transition-all hover:-translate-y-1 hover:shadow-md hover:border-violet-100 group"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-violet-100 transition-colors">
                <feature.icon className="h-7 w-7 text-violet-600" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-1.5 leading-snug">
                {feature.title}
              </h3>
              <p className="text-[11px] leading-5 text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
