import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface BadgeItemProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function BadgeItem({ label, icon: Icon, className }: BadgeItemProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-purple-200",
        className
      )}
    >
      {Icon && <Icon className="h-4 w-4 text-purple-600 shrink-0" />}
      <span>{label}</span>
    </div>
  );
}
