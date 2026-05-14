import {
  ShoppingCart,
  Package,
  Users,
  Truck,
  ShieldCheck,
  LayoutTemplate,
} from "lucide-react";
import type { FeatureItem } from "@/types";

export const features: FeatureItem[] = [
  {
    title: "ই-কমার্স ওয়েবসাইট",
    description: "প্রফেশনাল ও মর্ডান ডিজাইনের ই-কমার্স ওয়েবসাইট।",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-50 group-hover:bg-blue-100",
  },
  {
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    description: "স্টক, প্রোডাক্ট, ক্যাটাগরি সহজে পরিচালনা করুন।",
    icon: Package,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 group-hover:bg-indigo-100",
  },
  {
    title: "CRM সিস্টেম",
    description: "কাস্টমার, অর্ডার ও যোগাযোগের ব্যবস্থাপনা।",
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-50 group-hover:bg-orange-100",
  },
  {
    title: "কুরিয়ার অটোমেশন",
    description: "স্বয়ংক্রিয় শিপিং ও ট্র্যাকিং সিস্টেম।",
    icon: Truck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 group-hover:bg-emerald-100",
  },
  {
    title: "ফ্রড চেকিং",
    description: "অর্ডার ফ্রড ডিটেকশন ও ঝুঁকি নিয়ন্ত্রণ।",
    icon: ShieldCheck,
    color: "text-purple-700",
    bgColor: "bg-purple-50 group-hover:bg-purple-100",
  },
  {
    title: "ল্যান্ডিং পেইজ",
    description: "প্রচারণার জন্য আকর্ষণীয় ল্যান্ডিং পেইজ।",
    icon: LayoutTemplate,
    color: "text-violet-500",
    bgColor: "bg-violet-50 group-hover:bg-violet-100",
  },
];
