import React from "react";
import { cn } from "@/lib/cn";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function GradientButton({
  children,
  href,
  onClick,
  className,
  type = "button",
}: GradientButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 active:scale-95",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
