import React from "react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-purple-200">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}
