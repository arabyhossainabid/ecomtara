import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TrustedSection } from "@/components/sections/trusted-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DemosSection } from "@/components/sections/demos-section";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Stats Section */}
        <StatsSection />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. Demo Showcase Section */}
        <DemosSection />

        {/* 6. Pricing Section */}
        <PricingSection />

        {/* 7. Trusted Brands Section */}
        <TrustedSection />

        {/* 8. CTA Banner Section */}
        <CtaSection />
      </main>
    </div>
  );
}
