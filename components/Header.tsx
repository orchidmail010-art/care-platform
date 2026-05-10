"use client";

import Link from "next/link";

const navItems = [
  { label: "홈", href: "/" },
  { label: "가족요양 계산기", href: "/family-care-calculator" },
  { label: "방문요양 계산기", href: "/visit-care-calculator" },
  { label: "지원금", href: "/#support" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">
            국민돌봄 복지플랫폼
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600 sm:gap-x-5 sm:text-sm">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-md px-1 py-0.5 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
