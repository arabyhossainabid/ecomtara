import React from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/common/section-heading";

function MonthlyCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm font-bold text-violet-600 mb-4">মাসিক প্ল্যান</p>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-3xl font-bold text-violet-600">৳2,999</span>
        <span className="text-xs text-slate-400">/মাস</span>
      </div>
      <ul className="flex-1 space-y-3 mb-6">
        {["১,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "২৪/৭ সাপোর্ট"].map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 shrink-0 text-violet-600 stroke-[2.5]" />
            <span className="text-xs text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex h-11 w-full items-center justify-center rounded-xl bg-violet-600 text-sm font-semibold text-white transition hover:bg-violet-700">
        এখন শুরু করুন
      </a>
    </div>
  );
}

function SixMonthCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-slate-800">৬ মাসের প্ল্যান</p>
        <span className="rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-bold text-white">অফার</span>
      </div>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-3xl font-bold text-orange-500">৳14,999</span>
        <span className="text-xs text-slate-400">/৬ মাস</span>
      </div>
      <ul className="flex-1 space-y-3 mb-6">
        {["৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট"].map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 shrink-0 text-violet-600 stroke-[2.5]" />
            <span className="text-xs text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex h-11 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white transition hover:bg-orange-600">
        এখন শুরু করুন
      </a>
    </div>
  );
}

function YearlyCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-slate-800">বার্ষিক প্ল্যান</p>
        <span className="rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-bold text-white">সাশ্রয়ী</span>
      </div>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-3xl font-bold text-green-600">৳26,999</span>
        <span className="text-xs text-slate-400">/বছর</span>
      </div>
      <ul className="flex-1 space-y-3 mb-6">
        {["১০,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট", "বছরে ২ মাস ফ্রি"].map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 shrink-0 text-violet-600 stroke-[2.5]" />
            <span className="text-xs text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex h-11 w-full items-center justify-center rounded-xl bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700">
        এখন শুরু করুন
      </a>
    </div>
  );
}

function LifetimeCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <p className="text-sm font-bold text-slate-800 mb-1">লাইফটাইম প্ল্যান</p>
      <p className="text-xs text-slate-500 mb-4">আপনার নিজের সার্ভারে হোস্টিং</p>
      <div className="flex items-start justify-between gap-2 flex-1 mb-6">
        <ul className="space-y-3 flex-1">
          {["কোন অর্ডার লিমিট নেই", "আপনার নিজের ডোমেইন", "আপনার নিজের সার্ভার", "একক্লিক পেমেন্ট", "সম্পূর্ণ সোর্স কোড"].map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 shrink-0 text-violet-600 stroke-[2.5]" />
              <span className="text-xs text-slate-600">{f}</span>
            </li>
          ))}
        </ul>
        <div className="shrink-0 relative w-20 h-24 mt-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute left-0 right-0 rounded-lg shadow"
              style={{
                bottom: `${i * 18}px`,
                height: "18px",
                background: ["linear-gradient(135deg,#1e293b 60%,#334155)", "linear-gradient(135deg,#334155 60%,#475569)", "linear-gradient(135deg,#475569 60%,#64748b)", "linear-gradient(135deg,#64748b 60%,#94a3b8)"][i],
              }}
            >
              <div className="flex items-center h-full px-2 gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <div className="flex-1 h-1 bg-white/10 rounded-full" />
                <div className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              </div>
            </div>
          ))}
          <div className="absolute -right-2 bottom-12 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 shadow-lg border-2 border-white z-10">
            <Check className="h-4 w-4 text-white stroke-[3]" />
          </div>
        </div>
      </div>
      <a href="#cta" className="flex h-11 w-full items-center justify-center rounded-xl border-2 border-violet-600 text-sm font-semibold text-violet-600 transition hover:bg-violet-50">
        বিস্তারিত জানতে যোগাযোগ করুন
      </a>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-white relative">
      <div id="pricing-lifetime" className="absolute -top-20" />
      <Container>
        <SectionHeading
          title="SaaS মূল্য পরিকল্পনা"
          subtitle="আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MonthlyCard />
          <SixMonthCard />
          <YearlyCard />
          <LifetimeCard />
        </div>
      </Container>
    </section>
  );
}
