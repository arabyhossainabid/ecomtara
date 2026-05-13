import { Store, Layers, ShieldCheck, Headset } from "lucide-react";
import type { StatItem } from "@/types";

export const statsItems: StatItem[] = [
  {
    value: "৫০+",
    label: "সফল স্টোর",
    icon: Store,
    color: "text-purple-600 bg-purple-100",
  },
  {
    value: "১০+",
    label: "রেডি ডেমো",
    icon: Layers,
    color: "text-blue-600 bg-blue-100",
  },
  {
    value: "১০০%",
    label: "সিকিউর সিস্টেম",
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    value: "২৪/৭",
    label: "এক্সপার্ট সাপোর্ট",
    icon: Headset,
    color: "text-amber-600 bg-amber-100",
  },
];
