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

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the development server**

```bash
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the live project.

---

## 📂 Project Structure

```
ecomtara/
├── .next/                 # Next.js build output
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (marketing)/  # Marketing route group
│   │   │   └── page.tsx  # Landing page
│   │   ├── globals.css   # Global styles
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── common/      # Reusable common components
│   │   │   ├── badge-item.tsx
│   │   │   ├── demo-card.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── gradient-button.tsx
│   │   │   ├── pricing-card.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── stat-card.tsx
│   │   │   └── trusted-brand.tsx
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page section components
│   │       ├── cta-section.tsx
│   │       ├── demos-section.tsx
│   │       ├── features-section.tsx
│   │       ├── hero-section.tsx
│   │       ├── pricing-section.tsx
│   │       ├── stats-section.tsx
│   │       └── trusted-section.tsx
│   ├── config/          # Configuration files
│   ├── constants/       # Static data and constants
│   │   ├── demos.ts
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   └── stats.ts
│   ├── lib/             # Utility functions
│   ├── styles/          # Additional styles
│   └── types/           # TypeScript type definitions
├── .gitignore           # Git ignore rules
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── pnpm-lock.yaml      # pnpm lock file
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

---

## 🎯 Key Components

### Page Sections

- **Hero Section** - Eye-catching introduction with call-to-action
- **Features Section** - Showcase of key platform features
- **Pricing Section** - Transparent pricing plans with feature comparison
- **Demos Section** - Interactive product demonstrations
- **Stats Section** - Key metrics and social proof
- **Trusted Section** - Brand logos and testimonials
- **CTA Section** - Final call-to-action for conversion

### Common Components

- **Badge Item** - Small badge components for labels
- **Demo Card** - Card component for demo showcases
- **Feature Card** - Feature highlight cards
- **Gradient Button** - Styled button with gradient effects
- **Pricing Card** - Detailed pricing plan cards
- **Section Heading** - Consistent section headers
- **Stat Card** - Statistics display cards
- **Trusted Brand** - Brand logo components

---

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Click **Deploy**

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**
- **Railway**
- **Render**

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

<div align="center">

Made with ❤️ by [Your Name](https://github.com/yourusername)

[⬆ Back to Top](#-ecomtara)

</div>
