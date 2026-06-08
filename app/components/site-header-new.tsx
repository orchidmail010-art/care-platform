"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "장기요양",
    href: "/long-term-care",
    submenu: [
      { label: "장기요양 안내", href: "/long-term-care" },
      { label: "신청방법", href: "/long-term-care/apply" },
      { label: "등급안내", href: "/long-term-care/grade" },
      { label: "본인부담금", href: "/long-term-care/copayment" },
      { label: "혜택안내", href: "/long-term-care/benefits" },
      { label: "FAQ", href: "/long-term-care/faq" },
    ],
  },
  {
    label: "가족요양",
    href: "/family-care-guide",
    submenu: [
      { label: "가족요양 안내", href: "/family-care-guide" },
      { label: "60분 기준", href: "/family-care-guide/60min" },
      { label: "90분 기준", href: "/family-care-guide/90min" },
      { label: "조건", href: "/family-care-guide/conditions" },
      { label: "월급", href: "/family-care-guide/salary" },
      { label: "치매 가족요양", href: "/family-care-guide/dementia" },
      { label: "후기", href: "/family-care-guide/reviews" },
    ],
  },
  {
    label: "방문요양",
    href: "/visit-care-guide",
    submenu: [
      { label: "방문요양 안내", href: "/visit-care-guide" },
      { label: "본인부담금", href: "/visit-care-guide/copayment" },
      { label: "월한도액", href: "/visit-care-guide/monthly-limit" },
      { label: "이용시간", href: "/visit-care-guide/service-time" },
      { label: "실제 비용", href: "/visit-care-guide/cost" },
      { label: "FAQ", href: "/visit-care-guide/faq" },
    ],
  },
  {
    label: "요양보호사",
    href: "/caregiver-info",
    submenu: [
      { label: "요양보호사 안내", href: "/caregiver-info" },
      { label: "자격증", href: "/caregiver-info/certificate" },
      { label: "월급", href: "/caregiver-info/salary" },
      { label: "취업정보", href: "/caregiver-info/jobs" },
      { label: "현실후기", href: "/caregiver-info/reality" },
      { label: "시험일정", href: "/caregiver-info/exam" },
      { label: "FAQ", href: "/caregiver-info/faq" },
    ],
  },
  {
    label: "사회복지사",
    href: "/social-worker-info",
    submenu: [
      { label: "사회복지사 안내", href: "/social-worker-info" },
      { label: "자격증", href: "/social-worker-info/certificate" },
      { label: "취업정보", href: "/social-worker-info/jobs" },
      { label: "급여정보", href: "/social-worker-info/salary" },
      { label: "FAQ", href: "/social-worker-info/faq" },
    ],
  },
  {
    label: "지원금",
    href: "/support-benefits",
    submenu: [
      { label: "지원금/감면 제도", href: "/support-benefits" },
      { label: "본인부담금 감면", href: "/support-benefits/copayment-reduction" },
      { label: "지자체 지원금", href: "/support-benefits/local-support" },
      { label: "신청서류", href: "/support-benefits/documents" },
      { label: "FAQ", href: "/support-benefits/faq" },
    ],
  },
  {
    label: "계산기",
    href: "#",
    submenu: [
      { label: "가족요양 계산기", href: "/family-care-calculator" },
      { label: "방문요양 계산기", href: "/visit-care-calculator" },
      { label: "본인부담금 계산기", href: "/calculators/copayment" },
      { label: "월한도액 계산기", href: "/calculators/monthly-limit" },
      { label: "급여 계산기", href: "/calculators/salary" },
      { label: "감경 계산기", href: "/calculators/reduction" },
    ],
  },
];

function NavDropdown({ item }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-slate-900">
        <span>{item.label}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      <div className="absolute top-full left-0 mt-1 hidden min-w-[180px] flex-col rounded-lg border border-slate-200 bg-white shadow-lg group-hover:flex">
        {item.submenu.map((subitem: any, idx: number) => (
          <Link
            key={subitem.label}
            href={subitem.href}
            className={`px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 ${
              idx !== item.submenu.length - 1 ? "border-b border-slate-100" : ""
            } ${idx === 0 ? "rounded-t-md" : ""} ${
              idx === item.submenu.length - 1 ? "rounded-b-md" : ""
            }`}
          >
            {subitem.label}
          </Link>
        ))}
      </div>

      <div className="hidden flex-col sm:hidden">
        {isOpen && (
          <div className="mt-2 flex flex-col rounded-lg border border-slate-200 bg-white shadow-lg">
            {item.submenu.map((subitem: any, idx: number) => (
              <Link
                key={subitem.label}
                href={subitem.href}
                className={`px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 ${
                  idx !== item.submenu.length - 1 ? "border-b border-slate-100" : ""
                } ${idx === 0 ? "rounded-t-md" : ""} ${
                  idx === item.submenu.length - 1 ? "rounded-b-md" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {subitem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MobileNav({ items }: any) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="flex flex-col gap-1 sm:hidden">
      {items.map((item: any) => (
        <div key={item.label} className="border-b border-slate-100 last:border-b-0">
          <button
            onClick={() =>
              setOpenMenu(openMenu === item.label ? null : item.label)
            }
            className="flex w-full items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            <span>{item.label}</span>
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                openMenu === item.label ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          {openMenu === item.label && (
            <div className="flex flex-col bg-slate-50">
              {item.submenu.map((subitem: any) => (
                <Link
                  key={subitem.label}
                  href={subitem.href}
                  className="px-6 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  onClick={() => setOpenMenu(null)}
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col leading-tight text-slate-900"
          >
            <span className="text-sm font-bold tracking-tight sm:text-base">
              돌봄닥
            </span>

            <span className="text-[11px] font-medium text-slate-500 sm:text-xs">
              국민돌봄 복지플랫폼
            </span>
          </Link>
        </div>

        <nav className="hidden flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600 sm:gap-x-5 sm:flex sm:text-sm">
          {navItems.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
        </nav>

        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
