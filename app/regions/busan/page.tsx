"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function BusanRegionPage() {
  const faqs = [
    {
      q: "부산에서 장기요양 서비스는 어떻게 확인하나요?",
      a: "부산시 및 구·군 복지센터에서 지역별 서비스 안내와 절차를 제공합니다. 본 페이지는 안내 목적이며, 최신 정보는 관할 기관에서 확인하세요.",
    },
    {
      q: "방문요양 서비스 신청은 어떻게 하나요?",
      a: "수급자격 판정 이후 지자체 또는 지정 기관을 통해 신청이 진행됩니다. 세부 절차는 관할 복지센터에 문의하세요.",
    },
    {
      q: "부산 지역 지원 정책은 어디서 확인하나요?",
      a: "지자체별 지원 항목과 기준이 다르므로 부산시 복지포털 및 구청 공지사항을 확인하시기 바랍니다.",
    },
    {
      q: "기관 선택 시 검토해야 할 사항은?",
      a: "기관 인증, 제공 서비스 범위, 이용자 후기 등을 확인하고 상담을 통해 사전에 조건을 점검하세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">지역 안내 — 부산</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">부산 지역 장기요양 & 방문요양 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">부산 지역의 장기요양·방문요양 관련 일반 안내입니다. 정책과 절차는 관할 기관에서 최종 확인하시기 바랍니다.</p>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">지역 서비스 개요</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">지역별 서비스와 지원 범위가 다를 수 있습니다. 신청 전 관할 복지센터에서 최신 정보를 확인하세요.</p>
        </article>

        <MiddleAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900">
                  {faq.q}
                  <span className="text-slate-500">+</span>
                </summary>
                <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-700">{faq.a}</div>
              </details>
            ))}
          </div>
        </article>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/long-term-care" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">등급·급여·한도 등 장기요양 관련 안내입니다.</p>
            </Link>
            <Link href="/visit-care-guide" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 서비스의 주요 안내와 절차입니다.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금·복지 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면·지원대상 등 복지정보를 확인하세요.</p>
            </Link>
            <Link href="/caregiver-info" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">제공자 정보와 채용·자격 관련 안내입니다.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
