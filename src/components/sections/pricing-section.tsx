import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/common/section-heading";

function MonthlyCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-violet-100 bg-violet-50/40 p-6 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-[17px] font-bold text-violet-600 mb-4">মাসিক প্ল্যান</p>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-3xl font-extrabold text-violet-600">৳2,999</span>
        <span className="text-sm font-medium text-slate-400">/মাস</span>
      </div>
      <ul className="flex-1 space-y-3.5 mb-4">
        {["১,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "২৪/৭ সাপোর্ট"].map((f, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <Check className="h-4 w-4 shrink-0 text-green-500 stroke-3" />
            <span className="text-sm font-medium text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex h-12 w-full items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white transition hover:bg-violet-700">
        এখন শুরু করুন
      </a>
    </div>
  );
}

function SixMonthCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-orange-100 bg-orange-50/40 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[17px] font-bold text-orange-500">৬ মাসের প্ল্যান</p>
        <span className="rounded-md bg-orange-500 px-2.5 py-1 text-[11px] font-bold text-white">জনপ্রিয়</span>
      </div>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-3xl font-extrabold text-orange-500">৳14,999</span>
        <span className="text-sm font-medium text-slate-400">/৬ মাস</span>
      </div>
      <ul className="flex-1 space-y-3.5 mb-6">
        {["৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট"].map((f, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <Check className="h-4 w-4 shrink-0 text-green-500 stroke-3" />
            <span className="text-sm font-medium text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white transition hover:bg-orange-600">
        এখন শুরু করুন
      </a>
    </div>
  );
}

function YearlyCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-green-100 bg-green-50/40 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[17px] font-bold text-green-600">বার্ষিক প্ল্যান</p>
        <span className="rounded-md bg-green-500 px-2.5 py-1 text-[11px] font-bold text-white">সাশ্রয়ী</span>
      </div>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-3xl font-extrabold text-green-600">৳26,999</span>
        <span className="text-sm font-medium text-slate-400">/বছর</span>
      </div>
      <ul className="flex-1 space-y-3.5 mb-6">
        {["১০,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট", "বছরে ২ মাস ফ্রি"].map((f, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <Check className="h-4 w-4 shrink-0 text-green-500 stroke-3" />
            <span className="text-sm font-medium text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex h-12 w-full items-center justify-center rounded-xl bg-green-600 text-sm font-bold text-white transition hover:bg-green-700">
        এখন শুরু করুন
      </a>
    </div>
  );
}

function LifetimeCard() {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-violet-100 bg-violet-50/40 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow overflow-hidden lg:col-span-2">      <p className="text-[20px] font-bold text-violet-600 mb-1">লাইফটাইম প্ল্যান</p>
      <p className="text-[15px] font-medium text-slate-500 mb-6">আপনার নিজের সার্ভারে হোস্টিং</p>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 flex-1 mb-8">
        <ul className="space-y-4 w-full sm:w-auto">
          {["কোন অর্ডার লিমিট নেই", "আপনার নিজের ডোমেইন", "আপনার নিজের সার্ভার", "এককালীন পেমেন্ট", "সম্পূর্ণ সোর্স কোড"].map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check className="h-5 w-5 shrink-0 text-green-500 stroke-3" />
              <span className="text-[15px] font-medium text-slate-600">{f}</span>
            </li>
          ))}
        </ul>
        <div className="shrink-0 relative w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] mt-4 sm:mt-0 lg:mr-2">
          <Image src="/server-stack.png" alt="Server Stack" fill className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
      <a href="#cta" className="flex h-12 w-full sm:w-fit px-8 items-center justify-center rounded-xl bg-violet-600 text-[15px] font-bold text-white transition hover:bg-violet-700">
        বিস্তারিত জানতে যোগাযোগ করুন
      </a>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-10 bg-white relative">
      <div id="pricing-lifetime" className="absolute -top-20" />
      <Container>
        <SectionHeading
          title="SaaS মূল্য পরিকল্পনা"
          subtitle="আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <MonthlyCard />
          <SixMonthCard />
          <YearlyCard />
          <LifetimeCard />
        </div>
      </Container>
    </section>
  );
}
