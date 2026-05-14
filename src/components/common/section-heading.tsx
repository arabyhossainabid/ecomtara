import React from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-8", className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-medium text-slate-500 leading-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
