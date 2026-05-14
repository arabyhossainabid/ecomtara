"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { navigationItems } from "@/config/navigation";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100/40 bg-white/90 backdrop-blur-md transition-all">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo Left Side */}
          <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-200 transition-transform group-hover:scale-105">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Ecomtara
            </span>
          </a>

          {/* Navigation Center Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600 whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#demos"
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-violet-700 hover:scale-105 active:scale-95"
            >
              ডেমো দেখুন
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-purple-50 hover:text-purple-600 focus:outline-none"
            aria-label="মেনু খুলুন"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-bold text-slate-900">Ecomtara</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="pt-6 border-t border-slate-100">
              <a
                href="#demos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white transition-all hover:bg-violet-700"
              >
                ডেমো দেখুন
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
