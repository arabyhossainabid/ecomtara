import React from "react";
import type { StatItem } from "@/types";

interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  const { value, label, icon: Icon, color } = stat;

  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </div>
        <div className="text-xs md:text-sm font-medium text-slate-500 mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
}
