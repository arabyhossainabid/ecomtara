import React from "react";
import { statsItems } from "@/constants/stats";
import { Container } from "@/components/layout/container";

export function StatsSection() {
  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {statsItems.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-6 bg-white hover:bg-slate-50/60 transition-colors"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
