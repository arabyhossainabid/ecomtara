# 🛒 Ecomtara

<div align="center">

A modern, premium SaaS landing page built with Next.js, Tailwind CSS, and Lucide Icons. Designed for e-commerce platforms with fast setup, premium design, order management, secure payment integration, and top-tier support.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- **🎨 Modern UI/UX** - Premium aesthetic with tailored color palettes, smooth hover states, and dynamic elements
- **📱 Fully Responsive** - Optimized for seamless viewing on desktops, tablets, and mobile devices
- **🎯 Lucide Icons Integration** - Beautiful and consistent iconography throughout the platform
- **🧩 Component-Driven Architecture** - Modular sections designed for reusability and maintainability
- **⚡ Fast Performance** - Built with Next.js 15 for optimal speed and SEO
- **🔒 Type Safety** - Full TypeScript support for reliable code

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.0 | React Framework |
| [React](https://react.dev/) | 19.0 | UI Library |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Styling |
| [Lucide React](https://lucide.dev/) | Latest | Icons |
| [TypeScript](https://www.typescriptlang.org/) | 5.0 | Type Safety |
| [pnpm](https://pnpm.io/) | Latest | Package Manager |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- pnpm package manager

### Setup Steps
1. **Clone the repository**
```bash
git clone https://github.com/arabyhossainabid/ecomtara.git
cd ecomtara
```

2. **Install dependencies & Run**
```bash
pnpm install
pnpm dev
```

---

## 📂 Project Structure & Architecture

```
ecomtara/
├── public/                # Static Assets
│   ├── demos/            # Demo showcase screenshots
│   └── server-stack.png  # Custom 3D Server asset for Lifetime Plan
├── src/
│   ├── app/              # Next.js 15 App Router
│   │   ├── (marketing)/  # Marketing Route Group
│   │   │   └── page.tsx  # Main Landing Page (Assembled Sections)
│   │   └── globals.css   # Global Tailwind & Theme setup
│   ├── components/       # Component-Driven UI
│   │   ├── common/      # Reusable UI Atoms (Badges, Buttons, Headings)
│   │   ├── layout/      # Wrapper components (Navbar, Container, Footer)
│   │   └── sections/    # Modular Page Sections (Hero, Features, Pricing)
│   ├── constants/       # Data Layer (Centralized content for easy updates)
│   │   ├── features.ts   # Feature list with dynamic colors/icons
│   │   ├── pricing.ts    # Subscription plans and feature matrix
│   │   └── stats.ts      # Metrics and achievements data
│   ├── types/           # Strict TypeScript Definitions
│   └── styles/          # Advanced CSS/Tailwind configuration
└── config/              # Site Metadata & SEO Config
```

---

## 🚀 কাজের সারসংক্ষেপ (Implementation Summary)

এই প্রজেক্টে আমরা একটি **Pixel-Perfect** এবং **Premium SaaS Landing Page** তৈরি করেছি। নিচে প্রধান কাজগুলোর বিবরণ দেওয়া হলো:

### ১. সেকশন-ভিত্তিক আর্কিটেকচার
পুরো প্রজেক্টটি **Modular** পদ্ধতিতে সাজানো হয়েছে। প্রতিটি সেকশন (`Hero`, `Features`, `Pricing`, `Stats`) আলাদা আলাদা ফাইলে রাখা হয়েছে, যা কোড মেইনটেইন করা এবং ফিউচার আপডেট দেওয়া সহজ করে।

### ২. অ্যাডভান্সড ডিজাইন সিস্টেম
- **Color Palette:** প্রজেক্টে `Violet`, `Slate` এবং `Orange` কালারের একটি হারমোনি ব্যবহার করা হয়েছে।
- **Glassmorphism:** নেভিগেশন বার এবং কিছু কার্ডে হালকা ব্লার ও ট্রান্সপারেন্সি ব্যবহার করা হয়েছে।
- **Custom Graphics:** লাইফটাইম প্ল্যানের জন্য একটি কাস্টম **3D Server Stack** ইমেজ জেনারেট করে যুক্ত করা হয়েছে।

### ৩. ইউজার ইন্টারফেস (UI) অপ্টিমাইজেশন
- **Responsive Layout:** মোবাইল, ট্যাবলেট এবং ডেস্কটপ—সব ডিভাইসের জন্য গ্রিড লেআউট অপ্টিমাইজ করা হয়েছে (যেমন: `TrustedSection`-এ ২ কলাম গ্রিড ফিক্স)।
- **Micro-interactions:** প্রতিটি বাটনে এবং কার্ডে স্মুথ হোভার ইফেক্ট এবং স্কেলিং অ্যানিমেশন যুক্ত করা হয়েছে।
- **Bengali Typography:** বাংলা টেক্সটগুলো যেন সুন্দর দেখায়, সেজন্য ফন্ট ওয়েট এবং লাইন-হাইট অ্যাডজাস্ট করা হয়েছে।

### ৪. ডাটা-ড্রিভেন ডিজাইন
ফিচার লিস্ট, প্রাইসিং টেবিল এবং ডেমো আইটেমগুলো সরাসরি হার্ডকোড না করে `constants/` ফোল্ডার থেকে কন্ট্রোল করা হচ্ছে। এতে করে নতুন কোনো ফিচার বা প্ল্যান যোগ করতে হলে শুধুমাত্র একটি অবজেক্ট পরিবর্তন করলেই পুরো সাইট আপডেট হয়ে যাবে।

---

## 🎯 Key Components

### Page Sections
- **Hero Section** - Eye-catching introduction with outline CTA buttons.
- **Features Section** - Icon-based grid with dynamic color backgrounds.
- **Pricing Section** - Glassy cards with tinted backgrounds matching their borders.
- **Trusted Section** - 2-column mobile grid for brand social proof.

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |

---

<div align="center">

Made with ❤️ by [Ecomtara Team](https://github.com/arabyhossainabid)

[⬆ Back to Top](#-ecomtara)

</div>
