import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DemoItem {
  title: string;
  screenshot: string;
  demoUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  isLifetime?: boolean;
  badge?: string;
  badgeColor?: string;
  priceColor?: string;
  nameColor?: string;
  buttonColor?: string;
  checkColor?: string;
  buttonText: string;
  buttonHref: string;
}

export interface TrustedBrand {
  name: string;
  logoUrl?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    facebook: string;
    twitter: string;
    github: string;
  };
}
