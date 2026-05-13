import React from "react";
import Image from "next/image";
import { Zap, Code2, Headset, RefreshCw, ArrowRight } from "lucide-react";
import { BadgeItem } from "@/components/common/badge-item";

export function HeroSection() {
  const featureBadges = [
    { label: "সহজ সেটআপ", icon: Zap },
    { label: "কোন কোডিং নয়", icon: Code2 },
    { label: "২৪/৭ সাপোর্ট", icon: Headset },
    { label: "নিয়মিত আপডেট", icon: RefreshCw },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32"
      style={{ background: "linear-gradient(to bottom, #ffffff, #faf7ff)" }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Side */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-xs font-semibold text-purple-700 border border-purple-100">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              🚀 আপনার নিজের ব্র্যান্ড, আপনার নিজের ই-কমার্স
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold max-w-lg leading-tight tracking-tight text-slate-900">
              আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ{" "}
              <span className="text-violet-600">SaaS সমাধান</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 leading-7 max-w-xl mx-auto lg:mx-0">
              Ecomtara একটি শক্তিশালী ও সহজে ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম। ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ সবকিছু এক জায়গায় — আপনার ব্যবসাকে দিন নতুন উচ্চতা।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#demos"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-violet-600 px-7 text-sm font-semibold text-white shadow-md transition-all hover:bg-violet-700 hover:scale-105 active:scale-95"
              >
                ডেমো দেখুন <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl border-2 border-violet-600 bg-white px-7 text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50 hover:scale-105 active:scale-95"
              >
                মূল্য পরিকল্পনা দেখুন
              </a>
            </div>

            {/* Feature Badges */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {featureBadges.map((badge, index) => (
                  <BadgeItem key={index} label={badge.label} icon={badge.icon} />
                ))}
              </div>
            </div>
          </div>


          {/* Right Side: Hero Image */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            {/* Soft glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full">
              <Image
                src="/demos/hero.png"
                alt="Ecomtara ডেমো — ইলেকট্রনিক্স ও ফুড স্টোর"
                width={1260}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
