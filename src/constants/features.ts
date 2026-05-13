import {
  ShoppingCart,
  Package,
  Users,
  Truck,
  Zap,
  LayoutTemplate,
} from "lucide-react";
import type { FeatureItem } from "@/types";

export const features: FeatureItem[] = [
  {
    title: "ই-কমার্স ওয়েবসাইট",
    description: "প্রফেশনাল ও মর্ডান ডিজাইনের ই-কমার্স ওয়েবসাইট।",
    icon: ShoppingCart,
  },
  {
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    description: "স্টক, প্রোডাক্ট, ক্যাটাগরি সহজে পরিচালনা করুন।",
    icon: Package,
  },
  {
    title: "CRM সিস্টেম",
    description: "কাস্টমার, অর্ডার ও যোগাযোগের ব্যবস্থাপনা।",
    icon: Users,
  },
  {
    title: "কুরিয়ার অটোমেশন",
    description: "স্বয়ংক্রিয় শিপিং ও ট্র্যাকিং সিস্টেম।",
    icon: Truck,
  },
  {
    title: "ফাস্ট চেকিং",
    description: "অর্ডার ভ্যালিডেশন ও ট্র্যাকিং সিস্টেম।",
    icon: Zap,
  },
  {
    title: "ল্যান্ডিং পেইজ",
    description: "প্রচারণার জন্য আকর্ষণীয় ল্যান্ডিং পেইজ।",
    icon: LayoutTemplate,
  },
];
