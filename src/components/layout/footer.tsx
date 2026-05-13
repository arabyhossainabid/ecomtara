import React from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-12">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-sm">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                Ecom<span className="text-purple-600">tara</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors hover:bg-purple-50 hover:text-purple-600"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors hover:bg-purple-50 hover:text-purple-600"
                aria-label="Twitter / X"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors hover:bg-purple-50 hover:text-purple-600"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2.5">
              {navigationItems.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-purple-600"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              সলিউশন
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-sm text-slate-600 transition-colors hover:text-purple-600">
                  ই-কমার্স সেটআপ
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-slate-600 transition-colors hover:text-purple-600">
                  ইনভেন্টরি ট্র্যাকিং
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-slate-600 transition-colors hover:text-purple-600">
                  কুরিয়ার বুকিং
                </a>
              </li>
              <li>
                <a href="#pricing-lifetime" className="text-sm text-slate-600 transition-colors hover:text-purple-600">
                  লাইফটাইম ডিল
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              সাপোর্ট
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>ইমেইল: support@ecomtara.com</li>
              <li>হটলাইন: +880 1234-567890</li>
              <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
              <li className="pt-2">
                <a
                  href="#cta"
                  className="inline-flex font-semibold text-purple-600 hover:underline"
                >
                  যোগাযোগ করুন &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ecomtara. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1">
            বাংলাদেশি উদ্যোক্তাদের জন্য তৈরি{" "}
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 mx-0.5" />
            ভালোবাসায়
          </p>
        </div>
      </div>
    </footer>
  );
}
