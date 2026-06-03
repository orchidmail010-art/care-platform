"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";

export default function ReductionCalculatorInfoPage() {
  const faqs = [
    {
      q: "감경 제도란 무엇인가요?",
      a: "소득 수준이나 특정 조건을 충족하는 경우 본인부담금을 일부 감면해 주는 제도입니다. 지자체별로 기준과 절차가 다를 수 있습니다.",
    },
    {
      q: "감경 신청은 어떻게 하나요?",
      a: "지자체 복지과나 서비스 제공 기관을 통해 신청할 수 있으며, 소득증빙 등 필요한 서류가 요구됩니다.",
    },
    {
      q: "감경 대상은 누구인가요?",
      a: "기초수급자, 차상위 계층, 장애인 등 일부 취약 계층이 감경 대상이 될 수 있습니다. 정확한 자격은 관할 기관에 문의하세요.",
    },
    {
      q: "감경 수준은 얼마나 되나요?",
      a: "감경 수준은 대상자 유형과 지자체 규정에 따라 다르며, 일부는 전액 감면이 적용되기도 합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">계산기 안내</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">본인부담 감경 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">감경 제도와 신청 절차, 대상자 안내입니다. 정확한 감경 적용 여부는 관할 기관에서 확인하세요.</p>
        </div>

        <TopAd />

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감경 제도 요약</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">감경은 소득 및 자산 수준, 기타 조건에 따라 결정됩니다. 신청과 심사를 통해 최종 감경 여부가 확정됩니다.</p>
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
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/support-benefits" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감경 및 지원 혜택을 확인하세요.</p>
            </Link>
            <Link href="/caregiver-info/salary" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">요양보호사 급여</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">급여와 감경 적용 사례를 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여 관련 정보를 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 관련 감경 여부를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
