import React from "react";
import type { TrustedBrand as TrustedBrandType } from "@/types";

interface TrustedBrandProps {
  brand: TrustedBrandType;
}

export function TrustedBrand({ brand }: TrustedBrandProps) {
  return (
    <div className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-6 py-4 select-none">
      <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-400 font-mono">
        {brand.name}
      </span>
    </div>
  );
}
