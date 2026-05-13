import React from "react";
import { Check, Server } from "lucide-react";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const {
    name,
    price,
    duration,
    description,
    features,
    isLifetime,
    badge,
    badgeColor = "bg-orange-500 text-white",
    priceColor = "text-slate-900",
    nameColor = "text-slate-900",
    buttonColor = "bg-violet-600 hover:bg-violet-700 text-white",
    checkColor = "text-violet-600",
    buttonText,
    buttonHref,
  } = plan;

  // Lifetime plan — special layout with server graphic
  if (isLifetime) {
    return (
      <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
        <div className="mb-3">
          <h3 className={`text-sm font-bold ${nameColor}`}>{name}</h3>
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        </div>

        <div className="flex-1 space-y-2.5 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className={`h-3.5 w-3.5 shrink-0 stroke-[3] ${checkColor}`} />
              <span className="text-xs text-slate-600">{feature}</span>
            </div>
          ))}
        </div>

        {/* Server illustration */}
        <div className="flex justify-end mb-5">
          <div className="relative w-28 h-20">
            <div className="absolute bottom-0 right-0 w-24 h-16 bg-gradient-to-br from-slate-600 to-slate-900 rounded-xl flex flex-col justify-center gap-1.5 p-2.5 shadow-lg">
              <div className="h-1.5 w-full bg-slate-500 rounded-full" />
              <div className="h-1.5 w-full bg-slate-500 rounded-full" />
              <div className="h-1.5 w-3/4 bg-slate-500 rounded-full" />
            </div>
            <div className="absolute -top-1 right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
              <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
            </div>
          </div>
        </div>

        <a
          href={buttonHref}
          className="inline-flex h-11 w-full items-center justify-center rounded-xl border-2 border-violet-600 text-violet-600 text-xs font-bold transition-all hover:bg-violet-50"
        >
          {buttonText}
        </a>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
      {/* Plan name row with optional badge */}
      <div className="flex items-center justify-between mb-1">
        <h3 className={`text-sm font-bold ${nameColor}`}>{name}</h3>
        {badge && (
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 mt-2 mb-4">
        <span className={`text-3xl font-black tracking-tight ${priceColor}`}>{price}</span>
        {duration && (
          <span className="text-xs font-medium text-slate-400">/{duration}</span>
        )}
      </div>

      {/* Feature list */}
      <div className="flex-1 space-y-2.5 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className={`h-3.5 w-3.5 shrink-0 stroke-[3] ${checkColor}`} />
            <span className="text-xs text-slate-600">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={buttonHref}
        className={`inline-flex h-11 w-full items-center justify-center rounded-xl font-bold text-xs transition-all hover:scale-[1.02] ${buttonColor}`}
      >
        {buttonText}
      </a>
    </div>
  );
}
