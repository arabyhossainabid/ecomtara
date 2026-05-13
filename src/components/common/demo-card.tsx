import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { DemoItem } from "@/types";

interface DemoCardProps {
  demo: DemoItem;
}

export function DemoCard({ demo }: DemoCardProps) {
  const { title, screenshot, demoUrl } = demo;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
        <Image
          src={screenshot}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/0 transition-colors group-hover:bg-slate-900/10" />
      </div>
      <div className="flex items-center justify-between p-5">
        <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-purple-50 hover:text-purple-600"
          title="Demo দেখুন"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
